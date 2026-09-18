import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { contacts } from '../data/company.js'
import { useI18n } from '../i18n/index.jsx'
import { languages, routeKeys } from '../i18n/routes.js'

function Monogram() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0" aria-hidden>
      <rect width="40" height="40" fill="#C96A0E" />
      <rect x="8" y="10" width="4" height="20" fill="#FFFFFF" />
      <path d="M16 30V10l8 10v10" fill="none" stroke="#FFFFFF" strokeWidth="4" />
      <path d="M32 12a8 8 0 100 16" fill="none" stroke="#FFFFFF" strokeWidth="4" />
    </svg>
  )
}

/* Переключатель языка: ссылка на тот же экран в другой языковой версии */
function LangSwitch({ className = '' }) {
  const { lang, t, altPath } = useI18n()
  return (
    <div
      className={`flex items-center gap-1 font-mono text-[11px] uppercase tracking-wide2 ${className}`}
      aria-label={t.header.language}
    >
      {languages.map((code, i) => (
        <span key={code} className="flex items-center gap-1">
          {i > 0 && <span className="text-graphite-600">/</span>}
          {code === lang ? (
            <span className="px-1 text-ochre-400" aria-current="true">
              {code}
            </span>
          ) : (
            <Link to={altPath(code)} hrefLang={code} className="px-1 text-steel-400 hover:text-white">
              {code}
            </Link>
          )}
        </span>
      ))}
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { t, d, path } = useI18n()

  const nav = routeKeys.map((key, i) => ({
    key,
    to: path(key),
    label: t.nav[key],
    code: String(i).padStart(2, '0'),
  }))

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50">
      {/* верхняя служебная полоса */}
      <div className="hidden bg-graphite-950 text-steel-300 lg:block">
        <div className="shell flex h-10 items-center justify-between font-mono text-[11px] uppercase tracking-wide2">
          <p>{t.header.topline}</p>
          <div className="flex items-center gap-8">
            <span className="text-steel-500">{d.contacts.country}</span>
            <a href={contacts.emailHref} className="link-underline hover:text-white">
              {contacts.email}
            </a>
            <a href={contacts.phoneHref} className="link-underline text-white hover:text-ochre-400">
              {contacts.phone}
            </a>
            <LangSwitch />
          </div>
        </div>
      </div>

      <div className="border-b border-graphite-700 bg-graphite-900">
        <div className="shell flex h-[72px] items-center justify-between gap-6">
          <Link to={path('home')} className="flex items-center gap-3" aria-label={t.header.toHome}>
            <Monogram />
            <span className="leading-none">
              <span className="block font-display text-[17px] font-bold uppercase leading-none tracking-tightest text-white sm:text-[19px]">
                Intertrade
              </span>
              <span className="mt-1 block font-mono text-[10px] uppercase leading-none tracking-wide2 text-steel-400">
                and Consulting Group
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <NavLink
                key={item.key}
                to={item.to}
                end={item.key === 'home'}
                className={({ isActive }) =>
                  `px-4 py-2 font-mono text-[12px] uppercase tracking-wide2 transition-colors ${
                    isActive ? 'text-ochre-400' : 'text-steel-200 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LangSwitch className="lg:hidden" />
            <Link to={path('contacts')} className="btn-primary hidden !py-3 sm:inline-flex">
              {t.header.cta}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center border border-graphite-600 text-steel-100 lg:hidden"
              aria-expanded={open}
              aria-label={open ? t.header.closeMenu : t.header.openMenu}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" stroke="currentColor" strokeWidth="1.6" fill="none">
                {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* мобильное меню */}
      <div
        className={`fixed inset-x-0 bottom-0 top-[72px] z-40 bg-graphite-950 transition-opacity duration-200 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <nav className="shell flex flex-col pt-6">
          {nav.map((item) => (
            <NavLink
              key={item.key}
              to={item.to}
              end={item.key === 'home'}
              className={({ isActive }) =>
                `flex items-baseline gap-4 border-b border-graphite-800 py-5 font-display text-[26px] uppercase tracking-tightest ${
                  isActive ? 'text-ochre-400' : 'text-white'
                }`
              }
            >
              <span className="font-mono text-[11px] tracking-wide2 text-steel-500">{item.code}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="shell mt-8 space-y-3 font-mono text-[13px] uppercase tracking-wide2">
          <a href={contacts.phoneHref} className="block text-white">
            {contacts.phone}
          </a>
          <a href={contacts.emailHref} className="block text-steel-300 normal-case tracking-normal">
            {contacts.email}
          </a>
          <LangSwitch className="pt-2" />
        </div>
      </div>
    </header>
  )
}
