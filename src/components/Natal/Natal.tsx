import { useState, useEffect, useCallback } from 'react'
import circuitCyan from '../../assets/circuit_cyan.png'
import { useReveal } from '../../hooks/useReveal'
import s from './Natal.module.css'

const slides = [
  { src: '/natal/forte-reis-magos-ponte.png',                caption: 'Forte dos Reis Magos' },
  { src: '/natal/pedro-menezes-Ej5PnJ4AhJU-unsplash.jpg',  caption: 'Praia de Ponta Negra' },
  { src: '/natal/pedro-menezes-Gisi_G8CXWI-unsplash.jpg',  caption: 'Praia de Ponta Negra' },
  { src: '/natal/pedro-menezes-PUtXlF8CU1A-unsplash.jpg',  caption: 'Arena das Dunas' },
  { src: '/natal/pedro-menezes-VvdPotiJshs-unsplash.jpg',  caption: 'Morro do Careca' },
  { src: '/natal/pedro-menezes-qd6jpiWOU08-unsplash.jpg',  caption: 'Ponte Newton Navarro' },
  { src: '/natal/maior-cajueiro-do-mundo.png',              caption: 'Maior Cajueiro do Mundo — Pirangi, RN' },
  { src: '/natal/centro-de-pipa.jpg',                       caption: 'Centro de Pipa' },
  { src: '/natal/parque-da-cidade-dom-nivaldo-monte.jpg',   caption: 'Torre Oscar Niemeyer' },
  { src: '/natal/praia-do-amor-pipa-1.jpg',                 caption: 'Praia do Amor, Pipa' },
]

export function Natal() {
  const ref = useReveal()
  const [cur, setCur] = useState(0)

  const next = useCallback(() => setCur(i => (i + 1) % slides.length), [])
  const prev = useCallback(() => setCur(i => (i - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  return (
    <section id="natal" aria-labelledby="natal-h2" ref={ref}>
      <div className={s.natalWrap}>
        <img className={s.natalCirc} src={circuitCyan} alt="" aria-hidden="true" loading="lazy" />
        <div className={s.natalGlow} aria-hidden="true" />

        <div className={`${s.natalText} rv`}>
          <p className="ey">Destino do evento</p>
          <h2 id="natal-h2" className="t">
            Natal <b>e Região</b>
          </h2>
          <div className="rule" />
          <p style={{ marginTop: '1.6rem' }}>
            Natal, capital do Rio Grande do Norte, é um dos destinos turísticos mais deslumbrantes do Brasil — lar das dunas douradas e do icônico Morro do Careca. A região ainda abriga o maior cajueiro do mundo e, a poucos quilômetros, Pipa encanta com praias selvagens e falésias de tirar o fôlego.
          </p>
          <p>
            A região que inspirou o nome DunaSec une beleza natural, cultura nordestina e um polo tecnológico em expansão. Venha por segurança — e fique pela experiência.
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
              <span className={s.nstatN}>#1</span>
              <span className={s.nstatL}>maior cajueiro do mundo</span>
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

            {slides.map((sl, i) => (
              <img
                key={sl.src}
                src={sl.src}
                alt={sl.caption}
                className={`${s.natalPhoto} ${i === cur ? s.natalPhotoActive : ''}`}
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
          <p className={s.photoCredit}>
            Fotos: Esdras Rebouças Nobre &amp;{' '}
            <a href="https://unsplash.com/pt-br/@pedromenezes" target="_blank" rel="noopener noreferrer">
              Pedro Menezes
            </a>{' '}
            — <span>Licença Unsplash</span>
          </p>
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
            <p>Dunas, praias, buggys, Morro do Careca, Pipa e cultura nordestina</p>
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
