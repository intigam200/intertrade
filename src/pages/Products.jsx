import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiArrowRight, FiChevronDown, FiMail, FiSearch, FiX } from 'react-icons/fi'
import Icon from '../components/Icon.jsx'
import { BrandStrip, CtaBlock, PageHero } from '../components/ui.jsx'
import { contacts, countPositions } from '../data/company.js'
import { useI18n } from '../i18n/index.jsx'

// Поиск без учёта регистра и буквы «ё»
const normalize = (s) => s.toLowerCase().replace(/ё/g, 'е')

export default function Products() {
  const { hash } = useLocation()
  const { t, d, path } = useI18n()
  const catalog = d.catalog
  const [open, setOpen] = useState(() => [catalog[0].id])
  const [query, setQuery] = useState('')

  // Раздел из адреса разворачивается автоматически
  useEffect(() => {
    const id = hash.replace('#', '')
    if (!id) return
    setOpen((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }, [hash])

  const toggle = (id) =>
    setOpen((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  // При поиске показываем только совпавшие позиции, все группы раскрыты
  const q = normalize(query.trim())
  const filtered = useMemo(() => {
    if (!q) return catalog
    return catalog
      .map((c) => {
        const titleHit = normalize(c.title).includes(q)
        const groups = c.groups
          .map((g) => ({ ...g, items: titleHit ? g.items : g.items.filter((item) => normalize(item).includes(q)) }))
          .filter((g) => g.items.length)
        return { ...c, groups }
      })
      .filter((c) => c.groups.length)
  }, [catalog, q])
  const found = countPositions(filtered)

  return (
    <>
      <PageHero label={t.products.label} title={t.products.title} lead={t.products.lead} image="slide-welding">
        <dl className="mt-8 flex flex-wrap gap-4">
          {[
            [String(catalog.length), t.products.statGroups],
            [String(countPositions(catalog)), t.products.statPositions],
            ['400+', t.products.statBrands],
          ].map(([value, label]) => (
            <div key={label} className="min-w-[150px] rounded-lg bg-black/40 px-5 py-4 backdrop-blur-[4px]">
              <dt className="text-[11px] font-bold uppercase tracking-[0.1em] text-accent-soft">{label}</dt>
              <dd className="mt-1 text-[28px] font-extrabold leading-none text-white">{value}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <section className="section bg-mist">
        <div className="container-x grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr] lg:gap-10">
          {/* навигация по группам */}
          <aside>
            <div className="space-y-5 lg:sticky lg:top-[120px]">
              <nav aria-label={t.products.groupsLabel} className="card p-3 shadow-card">
                <p className="px-3 pb-2 pt-1 text-[12px] font-bold uppercase tracking-[0.1em] text-navy">
                  {t.products.groupsLabel}
                </p>
                <ul>
                  {catalog.map((c) => (
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
                </ul>
              </nav>
              <div className="card hover-icon p-5 shadow-card">
                <span className="icon-circle h-11 w-11">
                  <FiMail className="tm-icon h-5 w-5" aria-hidden />
                </span>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">
                  {t.products.notFoundLead}
                  <a href={contacts.emailHref} className="font-semibold text-accent underline-offset-2 hover:underline">
                    {contacts.email}
                  </a>
                </p>
              </div>
            </div>
          </aside>

          <div>
            {/* поиск по каталогу */}
            <div role="search" className="relative">
              <label htmlFor="catalog-search" className="sr-only">
                {t.products.search.label}
              </label>
              <FiSearch className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" aria-hidden />
              <input
                id="catalog-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.products.search.placeholder}
                className="field !rounded-lg !py-3.5 !pl-12 !pr-12 shadow-card [&::-webkit-search-cancel-button]:hidden"
                autoComplete="off"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md text-muted hover:bg-mist hover:text-navy"
                  aria-label={t.products.search.clear}
                >
                  <FiX className="h-5 w-5" aria-hidden />
                </button>
              )}
            </div>
            <p className="mt-3 min-h-[20px] text-[13px] text-muted" aria-live="polite">
              {q && (found ? t.products.search.found.replace('{n}', found) : '')}
            </p>

            {q && !found ? (
              <div className="card mt-4 px-8 py-12 text-center">
                <p className="text-[18px] font-bold text-navy">{t.products.search.emptyTitle}</p>
                <p className="mx-auto mt-2 max-w-md text-[14px] leading-relaxed text-muted">{t.products.search.empty}</p>
                <Link to={path('contacts')} className="btn-primary mt-6">
                  {t.products.request}
                  <FiArrowRight className="h-[18px] w-[18px]" aria-hidden />
                </Link>
              </div>
            ) : (
              <div className="mt-4 space-y-4">
                {filtered.map((c) => {
                  const isOpen = Boolean(q) || open.includes(c.id)
                  const panel = `panel-${c.id}`
                  return (
                    <article key={c.id} id={c.id} className="card scroll-mt-[120px] overflow-hidden shadow-card">
                      <h2>
                        <button
                          type="button"
                          onClick={() => toggle(c.id)}
                          aria-expanded={isOpen}
                          aria-controls={panel}
                          disabled={Boolean(q)}
                          className="hover-icon group flex w-full items-center gap-4 p-5 text-left sm:gap-5 sm:p-6"
                        >
                          <span className="icon-circle hidden h-14 w-14 bg-sky-bg sm:flex">
                            <Icon name={c.icon} className="tm-icon h-8 w-8" />
                          </span>
                          <span className="flex-1">
                            <span className="block text-[18px] font-bold leading-snug text-navy group-hover:text-accent sm:text-[20px]">
                              {c.title}
                            </span>
                            <span className="mt-1 block text-[14px] leading-relaxed text-muted">{c.lead}</span>
                            <span className="mt-2 inline-block rounded-full bg-mist px-2.5 py-0.5 text-[12px] font-semibold text-navy">
                              {countPositions([c])} {t.products.itemsCount}
                            </span>
                          </span>
                          {!q && (
                            <FiChevronDown
                              className={`h-6 w-6 shrink-0 text-accent transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                              aria-hidden
                            />
                          )}
                        </button>
                      </h2>

                      {isOpen && (
                        <div id={panel} className="grid grid-cols-1 gap-6 border-t border-line bg-paper p-5 sm:p-6 md:grid-cols-2">
                          {c.groups.map((g) => (
                            <div key={g.title}>
                              <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.1em] text-accent">{g.title}</p>
                              <ul className="space-y-1">
                                {g.items.map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-start gap-2.5 rounded-md bg-white px-3 py-2.5 text-[14px] leading-snug text-graphite ring-1 ring-line"
                                  >
                                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                                    {item}
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
              </div>
            )}

            <div className="card mt-8 p-6 shadow-card sm:p-8">
              <p className="text-[15px] leading-relaxed text-muted">{t.products.closing}</p>
              <Link to={path('contacts')} className="btn-primary mt-6">
                {t.products.request}
                <FiArrowRight className="h-[18px] w-[18px]" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BrandStrip />
      <CtaBlock title={t.products.cta.title} text={t.products.cta.text} />
    </>
  )
}
