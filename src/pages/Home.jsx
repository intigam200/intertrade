import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import { IconArrow } from '../components/Icons.jsx'
import { SectionHead, IndexList, BrandStrip, CtaBand } from '../components/ui.jsx'
import { activities, advantages, capabilities, industries, positioning } from '../data/company.js'
import { catalog } from '../data/catalog.js'

const figures = [
  { value: '400+', label: 'брендов в портфеле' },
  { value: '04', label: 'региона прямых поставок' },
  { value: '03', label: 'отрасли обслуживания' },
  { value: '05', label: 'категорий каталога' },
]

export default function Home() {
  return (
    <>
      {/* ── Первый экран ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-graphite-900">
        <div className="absolute inset-0 bg-blueprint bg-grid opacity-70" aria-hidden />
        <div className="shell relative grid grid-cols-1 gap-12 pb-0 pt-14 lg:grid-cols-12 lg:gap-8 lg:pt-20">
          <div className="lg:col-span-6">
            <p className="tag">ТОО · Республика Казахстан · Прямые поставки</p>
            <h1 className="mt-7 text-[38px] font-bold uppercase leading-[1.02] text-white sm:text-[58px] lg:text-[70px]">
              Промышленное
              <br />
              оборудование
              <span className="text-ochre-500"> и комплектующие</span>
              <br />
              для предприятий
            </h1>
            <p className="mt-8 max-w-xl text-[16px] leading-relaxed text-steel-300">{positioning}</p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/kontakty" className="btn-primary">
                Отправить заявку
                <IconArrow />
              </Link>
              <Link to="/produkciya" className="btn-ghost-dark">
                Каталог продукции
              </Link>
            </div>
          </div>

          <div className="relative -mx-5 sm:-mx-8 lg:col-span-6 lg:-ml-4 lg:-mr-12 lg:self-center xl:-ml-8">
            <picture>
              <source srcSet="/images/industry-hero.webp" type="image/webp" />
              <img
                src="/images/industry-hero.png"
                alt="Ночная панорама нефтеперерабатывающего завода: технологические колонны и магистральные трубопроводы"
                width="1440"
                height="1026"
                className="w-full select-none object-contain"
                loading="eager"
                draggable="false"
              />
            </picture>
            <p className="pointer-events-none absolute right-5 top-4 hidden items-center gap-3 font-mono text-[11px] uppercase tracking-wide2 text-steel-400 sm:right-8 lg:right-12 lg:flex">
              <span className="h-px w-6 bg-ochre-500" aria-hidden />
              Нефтепереработка · Энергетика · Магистральные сети
            </p>
          </div>
        </div>

        {/* технические показатели */}
        <div className="shell relative">
          <dl className="grid grid-cols-2 border-t border-graphite-700 lg:grid-cols-4">
            {figures.map((f, i) => (
              <div
                key={f.label}
                className={`border-graphite-700 py-8 pr-6 ${i % 2 === 1 ? 'border-l pl-6' : ''} ${
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
          <p className="tag shrink-0">Отрасли</p>
          <ul className="flex flex-col gap-x-10 gap-y-2 font-mono text-[12px] uppercase tracking-wide2 text-graphite-700 md:flex-row">
            {industries.map((item) => (
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
            tag="01 / Сферы деятельности"
            title="Снабжение, логистика и технический аудит"
            lead="Три направления работы, которые закрывают путь позиции от заявки предприятия до поставки на объект."
          />

          <div className="mt-14 border-t border-steel-200">
            {activities.map((a, i) => (
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
                  <h3 className="text-[24px] font-bold uppercase leading-tight text-graphite-900 lg:text-[30px]">
                    {a.title}
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-steel-500">{a.full}</p>
                  <Link
                    to={`/uslugi#${a.slug}`}
                    className="mt-6 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-wide2 text-graphite-900 hover:text-ochre-500"
                  >
                    Подробно
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
            tag="02 / Каталог"
            title="Продукция"
            lead="Основные группы поставки. Полная номенклатура — на странице каталога и по запросу."
          />

          <Reveal className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-y border-graphite-900">
                  <th className="w-[110px] py-3 font-mono text-[11px] uppercase tracking-wide2 text-steel-500">
                    Индекс
                  </th>
                  <th className="py-3 font-mono text-[11px] uppercase tracking-wide2 text-steel-500">
                    Группа продукции
                  </th>
                  <th className="w-[140px] py-3 text-right font-mono text-[11px] uppercase tracking-wide2 text-steel-500">
                    Позиций
                  </th>
                  <th className="w-[60px]" />
                </tr>
              </thead>
              <tbody>
                {catalog.map((c) => {
                  const count = c.groups.reduce((s, g) => s + g.items.length, 0)
                  return (
                    <tr key={c.id} className="group border-b border-steel-200 hover:bg-steel-50">
                      <td className="py-5 align-top font-mono text-[13px] text-ochre-500">
                        ICG-{c.code}
                      </td>
                      <td className="py-5 align-top">
                        <Link
                          to={`/produkciya#${c.id}`}
                          className="font-display text-[17px] font-bold uppercase leading-tight tracking-tightest text-graphite-900 group-hover:text-ochre-600 sm:text-[19px]"
                        >
                          {c.title}
                        </Link>
                        <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-steel-500">
                          {c.lead}
                        </p>
                      </td>
                      <td className="py-5 text-right align-top font-mono text-[13px] text-graphite-700">
                        {String(count).padStart(2, '0')}
                      </td>
                      <td className="py-5 text-right align-top">
                        <Link
                          to={`/produkciya#${c.id}`}
                          className="inline-flex text-steel-400 group-hover:text-ochre-500"
                          aria-label={`Перейти к разделу «${c.title}»`}
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
            <Link to="/produkciya" className="btn-ghost">
              Открыть каталог
              <IconArrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Преимущества ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-graphite-900 py-20 lg:py-28">
        <div className="absolute inset-0 bg-blueprint bg-grid opacity-50" aria-hidden />
        <div className="shell relative">
          <SectionHead
            dark
            tag="03 / Преимущества"
            title="Почему предприятия работают с нами"
            lead="Условия, на которых строится снабжение по нашим контрактам."
          />
          <div className="mt-14">
            <IndexList items={advantages} dark />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="relative -mx-5 sm:-mx-8 lg:col-span-7 lg:-ml-12 lg:mr-0">
              <picture>
                <source srcSet="/images/capabilities.webp" type="image/webp" />
                <img
                  src="/images/capabilities.png"
                  alt="Сварочные работы на производстве: сноп искр от электродуговой сварки металлоконструкции"
                  width="1280"
                  height="852"
                  className="w-full select-none object-contain"
                  loading="lazy"
                  draggable="false"
                />
              </picture>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="tag">Возможности</p>
              <ul className="mt-6 space-y-6">
                {capabilities.map((c) => (
                  <li key={c.index} className="flex gap-5 border-b border-graphite-700 pb-6">
                    <Icon name={c.icon} className="h-10 w-10 shrink-0 text-ochre-500" />
                    <div>
                      <h3 className="text-[16px] font-bold uppercase text-white">{c.title}</h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-steel-400">{c.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                to="/o-kompanii"
                className="mt-7 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-wide2 text-steel-200 hover:text-ochre-400"
              >
                О компании
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
