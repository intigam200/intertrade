import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { IconArrow } from './Icons.jsx'
import { brands, contacts } from '../data/company.js'
import { useI18n } from '../i18n/index.jsx'

/* Фотография сайта: AVIF с запасным WebP и набором ширин под srcset.
   Файлы готовит scripts/build-images.py; самая широкая версия лежит без
   суффикса, остальные — с ним (industry-hero-760.avif). */
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
        decoding="async"
        draggable="false"
        aria-hidden={alt ? undefined : true}
      />
    </picture>
  )
}

/* Заголовок секции: маркировка слева, заголовок и лид в асимметричной сетке */
export function SectionHead({ tag, title, lead, dark = false, className = '' }) {
  return (
    <Reveal className={`grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 ${className}`}>
      <div className="lg:col-span-3">
        <p className="tag">{tag}</p>
      </div>
      <div className="lg:col-span-6">
        <h2
          className={`text-[30px] font-bold uppercase leading-[1.05] sm:text-[40px] lg:text-[46px] ${
            dark ? 'text-white' : 'text-navy-900'
          }`}
        >
          {title}
        </h2>
      </div>
      {lead && (
        <div className="lg:col-span-3">
          <p className={`text-[15px] leading-relaxed ${dark ? 'text-steel-300' : 'text-steel-500'}`}>
            {lead}
          </p>
        </div>
      )}
    </Reveal>
  )
}

/* Нумерованный список: крупный индекс как графический элемент */
export function IndexList({ items, dark = false, columns = 2 }) {
  const line = dark ? 'border-navy-700' : 'border-steel-200'
  return (
    <div
      className={`grid grid-cols-1 border-t ${line} ${
        columns === 3 ? 'lg:grid-cols-3' : 'md:grid-cols-2'
      }`}
    >
      {items.map((item, i) => (
        <Reveal
          key={item.index}
          delay={i * 70}
          className={`group border-b py-9 lg:py-12 ${line} ${
            columns === 3
              ? `lg:px-10 lg:first:pl-0 ${i > 0 ? 'lg:border-l' : ''}`
              : 'md:px-8 md:odd:pl-0 md:even:border-l'
          }`}
        >
          <div className="flex items-start gap-6">
            <span
              className={`font-display text-[44px] font-bold leading-none tracking-tightest lg:text-[56px] ${
                dark ? 'text-navy-700' : 'text-steel-200'
              } transition-colors duration-300 group-hover:text-ochre-500`}
            >
              {item.index}
            </span>
            <div className="pt-1">
              <h3
                className={`text-[19px] font-bold uppercase leading-tight lg:text-[22px] ${
                  dark ? 'text-white' : 'text-navy-900'
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`mt-3 max-w-md text-[15px] leading-relaxed ${
                  dark ? 'text-steel-300' : 'text-steel-500'
                }`}
              >
                {item.text}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

/* Лента брендов. Плейсхолдеры-подписи меняются на логотипы без правки разметки. */
export function BrandStrip() {
  const { t } = useI18n()
  const row = [...brands, ...brands]
  return (
    <section className="border-y border-navy-700 bg-navy-900 py-14">
      <div className="shell flex flex-col gap-3 pb-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="tag">{t.brandStrip.tag}</p>
          <h2 className="mt-4 text-[26px] font-bold uppercase leading-none text-white sm:text-[34px]">
            {t.brandStrip.title}
          </h2>
        </div>
        <p className="max-w-sm text-[14px] leading-relaxed text-steel-400">{t.brandStrip.text}</p>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee">
          {row.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="flex h-16 min-w-[190px] items-center justify-center border border-navy-700 border-r-0 px-8 font-mono text-[13px] uppercase tracking-wide2 text-steel-400 last:border-r"
            >
              {brand}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-navy-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-navy-900 to-transparent" />
      </div>
    </section>
  )
}

/* Полоса перехода к заявке */
export function CtaBand({ title, text }) {
  const { t, path } = useI18n()
  return (
    <section className="bg-ochre-500">
      <div className="shell grid grid-cols-1 items-center gap-8 py-14 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-7">
          <h2 className="max-w-3xl text-[28px] font-bold uppercase leading-[1.08] text-white sm:text-[38px]">
            {title || t.cta.title}
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/85">{text || t.cta.text}</p>
        </div>
        <div className="flex flex-col gap-4 lg:col-span-4 lg:col-start-9 lg:items-end">
          <Link
            to={path('contacts')}
            className="btn w-full bg-navy-950 text-white hover:bg-white hover:text-navy-950 sm:w-auto"
          >
            {t.cta.button}
            <IconArrow />
          </Link>
          <a
            href={contacts.phoneHref}
            className="font-mono text-[18px] tracking-wide text-white hover:text-navy-950"
          >
            {contacts.phone}
          </a>
        </div>
      </div>
    </section>
  )
}

/* Шапка внутренней страницы */
export function PageHero({ code, title, lead, image, imageAlt, children }) {
  return (
    <section className="relative overflow-hidden border-b border-navy-700 bg-navy-900">
      {image && (
        <div className="absolute inset-0" aria-hidden>
          <Photo
            name={image.name}
            widths={image.widths}
            sizes="100vw"
            alt={imageAlt}
            width={image.width}
            height={image.height}
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-navy-950/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/40" />
        </div>
      )}
      <div className="absolute inset-0 bg-blueprint bg-grid opacity-60" aria-hidden />
      <div className="shell relative grid grid-cols-1 gap-8 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-2">
          <p className="font-mono text-[11px] uppercase tracking-wide2 text-ochre-500">{code}</p>
        </div>
        <div className="lg:col-span-7">
          <h1 className="text-[34px] font-bold uppercase leading-[1.03] text-white sm:text-[52px] lg:text-[62px]">
            {title}
          </h1>
          {lead && <p className="mt-7 max-w-2xl text-[16px] leading-relaxed text-steel-300">{lead}</p>}
          {children}
        </div>
      </div>
    </section>
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
