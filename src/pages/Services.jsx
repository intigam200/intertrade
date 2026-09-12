import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import { IconArrow } from '../components/Icons.jsx'
import { PageHero, SectionHead, IndexList, CtaBand } from '../components/ui.jsx'
import { activities, outsourcing } from '../data/company.js'

// Порядок работы по заявке — сухая последовательность этапов.
const workflow = [
  { index: '01', title: 'Заявка', text: 'Спецификация, чертёж или артикул от предприятия.' },
  { index: '02', title: 'Техническая обработка', text: 'Подбор позиций, аналогов и замен инженерами.' },
  { index: '03', title: 'Коммерческое предложение', text: 'Цена, срок поставки, условия отгрузки.' },
  { index: '04', title: 'Поставка', text: 'Транспортировка, растаможка, документы, отгрузка на объект.' },
]

export default function Services() {
  return (
    <>
      <PageHero
        code="02 / Услуги"
        title="Услуги"
        lead="Снабжение, логистика и технический аудит — по отдельности или как единый контур обеспечения предприятия."
      >
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {[...activities, { slug: 'autsorsing', title: 'Аутсорсинг снабжения', index: '04' }].map(
            (a) => (
              <li key={a.slug}>
                <a
                  href={`#${a.slug}`}
                  className="flex items-baseline gap-3 font-mono text-[12px] uppercase tracking-wide2 text-steel-300 hover:text-ochre-400"
                >
                  <span className="text-ochre-500">{a.index}</span>
                  {a.title}
                </a>
              </li>
            ),
          )}
        </ul>
      </PageHero>

      {/* ── Направления ────────────────────────────────────────────── */}
      {activities.map((a, i) => (
        <section
          key={a.slug}
          id={a.slug}
          className={`scroll-mt-24 py-20 lg:py-28 ${i % 2 === 0 ? 'bg-white' : 'bg-steel-50'}`}
        >
          <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <p className="font-display text-[64px] font-bold leading-none tracking-tightest text-steel-200 lg:text-[88px]">
                {a.index}
              </p>
              <Icon name={a.icon} className="mt-6 h-16 w-16 text-ochre-500" />
            </div>

            <div className="lg:col-span-5">
              <h2 className="text-[30px] font-bold uppercase leading-[1.05] text-graphite-900 lg:text-[42px]">
                {a.title}
              </h2>
              <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-steel-500">{a.full}</p>
              <Link
                to="/kontakty"
                className="mt-8 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-wide2 text-graphite-900 hover:text-ochre-500"
              >
                Запросить по этому направлению
                <IconArrow />
              </Link>
            </div>

            <Reveal className="lg:col-span-4">
              <p className="tag mb-4">Состав работ</p>
              <ul className="border-t border-steel-300">
                {a.items.map((item, n) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-4 border-b border-steel-200 py-3 text-[15px] text-graphite-700"
                  >
                    <span className="font-mono text-[11px] text-steel-400">
                      {String(n + 1).padStart(2, '0')}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      ))}

      {/* ── Аутсорсинг снабжения ───────────────────────────────────── */}
      <section
        id="autsorsing"
        className="relative scroll-mt-24 overflow-hidden bg-graphite-900 py-20 lg:py-28"
      >
        <div className="absolute inset-0 bg-blueprint bg-grid opacity-50" aria-hidden />
        <div className="shell relative">
          <SectionHead
            dark
            tag="04 / Аутсорсинг снабжения"
            title="Снабжение на стороне подрядчика"
            lead="Передача процесса снабжения снимает с предприятия непрофильную нагрузку."
          />
          <div className="mt-14">
            <IndexList items={outsourcing} dark columns={3} />
          </div>
        </div>
      </section>

      {/* ── Порядок работы ─────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell">
          <SectionHead
            tag="05 / Порядок работы"
            title="Как проходит заявка"
            lead="От поступления спецификации до отгрузки на объект."
          />
          <div className="mt-14 grid grid-cols-1 gap-px bg-steel-200 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step, i) => (
              <Reveal key={step.index} delay={i * 70} className="bg-white p-8 lg:p-10">
                <span className="font-mono text-[12px] tracking-wide2 text-ochre-500">
                  {step.index}
                </span>
                <h3 className="mt-6 text-[19px] font-bold uppercase leading-tight text-graphite-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-steel-500">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Опишите задачу — предложим состав поставки и сроки"
        text="Заявки принимаются по спецификации, чертежу, артикулу или описанию узла."
      />
    </>
  )
}
