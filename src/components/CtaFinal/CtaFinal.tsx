import { useReveal } from '../../hooks/useReveal'
import s from './CtaFinal.module.css'

export function CtaFinal() {
  const ref = useReveal()

  return (
    <section id="cta-final" aria-label="Chamada para ação" ref={ref}>
      <div className={s.ctaGlow} aria-hidden="true" />
      <div className="ctr">
        <h2 className="rv">
          Garanta sua vaga no<br />
          <b>DunaSec 2026</b>
        </h2>
        <p className={`${s.sub} rv`}>// 30 de maio · Natal, RN · Vagas limitadas</p>
        <div className={`${s.ctaBtns} rv`}>
          <a
            href="https://www.sympla.com.br/evento/dunasec-2026/3332895"
            target="_blank"
            rel="noopener"
            className="btn btn-red btn-lg"
          >
            Comprar Ingresso
          </a>
          <a href="mailto:contact@hekateinc.com" className="btn btn-out btn-lg">
            Seja Patrocinador
          </a>
        </div>
      </div>
    </section>
  )
}
