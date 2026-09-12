import { Link } from 'react-router-dom'
import { contacts, activities } from '../data/company.js'
import { catalog } from '../data/catalog.js'

const sitemap = [
  { to: '/o-kompanii', label: 'О компании' },
  { to: '/uslugi', label: 'Услуги' },
  { to: '/produkciya', label: 'Продукция' },
  { to: '/kontakty', label: 'Контакты' },
]

export default function Footer() {
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
          <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-steel-400">
            Поставка промышленного оборудования и комплектующих для производственных, карьерных и
            нефтегазовых предприятий Казахстана. Более 400 брендов в портфеле.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/kontakty" className="btn-primary !py-3">
              Заявка на поставку
            </Link>
          </div>
        </div>

        <div className="lg:col-span-2 lg:col-start-6">
          <p className="tag mb-5">Карта сайта</p>
          <ul className="space-y-3 text-[14px]">
            {sitemap.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="link-underline hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="tag mb-5">Продукция</p>
          <ul className="space-y-3 text-[14px]">
            {catalog.map((c) => (
              <li key={c.id}>
                <Link to={`/produkciya#${c.id}`} className="link-underline hover:text-white">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="tag mb-5">Контакты</p>
          <dl className="space-y-4 text-[14px]">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wide2 text-steel-500">Телефон</dt>
              <dd className="mt-1">
                <a href={contacts.phoneHref} className="font-mono text-[16px] text-white hover:text-ochre-400">
                  {contacts.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wide2 text-steel-500">E-mail</dt>
              <dd className="mt-1">
                <a href={contacts.emailHref} className="text-white hover:text-ochre-400">
                  {contacts.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wide2 text-steel-500">Юридическое лицо</dt>
              <dd className="mt-1 text-steel-300">{contacts.legalName}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="shell flex flex-col gap-4 py-7 font-mono text-[11px] uppercase tracking-wide2 text-steel-500 md:flex-row md:items-center md:justify-between">
        <p>© {year} {contacts.legalName}</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {activities.map((a) => (
            <li key={a.slug}>
              <Link to={`/uslugi#${a.slug}`} className="hover:text-steel-200">
                {a.title}
              </Link>
            </li>
          ))}
        </ul>
        <p>{contacts.country}</p>
      </div>
    </footer>
  )
}
