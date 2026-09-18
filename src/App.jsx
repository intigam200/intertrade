import { Link, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { PageHero, ScrollManager } from './components/ui.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Products from './pages/Products.jsx'
import Contacts from './pages/Contacts.jsx'
import { useI18n } from './i18n/index.jsx'
import { languages, routes } from './i18n/routes.js'

const pages = {
  home: Home,
  about: About,
  services: Services,
  products: Products,
  contacts: Contacts,
}

function NotFound() {
  const { t, path } = useI18n()
  return (
    <PageHero code={t.notFound.code} title={t.notFound.title} lead={t.notFound.lead}>
      <Link to={path('home')} className="btn-primary mt-8">
        {t.notFound.button}
      </Link>
    </PageHero>
  )
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />
      <Header />
      <main className="flex-1">
        <Routes>
          {/* Один и тот же экран объявляется в обоих языках: /uslugi и /en/services */}
          {Object.entries(pages).flatMap(([key, Page]) =>
            languages.map((lang) => (
              <Route key={`${lang}-${key}`} path={routes[key][lang]} element={<Page />} />
            )),
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
