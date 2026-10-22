import { Link } from 'react-router-dom'
import { FiArrowRight, FiUserCheck } from 'react-icons/fi'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import { BrandStrip, CheckList, CtaBlock, PageHero, Photo, SectionIntro } from '../components/ui.jsx'
import { useI18n } from '../i18n/index.jsx'

const industryIcons = ['oil', 'mining', 'plant']

export default function About() {
  const { t, d, path } = useI18n()

  return (
    <>
      <PageHero label={t.about.label} title={t.about.title} lead={d.positioning} image="slide-assembly" />

      {/* ── Миссия ─────────────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionIntro large label={t.about.mission.label} title={t.about.mission.title} />
            <Reveal>
              <div className="rule-accent" />
              <blockquote className="text-[clamp(18px,1.8vw,21px)] font-medium leading-[1.6] text-navy">
                {d.mission}
              </blockquote>
            </Reveal>
          </div>
          <Reveal className="space-y-4" delay={100}>
            <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-navy">{t.about.mission.industries}</p>
            {d.industries.map((item, i) => (
              <div key={item} className="hover-icon flex items-center gap-4 rounded-[10px] border border-line p-5">
                <span className="icon-circle h-[60px] w-[60px]">
                  <Icon name={industryIcons[i]} className="tm-icon h-[30px] w-[30px]" />
                </span>
                <p className="text-[17px] font-bold text-navy">{item}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Возможности ────────────────────────────────────────────── */}
      <section className="section bg-mist">
        <div className="container-x">
          <SectionIntro
            label={t.about.capabilities.label}
            title={t.about.capabilities.title}
            desc={t.about.capabilities.desc}
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {d.capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 80} className="card card-hover hover-icon p-7 shadow-card">
                <span className="icon-circle h-16 w-16">
                  <Icon name={c.icon} className="tm-icon h-9 w-9" />
                </span>
                <h3 className="mt-6 text-[18px] font-bold text-navy">{c.title}</h3>
                <div className="my-4 h-[3px] w-10 bg-accent" />
                <p className="text-[14px] leading-[1.65] text-muted">{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Специалисты ────────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionIntro
              label={t.about.specialists.label}
              title={t.about.specialists.title}
              desc={t.about.specialists.desc}
            />
            <Reveal className="mt-8">
              <CheckList items={d.specialists} />
            </Reveal>
          </div>
          <Reveal delay={100} className="self-start rounded-xl bg-navy p-8 text-white shadow-media md:p-10">
            <p className="eyebrow-dark">{t.about.staff.label}</p>
            <h3 className="text-[24px] font-bold leading-tight">{t.about.staff.title}</h3>
            <ul className="mt-7 space-y-px overflow-hidden rounded-md bg-white/[0.08]">
              {d.staffEngineers.map((item) => (
                <li key={item} className="flex items-center gap-4 bg-navy px-1 py-4 text-[15px] font-semibold">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/40">
                    <FiUserCheck className="h-[18px] w-[18px] text-accent-soft" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── География ──────────────────────────────────────────────── */}
      <section className="on-dark section relative overflow-hidden bg-navy">
        <div className="absolute inset-0" aria-hidden>
          <Photo
            name="kazakhstan"
            widths={[800, 1440, 1920]}
            className="h-full w-full object-cover object-[center_32%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(27,42,74,0.95)_0%,rgba(27,42,74,0.85)_50%,rgba(27,42,74,0.45)_100%)]" />
        </div>
        <div className="container-x relative">
          <div className="max-w-[620px]">
            <SectionIntro
              dark
              label={t.about.geography.label}
              title={t.about.geography.title}
              desc={t.about.geography.text}
            />
            <Reveal className="mt-8 flex flex-wrap gap-4">
              <Link to={path('products')} className="btn-primary">
                {t.about.geography.button}
                <FiArrowRight className="h-[18px] w-[18px]" aria-hidden />
              </Link>
              <Link to={path('contacts')} className="btn-secondary">
                {t.header.cta}
              </Link>
            </Reveal>
          </div>
          <p className="mt-14 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/70 md:text-right">
            {t.about.geography.caption}
          </p>
        </div>
      </section>

      <BrandStrip />
      <CtaBlock />
    </>
  )
}
