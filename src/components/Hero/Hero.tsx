import logoImg from '../../assets/logo_branco.png'
import dnsImg from '../../assets/dns_branco.png'
import circuitRedFlip from '../../assets/circuit_red_flip.png'
import circuitRed from '../../assets/circuit_red.png'
import { useCountdown } from '../../hooks/useCountdown'
import s from './Hero.module.css'

export function Hero() {
  const { days, hours, minutes, seconds } = useCountdown()

  return (
    <section id="hero" aria-label="DunaSec 2026">
      <img className={s.hCircL} src={circuitRedFlip} alt="" aria-hidden="true" />
      <img className={s.hCircR} src={circuitRed} alt="" aria-hidden="true" />
      <div className={`bg-glow ${s.hG1}`} aria-hidden="true" />
      <div className={s.hG2} aria-hidden="true" />

      <div className={s.heroIn}>
        <h1 className={s.srOnly}>DunaSec 2026 — Conferência de Cibersegurança do Nordeste</h1>
        <p className={s.hTag}>01ª Edição &nbsp;·&nbsp; 2026</p>
        <div className={s.hLogo}>
          <img src={logoImg} alt="DunaSec" />
        </div>
        <div className={s.hDns}>
          <img src={dnsImg} alt="dns" />
        </div>
        <p className={s.hSub}>// Segurança que nasce do Nordeste, ecoa pelo Brasil</p>
        <div className={s.hMeta}>
          <span className={s.dot} />
          <span>30 de Maio de 2026</span>
          <span className={s.dot} />
          <span>Natal, RN</span>
          <span className={s.dot} />
          <span>Evento Presencial · 250 participantes</span>
        </div>
        <div className={s.hBtns}>
          <a href="https://www.sympla.com.br/evento/dunasec-2026/3332895" target="_blank" rel="noopener" className="btn btn-red btn-lg">
            Comprar Ingresso
          </a>
          <a href="#patrocinadores" className="btn btn-out btn-lg">
            Seja Patrocinador
          </a>
        </div>

        <p className={s.cdEy}>// Faltam para o evento</p>
        <div className={s.cd} role="timer">
          <div className={s.cdu}>
            <span className={s.cdn} suppressHydrationWarning>{days}</span>
            <span className={s.cdl}>Dias</span>
          </div>
          <div className={s.cdu}>
            <span className={s.cdn} suppressHydrationWarning>{hours}</span>
            <span className={s.cdl}>Horas</span>
          </div>
          <div className={s.cdu}>
            <span className={s.cdn} suppressHydrationWarning>{minutes}</span>
            <span className={s.cdl}>Min</span>
          </div>
          <div className={s.cdu}>
            <span className={s.cdn} suppressHydrationWarning>{seconds}</span>
            <span className={s.cdl}>Seg</span>
          </div>
        </div>
      </div>
    </section>
  )
}
