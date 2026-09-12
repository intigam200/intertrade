import { Link, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { PageHero, ScrollManager } from './components/ui.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Products from './pages/Products.jsx'
import Contacts from './pages/Contacts.jsx'

function NotFound() {
  return (
    <PageHero code="404" title="Страница не найдена" lead="Проверьте адрес или вернитесь к разделам сайта.">
      <Link to="/" className="btn-primary mt-8">
        На главную
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
          <Route path="/" element={<Home />} />
          <Route path="/o-kompanii" element={<About />} />
          <Route path="/uslugi" element={<Services />} />
          <Route path="/produkciya" element={<Products />} />
          <Route path="/kontakty" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
