import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Home } from './pages/Home'
import { CodigoDeCondutaPage } from './pages/CodigoDeCondutaPage'
import { LinksPage } from './pages/LinksPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export function App() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const isLinks = pathname === '/links'

  if (isLinks) return <LinksPage />

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/codigo-de-conduta" element={<CodigoDeCondutaPage />} />
        <Route path="/links" element={<LinksPage />} />
      </Routes>
      {isHome && <Footer />}
    </>
  )
}
