import { useState, useEffect, useCallback } from 'react'
import { useReveal } from '../../hooks/useReveal'
import s from './Localizacao.module.css'

const slides = [
  { src: '/venue/barreira-roxa-aerea.jpg',   caption: 'Vista aérea, Barreira Roxa' },
  { src: '/venue/barreira-roxa-fachada.jpg', caption: 'Hotel Escola Senac Barreira Roxa' },
  { src: '/venue/barreira-roxa-trvl.jpg',    caption: 'Área externa do hotel' },
  { src: '/venue/barreira-roxa-ig1.jpg',     caption: 'Instalações Barreira Roxa' },
]

export function Localizacao() {
  const ref = useReveal()
  const [cur, setCur] = useState(0)

  const next = useCallback(() => setCur(i => (i + 1) % slides.length), [])
  const prev = useCallback(() => setCur(i => (i - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  return (
    <section id="localizacao" ref={ref}>
      <div className="ctr">
        <div className={s.localG}>
          <div>
            <div className="rv">
              <p className="ey">Local do evento</p>
              <h2 className="t">Hotel <b>Barreira Roxa</b></h2>
              <div className="rule" />
            </div>
            <p className="rv d1" style={{ marginTop: '1.5rem' }}>
              O DunaSec acontece no Hotel Escola Senac Barreira Roxa, em Natal, capital do Rio Grande do Norte, conectada por voo direto das principais capitais brasileiras.
            </p>
            <div className={`${s.localAddr} rv d2`}>
              <span className={s.localEy}>Endereço</span>
              <p>
                <strong>Hotel Escola Senac Barreira Roxa</strong><br />
                Via Costeira Senador Dinarte Mariz, 4002<br />
                Parque das Dunas, Natal, RN
              </p>
            </div>
            <div className="rv d3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Hotel+Escola+Senac+Barreira+Roxa+Natal+RN"
                target="_blank"
                rel="noopener"
                className="btn btn-out"
              >
                Ver no Google Maps
              </a>
            </div>
          </div>

          <div className={`${s.localFr} rv`}>
            <div className={s.carousel}>
              <div className={`${s.lhud} ${s.tl}`} />
              <div className={`${s.lhud} ${s.tr}`} />
              <div className={`${s.lhud} ${s.bl}`} />
              <div className={`${s.lhud} ${s.br}`} />

              {slides.map((sl, i) => (
                <img
                  key={sl.src}
                  src={sl.src}
                  alt={sl.caption}
                  className={`${s.localPhoto} ${i === cur ? s.localPhotoActive : ''}`}
                  loading="lazy"
                />
              ))}

              <div className={s.slideCaption}>
                <span className={s.slideName}>{slides[cur].caption}</span>
                <div className={s.slideDots}>
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      className={`${s.dot} ${i === cur ? s.dotActive : ''}`}
                      onClick={() => setCur(i)}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              <button className={`${s.carBtn} ${s.carBtnL}`} onClick={prev} aria-label="Anterior">‹</button>
              <button className={`${s.carBtn} ${s.carBtnR}`} onClick={next} aria-label="Próximo">›</button>
            </div>
            <span className={s.localCoord}>Natal, RN · Brasil</span>
          </div>
        </div>
      </div>
    </section>
  )
}
