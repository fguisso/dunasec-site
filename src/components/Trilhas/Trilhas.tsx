import circuitRed from '../../assets/circuit_red.png'
import circuitCyan from '../../assets/circuit_cyan.png'
import { useReveal } from '../../hooks/useReveal'
import s from './Trilhas.module.css'

export function Trilhas() {
  const ref = useReveal()

  return (
    <section id="trilhas" ref={ref}>
      <div className="ctr">
        <div className="rv" style={{ marginBottom: '2.4rem' }}>
          <p className="ey">Formato</p>
          <h2 className="t">Duas trilhas, <b>um objetivo</b></h2>
          <div className="rule" />
        </div>

        <div className={s.trilhasG}>
          {/* Técnica — PRIMEIRO — vermelho */}
          <article className={`${s.trilha} ${s.tech} rv d1`}>
            <div className={s.tcCorner} />
            <img className={s.trilhaCirc} src={circuitRed} alt="" aria-hidden="true" loading="lazy" />
            <span className={`${s.tbadge} ${s.badgeTech}`}>Trilha Técnica</span>
            <h3>Trilha Técnica</h3>
            <p>
              Para analistas, engenheiros e especialistas em AppSec, Red Team, DevSecOps e Cloud Security. Palestras de alto nível com quem faz acontecer.
            </p>
            <ul>
              <li>Application Security (AppSec)</li>
              <li>Cloud Security</li>
              <li>Threat Intelligence</li>
              <li>Red Team &amp; Offensive Security</li>
              <li>DevSecOps na prática</li>
            </ul>
          </article>

          {/* Gerencial — SEGUNDO — ciano */}
          <article className={`${s.trilha} ${s.ger} rv d2`}>
            <div className={s.tcCorner} />
            <img className={s.trilhaCirc} src={circuitCyan} alt="" aria-hidden="true" loading="lazy" />
            <span className={`${s.tbadge} ${s.badgeGer}`}>Trilha Gerencial</span>
            <h3>Trilha Gerencial</h3>
            <p>
              Para CIOs, CTOs, CISOs e DPOs que tomam decisões estratégicas e buscam transformar suas empresas com segurança e conformidade.
            </p>
            <ul>
              <li>Estratégia e Gestão de Riscos</li>
              <li>IA, Privacidade e LGPD</li>
              <li>Segurança para Startups</li>
              <li>Painéis com Gestores e C-Levels</li>
              <li>Transformação Digital Segura</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
