import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiArrowRight, FiCheck, FiMessageSquare } from 'react-icons/fi'
import Reveal from './Reveal.jsx'
import { brands, contacts } from '../data/company.js'
import { useI18n } from '../i18n/index.jsx'

/* Фотография сайта: AVIF с запасным WebP и набором ширин под srcset.
   Файлы готовит scripts/build-images.py; самая широкая версия лежит без
   суффикса, остальные — с ним (slide-welding-800.avif). */
export function Photo({
  name,
  widths,
  sizes = '100vw',
  alt = '',
  width,
  height,
  className = '',
  priority = false,
}) {
  const max = Math.max(...widths)
  const srcSet = (ext) =>
    widths.map((w) => `/images/${name}${w === max ? '' : `-${w}`}.${ext} ${w}w`).join(', ')

  return (
    <picture>
      <source type="image/avif" srcSet={srcSet('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet('webp')} sizes={sizes} />
      <img
        src={`/images/${name}.webp`}
        alt={alt}
        width={width}
        height={height}
        className={`select-none ${className}`}
        loading={priority ? 'eager' : 'lazy'}
        fetchpriority={priority ? 'high' : undefined}
        decoding="async"
        draggable="false"
        aria-hidden={alt ? undefined : true}
      />
    </picture>
  )
}

/* Label → Title → Desc — начало каждой секции */
export function SectionIntro({ label, title, desc, dark = false, center = false, large = false, className = '' }) {
  return (
    <Reveal className={`${center ? 'mx-auto text-center' : ''} ${className}`}>
      {label && <p className={dark ? 'eyebrow-dark' : 'eyebrow'}>{label}</p>}
      <h2 className={`${large ? 'h2-lg' : 'h2'} ${dark ? '!text-white' : ''}`}>{title}</h2>
      {desc && (
        <p className={`desc ${center ? 'mx-auto' : ''} ${dark ? '!text-white/75' : ''}`}>{desc}</p>
      )}
    </Reveal>
  )
}

/* Список с галочками в квадратах — «Почему мы», состав работ */
export function CheckList({ items, compact = false, className }) {
  return (
    <ul className={className || (compact ? 'space-y-3' : 'space-y-7')}>
      {items.map((item) => {
        const title = typeof item === 'string' ? item : item.title
        return (
          <li key={title} className="hover-icon flex gap-4">
            <span
              className={`flex shrink-0 items-center justify-center rounded-btn bg-sky-bg text-accent ${
                compact ? 'h-7 w-7' : 'h-9 w-9'
              }`}
            >
              <FiCheck className={`tm-icon ${compact ? 'h-4 w-4' : 'h-5 w-5'}`} aria-hidden />
            </span>
            <div className={compact ? 'pt-0.5' : 'pt-1'}>
              <p className={`font-bold text-navy ${compact ? 'text-[15px] font-semibold' : 'text-[15px]'}`}>
                {title}
              </p>
              {item.text && <p className="mt-1 text-[14px] leading-[1.65] text-muted">{item.text}</p>}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

/* Карточка шагов: номер в круге, шаги связаны пунктиром */
export function StepsCard({ steps, title }) {
  return (
    <div className="rounded-xl bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] md:p-10">
      {title && <p className="mb-8 text-[13px] font-bold uppercase tracking-[0.1em] text-navy">{title}</p>}
      <ol className="relative space-y-8">
        <span
          className="absolute bottom-5 left-[19px] top-5 border-l border-dashed border-line"
          aria-hidden
        />
        {steps.map((step, i) => (
          <li key={step.title} className="relative flex gap-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-[14px] font-bold text-white">
              {i + 1}
            </span>
            <div className="pt-1.5">
              <p className="text-[17px] font-bold text-navy">{step.title}</p>
              <p className="mt-1 text-[14px] leading-relaxed text-muted">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

/* Лента брендов. Плейсхолдеры-подписи меняются на логотипы без правки разметки. */
export function BrandStrip() {
  const { t } = useI18n()
  const row = [...brands, ...brands]
  return (
    <section className="on-dark relative overflow-hidden bg-navy-strip py-16 md:py-20">
      <div className="absolute inset-0" aria-hidden>
        <Photo
          name="slide-welding"
          widths={[800, 1600]}
          className="h-full w-full object-cover opacity-40 brightness-75 saturate-[0.7]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,32,58,0.95)_0%,rgba(20,32,58,0.86)_42%,rgba(20,32,58,0.62)_100%)]" />
      </div>

      <div className="container-wide relative">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
          <div>
            <p className="eyebrow-dark">{t.brandStrip.tag}</p>
            <h2 className="text-[clamp(28px,3.6vw,40px)] font-extrabold uppercase leading-[1.15] text-white">
              {t.brandStrip.title}
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-white/75">{t.brandStrip.text}</p>
        </div>
      </div>

      <div className="marquee relative mt-10 overflow-hidden">
        <ul className="flex min-h-[64px] w-max animate-marquee items-center md:min-h-[78px]">
          {row.map((brand, i) => (
            <li
              key={`${brand}-${i}`}
              aria-hidden={i >= brands.length ? true : undefined}
              className="px-8 text-[18px] font-extrabold uppercase tracking-[0.06em] text-white/70 transition-colors duration-200 hover:text-white md:px-11 md:text-[20px]"
            >
              {brand}
            </li>
          ))}
        </ul>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy-strip to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy-strip/70 to-transparent" />
      </div>
    </section>
  )
}

/* CTA-блок: белая карточка с тенью в светлой секции */
export function CtaBlock({ title, text, bare = false }) {
  const { t, path } = useI18n()
  const card = (
    <Reveal className="flex flex-col gap-6 rounded-[10px] bg-white px-7 py-8 shadow-card md:flex-row md:items-center md:justify-between md:px-9">
      <div className="hover-icon flex items-start gap-5">
        <span className="icon-circle h-14 w-14">
          <FiMessageSquare className="tm-icon h-6 w-6" aria-hidden />
        </span>
        <div>
          <h2 className="text-[20px] font-bold leading-snug text-navy">{title || t.cta.title}</h2>
          <p className="mt-1.5 max-w-xl text-[14px] leading-relaxed text-muted">{text || t.cta.text}</p>
        </div>
      </div>
      <div className="flex shrink-0 flex-col gap-2.5 md:items-end">
        <Link to={path('contacts')} className="btn-primary">
          {t.cta.button}
          <FiArrowRight className="h-[18px] w-[18px]" aria-hidden />
        </Link>
        <p className="text-[12px] text-muted">{t.cta.meta}</p>
      </div>
    </Reveal>
  )
  if (bare) return card
  return (
    <section className="bg-mist py-14 md:py-16">
      <div className="container-x">{card}</div>
    </section>
  )
}

/* Шапка внутренней страницы: тёмно-синий фон, фото справа растворяется */
export function PageHero({ label, title, lead, image, children }) {
  const { t, path } = useI18n()
  return (
    <section className="on-dark relative overflow-hidden bg-navy">
      {image && (
        <div
          className="absolute inset-0 brightness-[0.62] saturate-[0.8] [mask-image:linear-gradient(180deg,transparent_0%,black_45%)] md:left-auto md:w-[70%] md:[mask-image:linear-gradient(90deg,transparent_0%,transparent_4%,black_32%)]"
          aria-hidden
        >
          <Photo
            name={image}
            widths={[800, 1600]}
            sizes="(min-width: 768px) 70vw, 100vw"
            className="h-full w-full object-cover"
            priority
          />
        </div>
      )}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,25,45,0.55)_0%,rgba(15,25,45,0.88)_60%,#1B2A4A_100%)] md:bg-[linear-gradient(90deg,rgba(27,42,74,0.94)_25%,rgba(27,42,74,0.66)_55%,rgba(18,29,50,0.4)_100%)]" />

      <div className="container-wide relative py-14 md:py-20">
        <nav aria-label={t.breadcrumbs.label} className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-[13px] text-white/70">
            <li>
              <Link to={path('home')} className="hover:text-white">
                {t.breadcrumbs.home}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-white">
              {title}
            </li>
          </ol>
        </nav>
        <div className="max-w-[720px]">
          {label && <p className="eyebrow-dark !mb-4">{label}</p>}
          <h1 className="text-[clamp(32px,4.4vw,50px)] font-extrabold leading-[1.12] tracking-[-0.025em] text-white">
            {title}
          </h1>
          {lead && (
            <p className="mt-5 max-w-[600px] text-[clamp(16px,1.6vw,18px)] leading-[1.7] text-white/85">
              {lead}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}

/* Строка контакта: иконка в круге, подпись капсом, значение */
export function ContactRow({ icon: RowIcon, label, href, text }) {
  const body = (
    <>
      <span className="icon-circle h-11 w-11">
        <RowIcon className="tm-icon h-5 w-5" aria-hidden />
      </span>
      <span>
        <span className="block text-[11px] font-bold uppercase tracking-[0.1em] text-navy">{label}</span>
        <span className="mt-0.5 block text-[15px] text-muted transition-colors group-hover:text-accent">{text}</span>
      </span>
    </>
  )
  return href ? (
    <a href={href} className="hover-icon group flex items-center gap-4">
      {body}
    </a>
  ) : (
    <div className="flex items-center gap-4">{body}</div>
  )
}

/* Прокрутка вверх / к якорю при смене маршрута */
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
