import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../../assets/logo_branco.png'
import s from './Navbar.module.css'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => {
    setOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMenu = () => {
    const next = !open
    setOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  // On non-home pages, section links go to /#anchor
  const sectionHref = (anchor: string) => isHome ? anchor : `/${anchor}`

  return (
    <>
      <nav className={`${s.navbar}${scrolled ? ' ' + s.scrolled : ''}`}>
        <div className={s.navW}>
          <Link to="/" className={s.navLogo} onClick={closeMenu}>
            <img src={logoImg} alt="DunaSec" />
          </Link>
          <ul className={s.navLinks}>
            <li><Link to="/agenda" onClick={closeMenu}>Agenda</Link></li>
            <li><a href={sectionHref('#palestrantes')}>Palestrantes</a></li>
            <li><a href={sectionHref('#patrocinadores')}>Patrocinadores</a></li>
            <li><a href={sectionHref('#faq')}>FAQ</a></li>
            <li><Link to="/dicas-da-cidade" onClick={closeMenu}>Dicas da Cidade</Link></li>
          </ul>
          <div className={s.navCtas}>
            <a href={sectionHref('#patrocinadores')} className={`btn btn-out ${s.hideOnMobile}`}>
              Seja Patrocinador
            </a>
            <a href="https://www.sympla.com.br/evento/dunasec-2026/3332895" target="_blank" rel="noopener" className="btn btn-red">
              Comprar Ingresso
            </a>
          </div>
          <button
            className={`${s.hbg}${open ? ' ' + s.open : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`${s.mob}${open ? ' ' + s.open : ''}`}>
        <Link to="/agenda" onClick={closeMenu}>Agenda</Link>
        <a href={sectionHref('#palestrantes')} onClick={closeMenu}>Palestrantes</a>
        <a href={sectionHref('#patrocinadores')} onClick={closeMenu}>Patrocinadores</a>
        <a href={sectionHref('#faq')} onClick={closeMenu}>FAQ</a>
        <Link to="/dicas-da-cidade" onClick={closeMenu}>Dicas da Cidade</Link>
        <a
          href="https://www.sympla.com.br/evento/dunasec-2026/3332895"
          target="_blank"
          rel="noopener"
          className="btn btn-red btn-lg"
          onClick={closeMenu}
        >
          Comprar Ingresso
        </a>
      </div>
    </>
  )
}
