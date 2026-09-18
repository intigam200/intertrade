import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { IconArrow, IconPlus } from '../components/Icons.jsx'
import { PageHero, BrandStrip, CtaBand } from '../components/ui.jsx'
import { contacts, countPositions } from '../data/company.js'
import { useI18n } from '../i18n/index.jsx'

export default function Products() {
  const { hash } = useLocation()
  const { t, d, path } = useI18n()
  const catalog = d.catalog
  const [open, setOpen] = useState(() => [catalog[0].id])

  // Раздел из адреса разворачивается автоматически
  useEffect(() => {
    const id = hash.replace('#', '')
    if (!id) return
    setOpen((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }, [hash])

  const toggle = (id) =>
    setOpen((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  return (
    <>
      <PageHero
        code={t.products.code}
        title={t.products.title}
        lead={t.products.lead}
        image={{ name: 'industry-hero', widths: [760, 1440], width: '1440', height: '1026' }}
        imageAlt={t.products.heroAlt}
      >
        <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-4 font-mono text-[11px] uppercase tracking-wide2 text-steel-400">
          <div>
            <dt>{t.products.statGroups}</dt>
            <dd className="mt-2 font-display text-[28px] tracking-tightest text-white">
              {String(catalog.length).padStart(2, '0')}
            </dd>
          </div>
          <div>
            <dt>{t.products.statPositions}</dt>
            <dd className="mt-2 font-display text-[28px] tracking-tightest text-white">
              {countPositions(catalog)}
            </dd>
          </div>
          <div>
            <dt>{t.products.statBrands}</dt>
            <dd className="mt-2 font-display text-[28px] tracking-tightest text-white">400+</dd>
          </div>
        </dl>
      </PageHero>

      <section className="bg-white py-16 lg:py-24">
        <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* навигация по группам */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <p className="tag">{t.products.groupsTag}</p>
              <nav className="mt-5 border-t border-steel-200">
                {catalog.map((c) => (
                  <a
                    key={c.id}
                    href={`#${c.id}`}
                    className="flex items-baseline gap-4 border-b border-steel-200 py-3 text-[14px] leading-snug text-navy-700 transition-colors hover:text-ochre-600"
                  >
                    <span className="font-mono text-[11px] text-steel-400">{c.code}</span>
                    {c.title}
                  </a>
                ))}
              </nav>
              <p className="mt-6 text-[13px] leading-relaxed text-steel-500">
                {t.products.notFoundLead}
                <a href={contacts.emailHref} className="text-ochre-600 underline underline-offset-4">
                  {contacts.email}
                </a>
                .
              </p>
            </div>
          </aside>

          {/* группы каталога */}
          <div className="lg:col-span-9">
            {catalog.map((c) => {
              const isOpen = open.includes(c.id)
              const count = countPositions([c])
              return (
                <article
                  key={c.id}
                  id={c.id}
                  className="scroll-mt-28 border-t border-navy-900 first:border-t-2"
                >
                  <button
                    type="button"
                    onClick={() => toggle(c.id)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-start gap-5 py-7 text-left lg:gap-8"
                  >
                    <Icon
                      name={c.icon}
                      className="hidden h-12 w-12 shrink-0 text-ochre-500 sm:block"
                    />
                    <span className="flex-1">
                      <span className="font-mono text-[11px] uppercase tracking-wide2 text-steel-400">
                        ICG-{c.code} · {String(count).padStart(2, '0')} {t.products.itemsCount}
                      </span>
                      <h2 className="mt-3 text-[22px] font-bold uppercase leading-tight text-navy-900 group-hover:text-ochre-600 sm:text-[28px]">
                        {c.title}
                      </h2>
                      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-steel-500">
                        {c.lead}
                      </p>
                    </span>
                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-steel-300 text-navy-900 transition-colors group-hover:border-ochre-500 group-hover:text-ochre-500">
                      <IconPlus open={isOpen} className="h-4 w-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="grid grid-cols-1 gap-8 pb-12 md:grid-cols-2 md:gap-10">
                      {c.groups.map((g) => (
                        <div key={g.title}>
                          <p className="tag mb-3">{g.title}</p>
                          <ul className="border-t border-steel-300">
                            {g.items.map((item, n) => (
                              <li
                                key={item}
                                className="flex items-baseline gap-4 border-b border-steel-200 py-3"
                              >
                                <span className="w-[74px] shrink-0 font-mono text-[11px] uppercase tracking-wide text-steel-400">
                                  {c.code}-{String(n + 1).padStart(2, '0')}
                                </span>
                                <span className="text-[15px] leading-snug text-navy-800">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              )
            })}

            <div className="border-t-2 border-navy-900 pt-10">
              <p className="max-w-2xl text-[15px] leading-relaxed text-steel-500">
                {t.products.closing}
              </p>
              <Link to={path('contacts')} className="btn-primary mt-8">
                {t.products.request}
                <IconArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BrandStrip />
      <CtaBand title={t.products.cta.title} text={t.products.cta.text} />
    </>
  )
}
