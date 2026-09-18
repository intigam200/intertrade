import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import { IconArrow } from '../components/Icons.jsx'
import { PageHero, Photo, SectionHead, IndexList, BrandStrip, CtaBand } from '../components/ui.jsx'
import { contacts } from '../data/company.js'
import { useI18n } from '../i18n/index.jsx'

export default function About() {
  const { t, d, path } = useI18n()

  return (
    <>
      <PageHero code={t.about.code} title={t.about.title} lead={d.positioning} />

      {/* ── Миссия ─────────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <p className="tag">{t.about.missionTag}</p>
          </div>
          <div className="lg:col-span-9">
            <blockquote className="border-l-2 border-ochre-500 pl-6 lg:pl-10">
              <p className="font-display text-[24px] font-bold uppercase leading-[1.15] tracking-tightest text-graphite-900 sm:text-[34px] lg:text-[40px]">
                {d.mission}
              </p>
            </blockquote>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {d.industries.map((item, i) => (
                <div key={item} className="border-t border-steel-200 pt-4">
                  <span className="font-mono text-[11px] tracking-wide2 text-ochre-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-2 text-[15px] leading-snug text-graphite-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Возможности ────────────────────────────────────────────── */}
      <section className="bg-steel-50 py-20 lg:py-28">
        <div className="shell">
          <SectionHead
            tag={t.about.capabilities.tag}
            title={t.about.capabilities.title}
            lead={t.about.capabilities.lead}
          />

          <div className="mt-14 grid grid-cols-1 border-t border-steel-200 md:grid-cols-3">
            {d.capabilities.map((c, i) => (
              <Reveal
                key={c.index}
                delay={i * 80}
                className={`border-b border-steel-200 py-10 md:px-10 md:first:pl-0 md:last:pr-0 lg:py-14 ${
                  i > 0 ? 'md:border-l' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <Icon name={c.icon} className="h-14 w-14 text-graphite-900" />
                  <span className="font-display text-[40px] font-bold leading-none tracking-tightest text-steel-200">
                    {c.index}
                  </span>
                </div>
                <h3 className="mt-8 text-[20px] font-bold uppercase text-graphite-900">{c.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-steel-500">{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Специалисты ────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell">
          <SectionHead
            tag={t.about.specialists.tag}
            title={t.about.specialists.title}
            lead={t.about.specialists.lead}
          />
          <div className="mt-14">
            <IndexList items={d.specialists} columns={3} />
          </div>

          <Reveal className="mt-14 grid grid-cols-1 gap-8 bg-graphite-900 p-8 lg:grid-cols-12 lg:p-12">
            <div className="lg:col-span-4">
              <p className="tag">{t.about.staffTag}</p>
              <h3 className="mt-4 text-[22px] font-bold uppercase leading-tight text-white lg:text-[26px]">
                {t.about.staffTitle}
              </h3>
            </div>
            <ul className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
              {d.staffEngineers.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-4 border-b border-graphite-700 py-4 text-[15px] text-steel-200"
                >
                  <span className="h-px w-4 shrink-0 translate-y-[-4px] bg-ochre-500" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Отрасли / география ────────────────────────────────────── */}
      <section className="relative overflow-hidden border-y border-graphite-700 bg-graphite-900 py-20 lg:py-28">
        {/* фон — Астана на закате; скрим держит контраст текста */}
        <div className="absolute inset-0" aria-hidden>
          <Photo
            name="kazakhstan"
            widths={[800, 1440, 1920]}
            sizes="100vw"
            width="1920"
            height="800"
            className="h-full w-full object-cover object-[center_32%]"
          />
        </div>
        <div className="absolute inset-0 bg-graphite-950/35" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-b from-graphite-950/95 via-graphite-950/75 to-graphite-950/55 lg:bg-gradient-to-r lg:via-graphite-950/80 lg:to-transparent"
          aria-hidden
        />

        <div className="shell relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-6">
            <p className="tag">{t.about.geography.tag}</p>
            <h2 className="mt-5 text-[28px] font-bold uppercase leading-[1.08] text-white sm:text-[36px]">
              {t.about.geography.title}
            </h2>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-steel-300">
              {t.about.geography.text}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={path('products')} className="btn-primary">
                {t.about.geography.button}
                <IconArrow />
              </Link>
              <a href={contacts.phoneHref} className="btn-ghost-dark">
                {contacts.phone}
              </a>
            </div>
          </div>
          <p className="relative hidden items-center gap-3 font-mono text-[11px] uppercase tracking-wide2 text-steel-300 lg:col-span-4 lg:col-start-9 lg:flex lg:justify-end">
            <span className="h-px w-6 bg-ochre-500" aria-hidden />
            {t.about.geography.caption}
          </p>
        </div>
      </section>

      <BrandStrip />
      <CtaBand />
    </>
  )
}
