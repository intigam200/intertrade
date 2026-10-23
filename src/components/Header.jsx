import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FiArrowRight, FiChevronDown, FiMail, FiMenu, FiPhone, FiX } from 'react-icons/fi'
import { contacts } from '../data/company.js'
import { useI18n } from '../i18n/index.jsx'
import { languages, routeKeys } from '../i18n/routes.js'

export function Logo({ size = 'md' }) {
  const big = size === 'lg'
  return (
    <span className="flex items-center gap-3">
      <svg
        viewBox="0 0 40 40"
        className={`shrink-0 ${big ? 'h-14 w-14' : 'h-11 w-11 md:h-12 md:w-12'}`}
        aria-hidden
      >
        <rect width="40" height="40" rx="6" fill="#2D72D2" />
        <rect x="8" y="10" width="4" height="20" fill="#FFFFFF" />
        <path d="M16 30V10l8 10v10" fill="none" stroke="#FFFFFF" strokeWidth="4" />
        <path d="M32 12a8 8 0 100 16" fill="none" stroke="#FFFFFF" strokeWidth="4" />
      </svg>
      <span className="leading-none">
        <span className={`block font-extrabold uppercase tracking-[0.02em] text-white ${big ? 'text-[22px]' : 'text-[18px] md:text-[20px]'}`}>
          Intertrade
        </span>
        <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.14em] text-white/70">
          and Consulting Group
        </span>
      </span>
    </span>
  )
}

/* Переключатель языка: ссылка на тот же экран в другой языковой версии */
function LangSwitch({ className = '' }) {
  const { lang, t, altPath } = useI18n()
  return (
    <div className={`flex items-center rounded-btn border border-white/20 p-0.5 ${className}`} role="group" aria-label={t.header.language}>
      {languages.map((code) =>
        code === lang ? (
          <span
            key={code}
            className="rounded-[2px] bg-white/10 px-2.5 py-1 text-[12px] font-bold uppercase text-white"
            aria-current="true"
          >
            {code}
          </span>
        ) : (
          <Link
            key={code}
            to={altPath(code)}
            hrefLang={code}
            lang={code}
            className="rounded-[2px] px-2.5 py-1 text-[12px] font-bold uppercase text-white/70 hover:text-white"
          >
            {code}
          </Link>
        ),
      )}
    </div>
  )
}

/* Верхняя полоса с контактами — скрыта на телефоне */
export function TopBar() {
  return (
    <div className="on-dark hidden bg-navy-deep text-[12px] text-[rgba(244,237,237,0.94)] md:block">
      <div className="container-wide flex h-9 items-center justify-between">
        <div className="flex items-center gap-4">
          <a href={contacts.emailHref} className="flex items-center gap-1.5 hover:text-white">
            <FiMail className="h-[13px] w-[13px]" aria-hidden />
            {contacts.email}
          </a>
          <span className="h-3.5 w-px bg-white/20" aria-hidden />
          <a href={contacts.phoneHref} className="flex items-center gap-1.5 hover:text-white">
            <FiPhone className="h-[13px] w-[13px]" aria-hidden />
            {contacts.phone}
          </a>
        </div>
      </div>
    </div>
  )
}

/* Выпадающее меню: открывается наведением и фокусом с клавиатуры.
   Мостик между ссылкой и меню — padding-top, а не margin, иначе меню
   закрывается, пока курсор идёт вниз. */
function MegaMenu({ items, all, wide }) {
  return (
    <div className="invisible absolute left-1/2 top-full z-10 -translate-x-1/2 pt-4 opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
      <div className={`animate-menu-in rounded-xl bg-white p-4 shadow-menu ${wide ? 'w-[460px]' : 'w-[320px]'}`}>
        <ul className={`grid gap-1 ${wide ? 'grid-cols-2' : 'grid-cols-1'}`}>
          {items.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="block rounded-md px-2.5 py-2 text-[13px] font-semibold leading-snug text-navy transition-all duration-150 hover:bg-mist hover:pl-3.5 hover:text-accent"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to={all.to}
          className="mt-3 flex items-center gap-2 border-t border-line px-2.5 pt-3 text-[13px] font-semibold text-accent hover:text-accent-hover"
        >
          {all.label}
          <FiArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const { t, d, path } = useI18n()

  const menus = {
    services: {
      wide: true,
      items: [
        ...d.activities.map((a) => ({ to: path('services', `#${a.slug}`), label: a.title })),
      ],
      all: { to: path('services'), label: t.nav.allServices },
    },
    products: {
      items: d.catalog.map((c) => ({ to: path('products', `#${c.id}`), label: c.title })),
      all: { to: path('products'), label: t.nav.allProducts },
    },
  }

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header
      className={`on-dark sticky top-0 z-[100] border-b transition-colors duration-200 ${
        scrolled ? 'border-white/[0.07] bg-navy-night/95 backdrop-blur-md' : 'border-transparent bg-navy-night'
      }`}
    >
      <div className="container-wide flex h-[72px] items-center justify-between gap-6 lg:h-[97px]">
        <Link to={path('home')} aria-label={t.header.toHome} className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label={t.header.mainNav} className="hidden items-center gap-8 lg:flex">
          {routeKeys.map((key) => {
            const menu = menus[key]
            const link = (
              <NavLink
                to={path(key)}
                end={key === 'home'}
                className={({ isActive }) => `nav-link flex items-center gap-1 ${isActive ? 'nav-link-active' : ''}`}
              >
                {t.nav[key]}
                {menu && <FiChevronDown className="h-3.5 w-3.5 opacity-70" aria-hidden />}
              </NavLink>
            )
            return menu ? (
              <div key={key} className="group relative">
                {link}
                <MegaMenu {...menu} />
              </div>
            ) : (
              <div key={key}>{link}</div>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitch className="hidden sm:flex" />
          <Link to={path('contacts')} className="btn-primary hidden !px-6 !py-2.5 !text-[13px] md:inline-flex">
            {t.header.cta}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-md text-white transition-colors hover:bg-white/[0.08] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
          >
            {open ? <FiX className="h-7 w-7" aria-hidden /> : <FiMenu className="h-7 w-7" aria-hidden />}
          </button>
        </div>
      </div>

      {/* мобильное меню */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-navy lg:hidden"
      >
        <nav aria-label={t.header.mainNav} className="container-wide flex flex-col py-4">
          {routeKeys.map((key) => (
            <NavLink
              key={key}
              to={path(key)}
              end={key === 'home'}
              className={({ isActive }) =>
                `border-b border-white/[0.08] py-4 text-[16px] font-medium ${
                  isActive ? 'text-accent-soft' : 'text-white'
                }`
              }
            >
              {t.nav[key]}
            </NavLink>
          ))}
          <Link to={path('contacts')} className="btn-primary mt-6 w-full">
            {t.header.cta}
            <FiArrowRight className="h-[18px] w-[18px]" aria-hidden />
          </Link>
          <LangSwitch className="mt-6 self-start sm:hidden" />
          <div className="mt-8 space-y-3 text-[15px]">
            <a href={contacts.phoneHref} className="flex items-center gap-3 font-semibold text-white">
              <FiPhone className="h-4 w-4 text-accent-soft" aria-hidden />
              {contacts.phone}
            </a>
            <a href={contacts.emailHref} className="flex items-center gap-3 text-white/80">
              <FiMail className="h-4 w-4 text-accent-soft" aria-hidden />
              {contacts.email}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
