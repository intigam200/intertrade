import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { IconArrow, IconPlus } from '../components/Icons.jsx'
import { PageHero, BrandStrip, CtaBand } from '../components/ui.jsx'
import { catalog, catalogPositions } from '../data/catalog.js'
import { contacts } from '../data/company.js'

export default function Products() {
  const { hash } = useLocation()
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
        code="03 / Продукция"
        title="Каталог продукции"
        lead="Основные группы поставки с разбивкой по типам исполнения. Позиции вне каталога подбираются по спецификации, чертежу или артикулу."
      >
        <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-4 font-mono text-[11px] uppercase tracking-wide2 text-steel-400">
          <div>
            <dt>Групп</dt>
            <dd className="mt-2 font-display text-[28px] tracking-tightest text-white">
              {String(catalog.length).padStart(2, '0')}
            </dd>
          </div>
          <div>
            <dt>Позиций в каталоге</dt>
            <dd className="mt-2 font-display text-[28px] tracking-tightest text-white">
              {catalogPositions}
            </dd>
          </div>
          <div>
            <dt>Брендов в портфеле</dt>
            <dd className="mt-2 font-display text-[28px] tracking-tightest text-white">400+</dd>
          </div>
        </dl>
      </PageHero>

      <section className="bg-white py-16 lg:py-24">
        <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* навигация по группам */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <p className="tag">Группы</p>
              <nav className="mt-5 border-t border-steel-200">
                {catalog.map((c) => (
                  <a
                    key={c.id}
                    href={`#${c.id}`}
                    className="flex items-baseline gap-4 border-b border-steel-200 py-3 text-[14px] leading-snug text-graphite-700 transition-colors hover:text-ochre-600"
                  >
                    <span className="font-mono text-[11px] text-steel-400">{c.code}</span>
                    {c.title}
                  </a>
                ))}
              </nav>
              <p className="mt-6 text-[13px] leading-relaxed text-steel-500">
                Не нашли позицию? Направьте спецификацию на{' '}
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
              const count = c.groups.reduce((s, g) => s + g.items.length, 0)
              return (
                <article
                  key={c.id}
                  id={c.id}
                  className="scroll-mt-28 border-t border-graphite-900 first:border-t-2"
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
                        ICG-{c.code} · {String(count).padStart(2, '0')} позиций
                      </span>
                      <h2 className="mt-3 text-[22px] font-bold uppercase leading-tight text-graphite-900 group-hover:text-ochre-600 sm:text-[28px]">
                        {c.title}
                      </h2>
                      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-steel-500">
                        {c.lead}
                      </p>
                    </span>
                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-steel-300 text-graphite-900 transition-colors group-hover:border-ochre-500 group-hover:text-ochre-500">
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
                                <span className="text-[15px] leading-snug text-graphite-800">
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

            <div className="border-t-2 border-graphite-900 pt-10">
              <p className="max-w-2xl text-[15px] leading-relaxed text-steel-500">
                Помимо каталога поставляем расходные материалы, СИЗ, станки, инструмент, запасные
                части, смазочные материалы, измерительные приборы, металлоконструкции, арматуру и
                строительные материалы.
              </p>
              <Link to="/kontakty" className="btn-primary mt-8">
                Запросить позицию
                <IconArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BrandStrip />
      <CtaBand
        title="Подберём аналог или замену по действующей схеме"
        text="Укажите производителя, артикул или параметры узла — инженеры подберут позицию по качеству и стоимости."
      />
    </>
  )
}
