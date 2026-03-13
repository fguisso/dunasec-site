import { Link } from 'react-router-dom'
import logoImg from '../assets/logo_branco.png'
import s from './LinksPage.module.css'

const links = [
  {
    label: 'Comprar Ingresso',
    description: 'Garanta sua vaga no DunaSec 2026',
    href: 'https://www.sympla.com.br/evento/dunasec-2026/3332895',
    variant: 'red',
  },
  {
    label: 'Seja Patrocinador',
    description: 'Leve sua marca ao DunaSec 2026',
    href: 'https://forms.gle/C8ceUqPmbshzd22SA',
    variant: 'cyn',
  },
  {
    label: 'Apoiador / Comunidade',
    description: 'Apoie o evento com sua comunidade',
    href: 'https://forms.gle/pxC9GMMMMgP7LreZA',
    variant: 'out',
  },
  {
    label: 'Participe de uma Caravana',
    description: 'Venha com sua galera de outra cidade',
    href: 'https://forms.gle/dhybHr7LmwUWMWr57',
    variant: 'out',
  },
  {
    label: 'Seja Voluntário',
    description: 'Faça parte da equipe do evento',
    href: 'https://forms.gle/TbSjKwxmpBQCkqex5',
    variant: 'out',
  },
]

export function LinksPage() {
  return (
    <div className={s.page}>
      <div className={s.glow} aria-hidden="true" />

      <div className={s.card}>
        <Link to="/" className={s.logoWrap}>
          <img src={logoImg} alt="DunaSec" className={s.logo} />
        </Link>

        <p className={s.meta}>30 mai 2026 · Natal, RN</p>
        <p className={s.desc}>O novo evento de cibersegurança do Nordeste.</p>

        <div className={s.divider} />

        <nav className={s.links}>
          {links.map((lk) => (
            <a
              key={lk.href}
              href={lk.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${s.lkBtn} ${lk.variant === 'red' ? s.lkRed : lk.variant === 'cyn' ? s.lkCyn : s.lkOut}`}
            >
              <span className={s.lkLabel}>{lk.label}</span>
              <span className={s.lkDesc}>{lk.description}</span>
            </a>
          ))}
        </nav>

        <div className={s.socials}>
          <a
            href="https://www.instagram.com/dunasec/"
            target="_blank"
            rel="noopener noreferrer"
            className={s.soc}
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span>@dunasec</span>
          </a>
          <a
            href="https://www.linkedin.com/company/dunasec"
            target="_blank"
            rel="noopener noreferrer"
            className={s.soc}
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span>DunaSec</span>
          </a>
        </div>

        <p className={s.copy}>© 2026 DunaSec · <a href="mailto:contact@hekateinc.com">contact@hekateinc.com</a></p>
      </div>
    </div>
  )
}
