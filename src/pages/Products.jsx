import { Link } from 'react-router-dom'
import { FiArrowRight, FiMail } from 'react-icons/fi'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import { BrandStrip, CheckList, CtaBlock, PageHero, SectionIntro, StandardTags } from '../components/ui.jsx'
import { contacts } from '../data/company.js'
import { useI18n } from '../i18n/index.jsx'

export default function Products() {
  const { t, d, path } = useI18n()
  const p = t.products

  return (
    <>
      <PageHero label={p.label} title={p.title} lead={p.lead} image="slide-welding">
        <dl className="mt-8 flex flex-wrap gap-4">
          {[
            [p.statSectors, String(d.catalog.length)],
            [p.statStandardsText, p.statStandards],
            [p.statDocsText, p.statDocs],
          ].map(([label, value]) => (
            <div key={label} className="min-w-[150px] rounded-lg bg-black/40 px-5 py-4 backdrop-blur-[4px]">
              <dt className="text-[11px] font-bold uppercase tracking-[0.1em] text-accent-soft">{label}</dt>
              <dd className="mt-1 text-[22px] font-extrabold leading-tight text-white">{value}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <section className="section bg-mist">
        <div className="container-x grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] lg:gap-10">
          {/* навигация по отраслям */}
          <aside>
            <div className="space-y-5 lg:sticky lg:top-[120px]">
              <nav aria-label={p.groupsLabel} className="card p-3 shadow-card">
                <p className="px-3 pb-2 pt-1 text-[12px] font-bold uppercase tracking-[0.1em] text-navy">
                  {p.groupsLabel}
                </p>
                <ul>
                  {d.catalog.map((c) => (
                    <li key={c.id}>
                      <a
                        href={`#${c.id}`}
                        className="flex items-center gap-3 rounded-md px-3 py-2.5 text-[14px] font-semibold leading-snug text-navy transition-all duration-150 hover:bg-mist hover:text-accent"
                      >
                        <Icon name={c.icon} className="h-5 w-5 shrink-0 text-accent" />
                        {c.short}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#spare-parts"
                      className="flex items-center gap-3 rounded-md px-3 py-2.5 text-[14px] font-semibold leading-snug text-navy transition-all duration-150 hover:bg-mist hover:text-accent"
                    >
                      <Icon name="pump" className="h-5 w-5 shrink-0 text-accent" />
                      {t.nav.spareParts}
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="card hover-icon p-5 shadow-card">
                <span className="icon-circle h-11 w-11">
                  <FiMail className="tm-icon h-5 w-5" aria-hidden />
                </span>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">
                  {p.notFoundLead}
                  <a href={contacts.emailHref} className="font-semibold text-accent underline-offset-2 hover:underline">
                    {contacts.email}
                  </a>
                </p>
              </div>
            </div>
          </aside>

          {/* отрасли */}
          <div className="space-y-6">
            {d.catalog.map((c) => (
              <Reveal as="article" key={c.id} id={c.id} className="card scroll-mt-[120px] overflow-hidden shadow-card">
                <header className="hover-icon flex items-start gap-5 p-6 sm:p-8">
                  <span className="icon-circle hidden h-16 w-16 bg-sky-bg sm:flex">
                    <Icon name={c.icon} className="tm-icon h-9 w-9" />
                  </span>
                  <div>
                    <h2 className="text-[clamp(22px,2.4vw,28px)] font-bold leading-tight text-navy">{c.title}</h2>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{c.lead}</p>
                  </div>
                </header>

                <div className="grid grid-cols-1 gap-8 border-t border-line bg-paper p-6 sm:p-8 md:grid-cols-2">
                  <div>
                    <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.1em] text-accent-hover">{p.scope}</p>
                    <CheckList compact items={c.scope} />
                  </div>
                  <div>
                    <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.1em] text-accent-hover">{p.standards}</p>
                    <StandardTags items={c.standards} />
                  </div>
                </div>

                {c.details && (
                  <div className="border-t border-line p-6 sm:p-8">
                    <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.1em] text-accent-hover">{p.details}</p>
                    <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                      {c.details.map((row) => (
                        <li key={row.title} className="rounded-lg border border-line bg-white p-5">
                          <p className="text-[16px] font-bold leading-snug text-navy">{row.title}</p>
                          <p className="mt-2 text-[13px] font-semibold text-accent-hover">{row.standards}</p>
                          <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.1em] text-muted">{p.field}</p>
                          <p className="mt-1 text-[14px] leading-relaxed text-graphite">{row.field}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Reveal>
            ))}

            <div className="flex justify-start">
              <Link to={path('contacts')} className="btn-primary">
                {p.request}
                <FiArrowRight className="h-[18px] w-[18px]" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Топ востребованных запчастей ───────────────────────────── */}
      <section id="spare-parts" className="section bg-white">
        <div className="container-x">
          <SectionIntro label={p.spare.label} title={p.spare.title} desc={p.spare.desc} />
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {d.spareParts.map((cat, i) => (
              <Reveal
                as="article"
                key={cat.id}
                id={cat.id}
                delay={(i % 2) * 80}
                className="card scroll-mt-[120px] overflow-hidden shadow-card"
              >
                <header className="hover-icon flex items-start gap-4 border-b border-line p-6">
                  <span className="icon-circle h-14 w-14 bg-sky-bg">
                    <Icon name={cat.icon} className="tm-icon h-8 w-8" />
                  </span>
                  <div>
                    {cat.top && (
                      <span className="mb-2 inline-block rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
                        {p.spare.top}
                      </span>
                    )}
                    <h3 className="text-[19px] font-bold leading-snug text-navy">{cat.title}</h3>
                    {cat.note && <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{cat.note}</p>}
                  </div>
                </header>
                <ul className="divide-y divide-line px-6">
                  {cat.items.map((item) => (
                    <li key={item.title} className="flex gap-3 py-4">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      <div>
                        <p className="text-[15px] font-semibold leading-snug text-navy">{item.title}</p>
                        {item.text && <p className="mt-1 text-[14px] leading-relaxed text-muted">{item.text}</p>}
                        {item.list && (
                          <ul className="mt-2 space-y-1.5">
                            {item.list.map((line) => (
                              <li key={line} className="flex gap-2 text-[14px] leading-relaxed text-muted">
                                <span aria-hidden>—</span>
                                {line}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link to={path('contacts')} className="btn-primary">
              {p.spare.request}
              <FiArrowRight className="h-[18px] w-[18px]" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      <BrandStrip />
      <CtaBlock title={p.cta.title} text={p.cta.text} />
    </>
  )
}
