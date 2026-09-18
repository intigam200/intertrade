import { Link } from 'react-router-dom'
import { contacts } from '../data/company.js'
import { useI18n } from '../i18n/index.jsx'

const sitemapKeys = ['about', 'services', 'products', 'contacts']

export default function Footer() {
  const { t, d, path } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-graphite-950 text-steel-300">
      <div className="shell grid grid-cols-1 gap-12 border-b border-graphite-800 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <p className="font-display text-[22px] font-bold uppercase leading-tight tracking-tightest text-white">
            Intertrade
            <br />
            and Consulting Group
          </p>
          <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-steel-400">{t.footer.blurb}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to={path('contacts')} className="btn-primary !py-3">
              {t.footer.cta}
            </Link>
          </div>
        </div>

        <div className="lg:col-span-2 lg:col-start-6">
          <p className="tag mb-5">{t.footer.sitemap}</p>
          <ul className="space-y-3 text-[14px]">
            {sitemapKeys.map((key) => (
              <li key={key}>
                <Link to={path(key)} className="link-underline hover:text-white">
                  {t.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="tag mb-5">{t.footer.products}</p>
          <ul className="space-y-3 text-[14px]">
            {d.catalog.map((c) => (
              <li key={c.id}>
                <Link to={path('products', `#${c.id}`)} className="link-underline hover:text-white">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="tag mb-5">{t.footer.contacts}</p>
          <dl className="space-y-4 text-[14px]">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wide2 text-steel-500">
                {t.footer.phone}
              </dt>
              <dd className="mt-1">
                <a href={contacts.phoneHref} className="font-mono text-[16px] text-white hover:text-ochre-400">
                  {contacts.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wide2 text-steel-500">
                {t.footer.email}
              </dt>
              <dd className="mt-1">
                <a href={contacts.emailHref} className="text-white hover:text-ochre-400">
                  {contacts.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wide2 text-steel-500">
                {t.footer.legal}
              </dt>
              <dd className="mt-1 text-steel-300">{d.contacts.legalName}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="shell flex flex-col gap-4 py-7 font-mono text-[11px] uppercase tracking-wide2 text-steel-500 md:flex-row md:items-center md:justify-between">
        <p>© {year} {d.contacts.legalName}</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {d.activities.map((a) => (
            <li key={a.slug}>
              <Link to={path('services', `#${a.slug}`)} className="hover:text-steel-200">
                {a.title}
              </Link>
            </li>
          ))}
        </ul>
        <p>{d.contacts.country}</p>
      </div>
    </footer>
  )
}
