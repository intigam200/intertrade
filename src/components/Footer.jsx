import { Link } from 'react-router-dom'
import { FiAward, FiFileText, FiGlobe, FiMail, FiMapPin, FiPhone, FiTool, FiBriefcase } from 'react-icons/fi'
import { Logo } from './Header.jsx'
import { contacts } from '../data/company.js'
import { useI18n } from '../i18n/index.jsx'

const sitemapKeys = ['about', 'services', 'products', 'contacts']
const badgeIcons = [FiGlobe, FiAward, FiFileText, FiTool]

function Heading({ children }) {
  return <p className="mb-5 text-[13px] font-bold uppercase tracking-[0.1em] text-white">{children}</p>
}

export default function Footer() {
  const { t, d, path } = useI18n()
  const year = new Date().getFullYear()

  const rows = [
    { icon: FiPhone, href: contacts.phoneHref, text: contacts.phone, label: t.footer.phone },
    { icon: FiMail, href: contacts.emailHref, text: contacts.email, label: t.footer.email },
    { icon: FiMapPin, text: d.contacts.country, label: t.footer.region },
    { icon: FiBriefcase, text: d.contacts.legalName, label: t.footer.legal },
  ]

  return (
    <footer className="on-dark bg-navy-night text-white/70">
      <div className="container-x grid grid-cols-1 gap-12 pb-12 pt-16 md:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr] lg:gap-14">
        <div>
          <Link to={path('home')} aria-label={t.header.toHome} className="inline-block">
            <Logo size="lg" />
          </Link>
          <p className="mt-5 max-w-[300px] text-[14px] leading-relaxed">{t.footer.blurb}</p>
          <ul className="mt-7 grid max-w-[320px] grid-cols-2 gap-x-4 gap-y-4">
            {t.footer.badges.map((badge, i) => {
              const BadgeIcon = badgeIcons[i]
              return (
                <li key={badge} className="flex items-center gap-2.5 text-[12px] leading-tight text-white/80">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/40">
                    <BadgeIcon className="h-[17px] w-[17px] text-accent-soft" aria-hidden />
                  </span>
                  {badge}
                </li>
              )
            })}
          </ul>
        </div>

        <div>
          <Heading>{t.footer.contacts}</Heading>
          <ul className="space-y-4">
            {rows.map(({ icon: RowIcon, href, text, label }) => (
              <li key={label} className="flex items-start gap-3 text-[14px]">
                <RowIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" aria-hidden />
                <span>
                  <span className="sr-only">{label}: </span>
                  {href ? (
                    <a href={href} className="text-white/85 hover:text-white">
                      {text}
                    </a>
                  ) : (
                    text
                  )}
                </span>
              </li>
            ))}
          </ul>
          <Link to={path('contacts')} className="btn-primary mt-8 !px-6 !py-3 !text-[14px]">
            {t.footer.cta}
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-2 lg:col-span-1">
          <div>
            <Heading>{t.footer.sitemap}</Heading>
            <ul className="space-y-3 text-[14px]">
              {sitemapKeys.map((key) => (
                <li key={key}>
                  <Link to={path(key)} className="hover:text-white">
                    {t.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Heading>{t.footer.products}</Heading>
            <ul className="space-y-3 text-[14px]">
              {d.catalog.map((c) => (
                <li key={c.id}>
                  <Link to={path('products', `#${c.id}`)} className="leading-snug hover:text-white">
                    {c.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.08]">
        <div className="container-x flex flex-col gap-3 py-6 text-[12px] text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {d.contacts.legalName}. {t.footer.rights}
          </p>
          <p>{d.contacts.country}</p>
        </div>
      </div>
    </footer>
  )
}
