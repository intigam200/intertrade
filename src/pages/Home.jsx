import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FiArrowRight,
  FiClipboard,
  FiDownload,
  FiFileText,
  FiMail,
  FiNavigation,
  FiPhone,
  FiShield,
  FiTruck,
  FiUserCheck,
} from 'react-icons/fi'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import HeroSlideshow from '../components/HeroSlideshow.jsx'
import SectorVideo from '../components/SectorVideo.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { BrandStrip, ContactRow, CtaBlock, Photo, SectionIntro, StandardTags, StepsCard } from '../components/ui.jsx'
import { contacts, useProfilePdf } from '../data/company.js'
import { useI18n } from '../i18n/index.jsx'

const benefitIcons = [FiClipboard, FiShield, FiTruck, FiFileText]
const logisticsIcons = [FiTruck, FiNavigation, FiFileText, FiClipboard]
const industryIcons = ['oil', 'mining', 'plant']

function Hero() {
  const { t, path } = useI18n()
  const profile = useProfilePdf()
  const [hovered, setHovered] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => window.scrollY > 80 && setScrolled(true)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      className="on-dark relative flex min-h-[68vh] items-center overflow-hidden bg-navy [min-height:68svh]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Фото занимает правые 80% и растворяется в тёмно-синем слева.
          На телефоне — во всю ширину, растворяется сверху вниз. */}
      <div className="absolute inset-0 brightness-[0.7] saturate-[0.8] [mask-image:linear-gradient(180deg,transparent_0%,black_45%)] md:left-auto md:w-[80%] md:brightness-[0.62] md:[mask-image:linear-gradient(90deg,transparent_0%,transparent_4%,black_28%)]">
        <HeroSlideshow />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,25,45,0.4)_0%,rgba(15,25,45,0.88)_55%,#1B2A4A_100%)] md:bg-[linear-gradient(90deg,rgba(27,42,74,0.92)_20%,rgba(27,42,74,0.62)_50%,rgba(18,29,50,0.38)_100%)]" />

      <div className="container-wide relative z-[1] pb-16 pt-24 md:pb-16 md:pt-[104px]">
        <div className="max-w-[860px]">
          <p className="mb-[18px] text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-soft">
            {t.home.eyebrow}
          </p>
          <h1 className="mb-[18px] text-[clamp(32px,4.6vw,54px)] font-extrabold leading-[1.12] tracking-[-0.025em] text-white">
            {t.home.h1.map((line, i) => (
              <span key={line}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h1>
          <p className="mb-[30px] max-w-[600px] text-[clamp(16px,1.8vw,19px)] leading-[1.7] text-white">
            {t.home.lead}
          </p>
          <div className="mb-9 flex flex-wrap gap-4">
            <Link to={path('contacts')} className="btn-primary !px-8 !py-4 !text-[17px]">
              {t.home.ctaPrimary}
              <FiArrowRight className="h-[18px] w-[18px]" aria-hidden />
            </Link>
            {/* Кнопка появляется, как только PDF положен в public/ */}
            {profile && (
              <a href={profile} download className="btn-secondary">
                <FiDownload className="h-[18px] w-[18px]" aria-hidden />
                {t.home.ctaProfile}
              </a>
            )}
          </div>

          <ul className="flex max-w-[720px] flex-wrap gap-4 md:flex-nowrap">
            {t.home.trust.map((item) => (
              <li
                key={item.title}
                className="min-w-[45%] flex-1 rounded-lg bg-black/40 p-4 backdrop-blur-[4px] md:min-w-0"
              >
                <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-accent-soft">
                  {item.title}
                </p>
                <p className="text-[13px] leading-normal text-white">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* подсказка прокрутки: светится, пока курсор над первым экраном */}
      <span
        aria-hidden
        className={`pointer-events-none absolute bottom-7 left-1/2 z-[2] hidden h-0.5 w-11 -translate-x-1/2 rounded-sm bg-white/70 shadow-[0_0_10px_1px_rgba(255,255,255,0.5)] transition-opacity duration-500 md:block ${
          hovered && !scrolled ? 'animate-float opacity-100' : 'opacity-0'
        }`}
      />
    </section>
  )
}

/* Матрица: отрасль → оборудование → стандарты. На телефоне — карточки. */
function Matrix() {
  const { t, d, path } = useI18n()
  const m = t.home.matrix
  return (
    <Reveal className="mt-12 overflow-hidden rounded-[10px] bg-white shadow-card">
      <table className="w-full border-collapse text-left">
        <thead className="hidden bg-navy text-white md:table-header-group">
          <tr>
            {[m.colSector, m.colScope, m.colStandards].map((col) => (
              <th key={col} scope="col" className="px-6 py-4 text-[12px] font-bold uppercase tracking-[0.1em]">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {d.catalog.map((c) => (
            <tr key={c.id} className="block border-t border-line first:border-t-0 md:table-row md:first:border-t">
              <th scope="row" className="block px-6 pb-2 pt-6 align-top md:table-cell md:w-[24%] md:py-6">
                <Link to={path('products', `#${c.id}`)} className="hover-icon group flex items-center gap-3">
                  <span className="icon-circle h-12 w-12 bg-sky-bg">
                    <Icon name={c.icon} className="tm-icon h-7 w-7" />
                  </span>
                  <span className="text-[17px] font-bold leading-snug text-navy group-hover:text-accent">{c.title}</span>
                </Link>
              </th>
              <td className="block px-6 py-2 align-top md:table-cell md:py-6">
                <span className="mb-1 block text-[11px] font-bold uppercase tracking-[0.1em] text-muted md:hidden">
                  {m.colScope}
                </span>
                <p className="text-[15px] leading-relaxed text-graphite">{c.scope.join(', ')}</p>
              </td>
              <td className="block px-6 pb-6 pt-2 align-top md:table-cell md:w-[34%] md:py-6">
                <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] text-muted md:hidden">
                  {m.colStandards}
                </span>
                <StandardTags items={c.standards} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  )
}

export default function Home() {
  const { t, d, path } = useI18n()

  return (
    <>
      <Hero />
      <BrandStrip />

      {/* ── Полоса преимуществ ─────────────────────────────────────── */}
      <div className="relative z-[2] bg-white shadow-bar">
        <ul className="container-wide grid grid-cols-2 lg:grid-cols-4">
          {d.advantages.map((item, i) => {
            const BenefitIcon = benefitIcons[i]
            return (
              <li
                key={item.title}
                className={`hover-icon px-4 py-7 sm:px-7 sm:py-8 ${i % 2 === 1 ? 'border-l border-line' : ''} ${
                  i >= 2 ? 'border-t border-line lg:border-t-0' : ''
                } ${i === 2 ? 'lg:border-l' : ''}`}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-bg">
                  <BenefitIcon className="tm-icon h-6 w-6 text-sky" aria-hidden />
                </span>
                <p className="mb-1.5 mt-3.5 text-[15px] font-bold text-navy">{item.title}</p>
                <p className="text-[13px] leading-[1.55] text-muted">{item.text}</p>
              </li>
            )
          })}
        </ul>
      </div>

      {/* ── Ключевые компетенции ───────────────────────────────────── */}
      <section id="services" className="section bg-white">
        <div className="container-x">
          <SectionIntro
            className="max-w-[820px]"
            label={t.home.services.label}
            title={t.home.services.title}
            desc={t.home.services.desc}
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {d.activities.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 80} className="h-full">
                <Link
                  to={path('services', `#${a.slug}`)}
                  className="card card-hover hover-icon flex h-full flex-col p-7"
                >
                  <span className="icon-circle h-16 w-16">
                    <Icon name={a.icon} className="tm-icon h-9 w-9" />
                  </span>
                  <h3 className="mt-6 text-[19px] font-bold leading-snug text-navy">{a.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.65] text-muted">{a.short}</p>
                  <span className="mt-auto flex items-center gap-2 pt-6 text-[14px] font-semibold text-accent">
                    {t.home.services.more}
                    <FiArrowRight className="h-[18px] w-[18px]" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Матрица оборудования и стандартов ──────────────────────── */}
      <section
        id="products"
        className="section bg-mist bg-[radial-gradient(ellipse_420px_100%_at_left,rgba(45,114,210,0.07),transparent_60%),radial-gradient(ellipse_420px_100%_at_right,rgba(45,114,210,0.07),transparent_60%)]"
      >
        <div className="container-x">
          <SectionIntro label={t.home.matrix.label} title={t.home.matrix.title} desc={t.home.matrix.desc} />
          <Matrix />
          <Reveal className="mt-10 flex justify-center">
            <Link to={path('products')} className="btn-outline bg-white">
              {t.home.matrix.all}
              <FiArrowRight className="h-[18px] w-[18px]" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Запасные части ─────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionIntro label={t.home.spare.label} title={t.home.spare.title} desc={t.home.spare.desc} />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {d.spareParts.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 70} className="h-full">
                <Link
                  to={path('products', `#${cat.id}`)}
                  className="card card-hover hover-icon flex h-full flex-col p-6"
                >
                  <span className="icon-circle h-14 w-14 bg-sky-bg">
                    <Icon name={cat.icon} className="tm-icon h-8 w-8" />
                  </span>
                  <h3 className="mt-5 text-[16px] font-bold leading-snug text-navy">{cat.title}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {cat.items.slice(0, 3).map((item) => (
                      <li key={item.title} className="flex gap-2 text-[13px] leading-snug text-muted">
                        <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                        {item.title}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto flex items-center gap-2 pt-5 text-[14px] font-semibold text-accent">
                    {t.home.spare.more}
                    <FiArrowRight className="h-[18px] w-[18px]" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Отрасли ────────────────────────────────────────────────── */}
      <section id="industries" className="section bg-mist">
        <div className="container-x">
          <div className="flex items-start justify-between gap-10">
            <SectionIntro
              className="max-w-[560px]"
              label={t.home.industries.label}
              title={t.home.industries.title}
              desc={t.home.industries.desc}
            />
            <SectorVideo
              className="hidden h-[240px] w-[570px] max-w-[55%] shrink-0 min-[801px]:block"
              posterAlt={t.home.industries.posterAlt}
              labels={t.home.industries.videoLabels}
            />
          </div>

          {/* инфо-полоса: на чём держится исполнение */}
          <Reveal className="mt-10 grid grid-cols-1 overflow-hidden rounded-[10px] bg-white shadow-card md:grid-cols-3">
            {d.capabilities.map((c, i) => (
              <div
                key={c.title}
                className={`hover-icon flex items-center gap-4 px-7 py-6 ${i > 0 ? 'border-t border-line md:border-l md:border-t-0' : ''}`}
              >
                <Icon name={c.icon} className="tm-icon h-9 w-9 shrink-0 text-accent" />
                <div>
                  <p className="text-[15px] font-bold text-navy">{c.title}</p>
                  <p className="mt-0.5 text-[13px] leading-snug text-muted">{c.text}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {t.home.industries.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <Link
                  to={i < 2 ? path('products', `#${d.catalog[i].id}`) : path('contacts')}
                  className="hover-icon flex h-full items-center gap-4 rounded-[10px] border-[1.5px] border-accent bg-white p-5 transition-shadow duration-150 hover:shadow-[0_8px_24px_rgba(27,42,74,0.12)]"
                >
                  <span className="icon-circle h-[60px] w-[60px]">
                    <Icon name={industryIcons[i]} className="tm-icon h-[30px] w-[30px]" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-[17px] font-bold leading-snug text-navy">{item.title}</span>
                    <span className="mt-1 block text-[14px] leading-snug text-muted">{item.text}</span>
                  </span>
                  <FiArrowRight className="h-5 w-5 shrink-0 text-accent" aria-hidden />
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <CtaBlock bare />
          </div>
        </div>
      </section>

      {/* ── Проектная логистика ────────────────────────────────────── */}
      <section className="on-dark section relative overflow-hidden bg-navy">
        <div className="absolute inset-0" aria-hidden>
          <Photo
            name="slide-refinery"
            widths={[800, 1536]}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/[0.82]" />
        </div>
        <div className="container-x relative">
          <SectionIntro
            center
            dark
            className="max-w-[760px]"
            label={t.home.network.label}
            title={t.home.network.title}
            desc={t.home.network.desc}
          />
          <Reveal as="ul" className="mt-8 flex flex-wrap justify-center gap-2.5">
            {t.home.network.regions.map((region) => (
              <li
                key={region}
                className="rounded-full border border-white/25 bg-white/[0.06] px-4 py-1.5 text-[14px] font-semibold text-white"
              >
                {region}
              </li>
            ))}
          </Reveal>

          <Reveal className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
            {t.home.network.steps.map((step, i) => {
              const StepIcon = logisticsIcons[i]
              return (
                <div key={step.title} className="bg-navy/60 px-6 py-8 text-center">
                  <StepIcon className="mx-auto h-7 w-7 text-white/50" aria-hidden />
                  <p className="mt-4 text-[15px] font-bold text-white">{step.title}</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-white/70">{step.text}</p>
                </div>
              )
            })}
          </Reveal>

          <Reveal className="mt-10 flex justify-center">
            <Link to={path('services', '#logistics')} className="btn-secondary">
              {t.home.services.more}
              <FiArrowRight className="h-[18px] w-[18px]" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── О компании ─────────────────────────────────────────────── */}
      <section id="about" className="section relative overflow-hidden bg-cloud">
        {/* точечная карта в правом верхнем углу */}
        <svg className="pointer-events-none absolute -right-20 -top-10 hidden h-[420px] w-[620px] md:block" aria-hidden>
          <defs>
            <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.6" fill="rgba(27,42,74,0.07)" />
            </pattern>
            <radialGradient id="dots-fade">
              <stop offset="0" stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="dots-mask">
              <rect width="100%" height="100%" fill="url(#dots-fade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" mask="url(#dots-mask)" />
        </svg>

        <div className="container-x relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionIntro large label={t.home.about.label} title={t.home.about.title} />
            <Reveal>
              <div className="rule-accent" />
              <p className="desc">{d.positioning}</p>
              <ul className="mt-8 grid max-w-[520px] grid-cols-2 gap-x-6 gap-y-4">
                {d.staffEngineers.map((item) => (
                  <li key={item} className="hover-icon flex items-center gap-3 text-[14px] font-semibold text-navy">
                    <span className="icon-circle h-10 w-10 bg-white shadow-card">
                      <FiUserCheck className="tm-icon h-[18px] w-[18px]" aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to={path('about')} className="btn-dark mt-9">
                {t.home.about.button}
                <FiArrowRight className="h-[18px] w-[18px]" aria-hidden />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <StepsCard title={t.home.about.stepsTitle} steps={d.workflow} />
          </Reveal>
        </div>
      </section>

      {/* ── Заявка ─────────────────────────────────────────────────── */}
      <section id="contact" className="section bg-white">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionIntro label={t.home.contact.label} title={t.home.contact.title} desc={t.home.contact.desc} />
            <Reveal className="mt-8 space-y-5">
              <ContactRow icon={FiPhone} label={t.contacts.phone} href={contacts.phoneHref} text={contacts.phone} />
              <ContactRow icon={FiMail} label={t.contacts.email} href={contacts.emailHref} text={contacts.email} />
            </Reveal>
          </div>
          <Reveal className="rounded-xl border border-line p-6 sm:p-8">
            <ContactForm idPrefix="home" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
