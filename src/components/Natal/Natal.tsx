import circuitCyan from '../../assets/circuit_cyan.png'
import { useReveal } from '../../hooks/useReveal'
import s from './Natal.module.css'

export function Natal() {
  const ref = useReveal()

  return (
    <section id="natal" aria-labelledby="natal-h2" ref={ref}>
      <div className={s.natalWrap}>
        <img className={s.natalCirc} src={circuitCyan} alt="" aria-hidden="true" />
        <div className={s.natalGlow} aria-hidden="true" />

        <div className={`${s.natalText} rv`}>
          <p className="ey">Destino do evento</p>
          <h2 id="natal-h2" className="t">
            Natal, <b>Rio Grande do Norte</b>
          </h2>
          <div className="rule" />
          <p style={{ marginTop: '1.6rem' }}>
            Natal é a capital do Rio Grande do Norte e um dos destinos turísticos mais deslumbrantes do Brasil — lar das dunas douradas, praias de água morna e o icônico Morro do Careca.
          </p>
          <p>
            A cidade que inspirou o nome DunaSec une beleza natural, cultura nordestina e um polo tecnológico em expansão. Venha por segurança — e fique pela experiência.
          </p>
          <div className={s.natalStats}>
            <div className={s.nstat}>
              <span className={s.nstatN}>Top 5</span>
              <span className={s.nstatL}>Turismo no Brasil</span>
            </div>
            <div className={s.nstat}>
              <span className={s.nstatN}>300 km</span>
              <span className={s.nstatL}>de litoral</span>
            </div>
            <div className={s.nstat}>
              <span className={s.nstatN}>2.400h</span>
              <span className={s.nstatL}>de sol por ano</span>
            </div>
            <div className={s.nstat}>
              <span className={s.nstatN}>Voos</span>
              <span className={s.nstatL}>diretos das capitais</span>
            </div>
          </div>
        </div>

        <div className={`${s.natalVis} rv d2`}>
          <div className={s.carousel}>
            <div className={s.hudTl} /><div className={s.hudTr} />
            <div className={s.hudBl} /><div className={s.hudBr} />
            <img src="/natal/forte-reis-magos-ponte.png" alt="Forte dos Reis Magos, Natal RN" className={s.natalPhoto} />
            <div className={s.slideCaption}>
              <span className={s.slideName}>Forte dos Reis Magos</span>
            </div>
          </div>
        </div>
      </div>

      <div className={s.natalStrip}>
        <div className={`${s.natalStripIn} rv`}>
          <div className={s.nsi}>
            <span className={s.nsiT}>Conectividade</span>
            <p>Voos diretos de SP, Brasília, Fortaleza, Recife e outras capitais</p>
          </div>
          <div className={s.nsi}>
            <span className={s.nsiT}>Atrações</span>
            <p>Dunas, praias, buggys, Morro do Careca e cultura nordestina</p>
          </div>
          <div className={s.nsi}>
            <span className={s.nsiT}>Infraestrutura</span>
            <p>Hotéis para todos os perfis, gastronomia e agenda cultural ativa</p>
          </div>
        </div>
      </div>
    </section>
  )
}
