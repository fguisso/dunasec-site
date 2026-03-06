import { useReveal } from '../../hooks/useReveal'
import s from './Localizacao.module.css'

export function Localizacao() {
  const ref = useReveal()

  return (
    <section id="localizacao" ref={ref}>
      <div className="ctr">
        <div className={s.localG}>
          <div>
            <div className="rv">
              <p className="ey">Local do evento</p>
              <h2 className="t">Venue, <b>Natal RN</b></h2>
              <div className="rule" />
            </div>
            <p className="rv d1" style={{ marginTop: '1.5rem' }}>
              O DunaSec acontece em Natal, capital do Rio Grande do Norte — conectada por voo direto das principais capitais brasileiras.
            </p>
            <div className={`${s.localAddr} rv d2`}>
              <span className={s.localEy}>Local do evento</span>
              <p>
                <strong>[ENDEREÇO A DEFINIR]</strong><br />
                Natal, RN — Brasil
              </p>
            </div>
            <div className="rv d3">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener"
                className="btn btn-out"
              >
                Ver no Google Maps
              </a>
            </div>
          </div>

          <div className={`${s.localFr} rv`}>
            <div className={`${s.lhud} ${s.tl}`} />
            <div className={`${s.lhud} ${s.tr}`} />
            <div className={`${s.lhud} ${s.bl}`} />
            <div className={`${s.lhud} ${s.br}`} />
            <div className={s.localPh}>
              <p className={s.phLabel}>Venue a definir</p>
            </div>
            <span className={s.localCoord}>Natal, RN · Brasil</span>
          </div>
        </div>
      </div>
    </section>
  )
}
