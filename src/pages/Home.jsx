import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import { IconArrow } from '../components/Icons.jsx'
import HeroSlides from '../components/HeroSlides.jsx'
import { Photo, SectionHead, IndexList, BrandStrip, CtaBand } from '../components/ui.jsx'
import { countPositions } from '../data/company.js'
import { useI18n } from '../i18n/index.jsx'

const figureValues = ['400+', '04', '03', '05']

export default function Home() {
  const { t, d, path } = useI18n()
  const figures = figureValues.map((value, i) => ({ value, label: t.home.figures[i] }))

  return (
    <>
      {/* ── Первый экран ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-900">
        <div className="absolute inset-0 bg-blueprint bg-grid opacity-70" aria-hidden />
        <div className="shell relative grid grid-cols-1 gap-10 pb-0 pt-14 lg:grid-cols-12 lg:gap-8 lg:pt-20">
          <div className="lg:col-span-6">
            <p className="tag">{t.home.tag}</p>
            <h1 className="mt-7 text-[38px] font-bold uppercase leading-[1.02] text-white sm:text-[58px] lg:text-[70px]">
              {t.home.h1.line1}
              <br />
              {t.home.h1.line2}
              <span className="text-ochre-500">{t.home.h1.accent}</span>
              <br />
              {t.home.h1.line3}
            </h1>
            <p className="mt-8 max-w-xl text-[16px] leading-relaxed text-steel-300">{d.positioning}</p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to={path('contacts')} className="btn-primary">
                {t.home.ctaPrimary}
                <IconArrow />
              </Link>
              <Link to={path('products')} className="btn-ghost-dark">
                {t.home.ctaSecondary}
              </Link>
            </div>
          </div>

          <div className="-mx-5 sm:-mx-8 lg:col-span-6 lg:-mr-12 lg:ml-0 lg:self-center">
            <HeroSlides posterAlt={t.home.posterAlt} labels={t.home.slides} />
          </div>
        </div>

        {/* технические показатели */}
        <div className="shell relative">
          <dl className="grid grid-cols-2 border-t border-navy-700 lg:grid-cols-4">
            {figures.map((f, i) => (
              <div
                key={f.label}
                className={`border-navy-700 py-8 pr-6 ${i % 2 === 1 ? 'border-l pl-6' : ''} ${
                  i < 2 ? 'border-b lg:border-b-0' : ''
                } ${i === 2 ? 'lg:border-l lg:pl-6' : ''} ${i === 3 ? 'lg:pl-6' : ''}`}
              >
                <dt className="font-display text-[34px] font-bold leading-none tracking-tightest text-white lg:text-[44px]">
                  {f.value}
                </dt>
                <dd className="mt-3 font-mono text-[11px] uppercase leading-snug tracking-wide2 text-steel-400">
                  {f.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Отрасли ────────────────────────────────────────────────── */}
      <section className="border-b border-steel-200 bg-white">
        <div className="shell flex flex-col gap-4 py-6 md:flex-row md:items-center md:gap-10">
          <p className="tag shrink-0">{t.home.industriesTag}</p>
          <ul className="flex flex-col gap-x-10 gap-y-2 font-mono text-[12px] uppercase tracking-wide2 text-navy-700 md:flex-row">
            {d.industries.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-px w-5 bg-ochre-500" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Сферы деятельности ─────────────────────────────────────── */}
      <section className="bg-steel-50 py-20 lg:py-28">
        <div className="shell">
          <SectionHead
            tag={t.home.activities.tag}
            title={t.home.activities.title}
            lead={t.home.activities.lead}
          />

          <div className="mt-14 border-t border-steel-200">
            {d.activities.map((a, i) => (
              <Reveal
                key={a.slug}
                delay={i * 80}
                className="grid grid-cols-1 gap-6 border-b border-steel-200 py-10 lg:grid-cols-12 lg:gap-8 lg:py-14"
              >
                <div className="flex items-start gap-6 lg:col-span-3">
                  <span className="font-display text-[40px] font-bold leading-none tracking-tightest text-steel-200">
                    {a.index}
                  </span>
                  <Icon name={a.icon} className="h-12 w-12 text-ochre-500" />
                </div>

                <div className="lg:col-span-4">
                  <h3 className="text-[24px] font-bold uppercase leading-tight text-navy-900 lg:text-[30px]">
                    {a.title}
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-steel-500">{a.full}</p>
                  <Link
                    to={path('services', `#${a.slug}`)}
                    className="mt-6 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-wide2 text-navy-900 hover:text-ochre-500"
                  >
                    {t.home.activities.more}
                    <IconArrow />
                  </Link>
                </div>

                <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 lg:col-span-4 lg:col-start-9">
                  {a.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-steel-200 py-2 font-mono text-[12px] uppercase tracking-wide2 text-steel-500"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Каталог ────────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell">
          <SectionHead
            tag={t.home.catalog.tag}
            title={t.home.catalog.title}
            lead={t.home.catalog.lead}
          />

          <Reveal className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-y border-navy-900">
                  <th className="w-[110px] py-3 font-mono text-[11px] uppercase tracking-wide2 text-steel-500">
                    {t.home.catalog.colIndex}
                  </th>
                  <th className="py-3 font-mono text-[11px] uppercase tracking-wide2 text-steel-500">
                    {t.home.catalog.colGroup}
                  </th>
                  <th className="w-[140px] py-3 text-right font-mono text-[11px] uppercase tracking-wide2 text-steel-500">
                    {t.home.catalog.colCount}
                  </th>
                  <th className="w-[60px]" />
                </tr>
              </thead>
              <tbody>
                {d.catalog.map((c) => {
                  const count = countPositions([c])
                  return (
                    <tr key={c.id} className="group border-b border-steel-200 hover:bg-steel-50">
                      <td className="py-5 align-top font-mono text-[13px] text-ochre-500">
                        ICG-{c.code}
                      </td>
                      <td className="py-5 align-top">
                        <Link
                          to={path('products', `#${c.id}`)}
                          className="font-display text-[17px] font-bold uppercase leading-tight tracking-tightest text-navy-900 group-hover:text-ochre-600 sm:text-[19px]"
                        >
                          {c.title}
                        </Link>
                        <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-steel-500">
                          {c.lead}
                        </p>
                      </td>
                      <td className="py-5 text-right align-top font-mono text-[13px] text-navy-700">
                        {String(count).padStart(2, '0')}
                      </td>
                      <td className="py-5 text-right align-top">
                        <Link
                          to={path('products', `#${c.id}`)}
                          className="inline-flex text-steel-400 group-hover:text-ochre-500"
                          aria-label={t.home.catalog.goTo.replace('{title}', c.title)}
                        >
                          <IconArrow className="h-5 w-5" />
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </Reveal>

          <Reveal className="mt-10">
            <Link to={path('products')} className="btn-ghost">
              {t.home.catalog.open}
              <IconArrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Преимущества ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-900 py-20 lg:py-28">
        <div className="absolute inset-0 bg-blueprint bg-grid opacity-50" aria-hidden />
        <div className="shell relative">
          <SectionHead
            dark
            tag={t.home.advantages.tag}
            title={t.home.advantages.title}
            lead={t.home.advantages.lead}
          />
          <div className="mt-14">
            <IndexList items={d.advantages} dark />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="relative -mx-5 sm:-mx-8 lg:col-span-7 lg:-ml-12 lg:mr-0">
              <Photo
                name="capabilities"
                widths={[700, 1280]}
                sizes="(min-width: 1024px) 58vw, 100vw"
                alt={t.home.capabilitiesAlt}
                width="1280"
                height="852"
                className="w-full object-contain"
              />
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="tag">{t.home.capabilitiesTag}</p>
              <ul className="mt-6 space-y-6">
                {d.capabilities.map((c) => (
                  <li key={c.index} className="flex gap-5 border-b border-navy-700 pb-6">
                    <Icon name={c.icon} className="h-10 w-10 shrink-0 text-ochre-500" />
                    <div>
                      <h3 className="text-[16px] font-bold uppercase text-white">{c.title}</h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-steel-400">{c.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                to={path('about')}
                className="mt-7 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-wide2 text-steel-200 hover:text-ochre-400"
              >
                {t.home.aboutLink}
                <IconArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BrandStrip />
      <CtaBand />
    </>
  )
}
