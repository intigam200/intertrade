import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import { CheckList, CtaBlock, PageHero, SectionIntro, StepsCard } from '../components/ui.jsx'
import { useI18n } from '../i18n/index.jsx'

export default function Services() {
  const { t, d, path } = useI18n()

  return (
    <>
      <PageHero label={t.services.label} title={t.services.title} lead={t.services.lead} image="slide-refinery">
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {d.activities.map((a) => (
            <li key={a.slug}>
              <a
                href={`#${a.slug}`}
                className="inline-flex rounded-full border border-white/25 bg-white/[0.06] px-4 py-1.5 text-[14px] font-semibold text-white transition-colors hover:border-accent-soft hover:text-accent-soft"
              >
                {a.title}
              </a>
            </li>
          ))}
        </ul>
      </PageHero>

      {/* ── Компетенции ────────────────────────────────────────────── */}
      {d.activities.map((a, i) => (
        <section key={a.slug} id={a.slug} className={`section ${i % 2 === 0 ? 'bg-white' : 'bg-mist'}`}>
          <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="icon-circle h-16 w-16 bg-sky-bg">
                <Icon name={a.icon} className="h-9 w-9" />
              </span>
              <p className="eyebrow mt-6">
                {t.services.direction} {a.index}
              </p>
              <h2 className="h2-lg">{a.title}</h2>
              <div className="rule-accent" />
              <p className="desc">{a.full}</p>
              <Link to={path('contacts')} className="btn-primary mt-8">
                {t.services.request}
                <FiArrowRight className="h-[18px] w-[18px]" aria-hidden />
              </Link>
            </Reveal>

            <Reveal delay={100} className="self-start rounded-xl border border-line bg-white p-7 shadow-card md:p-9">
              <p className="mb-6 text-[13px] font-bold uppercase tracking-[0.1em] text-navy">{t.services.scope}</p>
              <CheckList
                compact
                items={a.items}
                className={a.items.length > 6 ? 'grid gap-x-6 gap-y-3 sm:grid-cols-2' : undefined}
              />
            </Reveal>
          </div>
        </section>
      ))}

      {/* ── Порядок работы ─────────────────────────────────────────── */}
      <section className="section bg-cloud">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionIntro
            label={t.services.workflow.label}
            title={t.services.workflow.title}
            desc={t.services.workflow.desc}
          />
          <Reveal delay={100}>
            <StepsCard steps={d.workflow} />
          </Reveal>
        </div>
      </section>

      <CtaBlock title={t.services.cta.title} text={t.services.cta.text} />
    </>
  )
}
