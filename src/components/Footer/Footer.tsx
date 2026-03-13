import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo_branco.png'
import s from './Footer.module.css'

export function Footer() {
  return (
    <footer>
      <div className="ctr">
        <div className={s.ftG}>
          <div className={s.ftBrand}>
            <Link to="/">
              <img src={logoImg} alt="DunaSec" className={s.ftLogo} />
            </Link>
            <p>O evento de cibersegurança nascido no coração do Nordeste. 30 de maio de 2026, Natal, RN.</p>
            <div className={s.socials}>
              <a href="https://instagram.com" target="_blank" rel="noopener" className={s.soc} aria-label="Instagram">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" className={s.soc} aria-label="LinkedIn">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          <nav className={s.ftCol}>
            <h4>Evento</h4>
            <ul>
              <li><a href="#natal">Natal, RN</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#trilhas">Trilhas</a></li>
              <li><a href="#palestrantes">Palestrantes</a></li>
            </ul>
          </nav>

          <nav className={s.ftCol}>
            <h4>Participe</h4>
            <ul>
              <li><a href="https://www.sympla.com.br/evento/dunasec-2026/3332895" target="_blank" rel="noopener">Comprar Ingresso</a></li>
              <li><a href="#caravanas">Caravanas</a></li>
              <li><a href="#voluntarios">Voluntários</a></li>
              <li><a href="#patrocinadores">Patrocínio</a></li>
            </ul>
          </nav>

          <nav className={s.ftCol}>
            <h4>Info</h4>
            <ul>
              <li><Link to="/codigo-de-conduta">Código de Conduta</Link></li>
              <li><a href="mailto:contact@hekateinc.com">Contato</a></li>
            </ul>
          </nav>
        </div>

        <div className={s.ftOrgs}>
          <span className={s.ftOrgsLabel}>Realização</span>
          <div className={s.ftOrgsLogos}>
            <a href="https://www.instagram.com/grupo.lune" target="_blank" rel="noopener noreferrer" aria-label="Grupo Lune" className={s.ftOrgLune}>
              <img src="/org/lune-agencia.png" alt="Grupo Lune" className={s.ftOrgImg} />
            </a>
            <a href="https://www.hekateinc.com" target="_blank" rel="noopener noreferrer" aria-label="Hekate" className={s.ftOrgHekate}>
              <img src="/org/Hekate-Inc.png" alt="Hekate" className={`${s.ftOrgImg} ${s.ftOrgImgColor}`} />
            </a>
          </div>
        </div>

        <div className={s.ftBot}>
          <p>© 2026 DunaSec. Todos os direitos reservados.</p>
          <a href="mailto:contact@hekateinc.com">contact@hekateinc.com</a>
        </div>
      </div>
    </footer>
  )
}
