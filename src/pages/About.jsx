import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import { IconArrow } from '../components/Icons.jsx'
import { QuarryPlate } from '../components/Plates.jsx'
import { PageHero, SectionHead, IndexList, BrandStrip, CtaBand } from '../components/ui.jsx'
import {
  capabilities,
  contacts,
  industries,
  mission,
  positioning,
  specialists,
  staffEngineers,
} from '../data/company.js'

export default function About() {
  return (
    <>
      <PageHero code="01 / О компании" title="О компании" lead={positioning} />

      {/* ── Миссия ─────────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <p className="tag">Миссия</p>
          </div>
          <div className="lg:col-span-9">
            <blockquote className="border-l-2 border-ochre-500 pl-6 lg:pl-10">
              <p className="font-display text-[24px] font-bold uppercase leading-[1.15] tracking-tightest text-graphite-900 sm:text-[34px] lg:text-[40px]">
                {mission}
              </p>
            </blockquote>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {industries.map((item, i) => (
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
            tag="02 / Наши возможности"
            title="Производители, склады, клиенты"
            lead="Ресурсы, на которых держится исполнение заявок в срок."
          />

          <div className="mt-14 grid grid-cols-1 border-t border-steel-200 md:grid-cols-3">
            {capabilities.map((c, i) => (
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
            tag="03 / Наши специалисты"
            title="Кто ведёт заявку"
            lead="Заявка проходит техническую обработку до того, как попадает в закупку."
          />
          <div className="mt-14">
            <IndexList items={specialists} columns={3} />
          </div>

          <Reveal className="mt-14 grid grid-cols-1 gap-8 bg-graphite-900 p-8 lg:grid-cols-12 lg:p-12">
            <div className="lg:col-span-4">
              <p className="tag">В штате</p>
              <h3 className="mt-4 text-[22px] font-bold uppercase leading-tight text-white lg:text-[26px]">
                Инженерный состав
              </h3>
            </div>
            <ul className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
              {staffEngineers.map((item) => (
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
      <section className="border-y border-steel-200 bg-steel-50 py-20 lg:py-24">
        <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-5">
            <p className="tag">География поставок</p>
            <h2 className="mt-5 text-[28px] font-bold uppercase leading-[1.08] text-graphite-900 sm:text-[36px]">
              Заводы Европы, Великобритании, США и Китая — предприятиям Казахстана
            </h2>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-steel-500">
              Работаем напрямую с заводами-производителями. В портфеле более 400 промышленных брендов
              — оборудование, комплектующие и запасные части под действующие технологические схемы.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/produkciya" className="btn-ghost">
                Каталог продукции
                <IconArrow />
              </Link>
              <a href={contacts.phoneHref} className="btn-ghost">
                {contacts.phone}
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <QuarryPlate className="w-full" />
          </div>
        </div>
      </section>

      <BrandStrip />
      <CtaBand />
    </>
  )
}
