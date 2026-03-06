import logoMarkImg from '../../assets/logo_mark_branco.png'
import { useReveal } from '../../hooks/useReveal'
import s from './Sobre.module.css'

export function Sobre() {
  const ref = useReveal()

  return (
    <section id="sobre" ref={ref}>
      <div className="ctr">
        <div className={s.sobreG}>
          <div className={s.sobreT}>
            <div className="rv">
              <p className="ey">O evento</p>
              <h2 className="t">Sobre o <b>DunaSec</b></h2>
              <div className="rule" />
            </div>
            <p className="rv d1" style={{ marginTop: '1.7rem' }}>
              O DunaSec é o novo ponto de encontro entre profissionais, empresas e comunidades de tecnologia focados em cibersegurança, inovação e colaboração no Nordeste.
            </p>
            <p className="rv d2">
              Com duas trilhas simultâneas — <strong>Gerencial</strong>, voltada para C-Levels e tomadores de decisão, e <em>Técnica</em>, dedicada a desenvolvedores e analistas — o DunaSec promove discussões de alto nível sobre os desafios da segurança digital.
            </p>
            <div className={s.stats}>
              <div className={`${s.stat} rv d1`}>
                <span className={s.statN}>250+</span>
                <span className={s.statL}>Participantes</span>
              </div>
              <div className={`${s.stat} rv d2`}>
                <span className={s.statN}>2</span>
                <span className={s.statL}>Trilhas</span>
              </div>
              <div className={`${s.stat} rv d3`}>
                <span className={s.statN}>4+</span>
                <span className={s.statL}>Palestrantes</span>
              </div>
            </div>
          </div>

          <div className={`${s.sobreVis} rv`}>
            <div className={s.mark}>
              <div className={s.markGlow} />
              <img src={logoMarkImg} alt="DunaSec" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
