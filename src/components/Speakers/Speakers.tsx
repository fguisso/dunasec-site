import { useRef, useEffect, useCallback } from 'react'
import speakersData from '../../data/speakers.json'
import { useReveal } from '../../hooks/useReveal'
import s from './Speakers.module.css'

// duplica para criar ilusão de loop infinito
const doubled = [...speakersData, ...speakersData]

export function Speakers() {
  const ref = useReveal()
  const trackRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // reset silencioso: quando passa da metade, volta instantaneamente
  const resetIfNeeded = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const half = el.scrollWidth / 2
    if (el.scrollLeft >= half) {
      el.style.scrollBehavior = 'auto'
      el.scrollLeft -= half
      el.offsetHeight // force reflow
      el.style.scrollBehavior = ''
    }
  }, [])

  const scroll = useCallback((dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('article') as HTMLElement
    el.scrollBy({ left: dir * (card.offsetWidth + 16), behavior: 'smooth' })
    setTimeout(resetIfNeeded, 450)
  }, [resetIfNeeded])

  const startAuto = useCallback(() => {
    timerRef.current = setInterval(() => scroll(1), 5000)
  }, [scroll])

  const stopAuto = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
  }, [])

  useEffect(() => {
    startAuto()
    return stopAuto
  }, [startAuto, stopAuto])

  return (
    <section id="palestrantes" ref={ref}>
      <div className="ctr">
        <div className={`${s.spkHead} rv`}>
          <div>
            <p className="ey">Quem fala</p>
            <h2 className="t">Palestrantes <b>Confirmados</b></h2>
            <div className="rule" />
          </div>
          <div className={s.spkNav}>
            <button className={s.navBtn} onClick={() => { stopAuto(); scroll(-1); startAuto() }} aria-label="Anterior">‹</button>
            <button className={s.navBtn} onClick={() => { stopAuto(); scroll(1); startAuto() }} aria-label="Próximo">›</button>
          </div>
        </div>

        <div className={s.spkTrack} ref={trackRef} onMouseEnter={stopAuto} onMouseLeave={startAuto}>
          {doubled.map((speaker, i) => (
            <article key={`${speaker.id}-${i}`} className={s.spk}>
              <div className={s.spkAv}>
                {speaker.photo
                  ? <img src={speaker.photo} alt={speaker.name} className={s.spkAvImg} loading="lazy" />
                  : speaker.initials
                }
              </div>
              <p className={s.spkNm}>{speaker.name}</p>
              {speaker.role    && <p className={s.spkRl}>{speaker.role}</p>}
              {speaker.company && <p className={s.spkCo}>{speaker.company}</p>}
              <span className={`${s.spkB} ${speaker.track === 'tecnica' ? s.sbt : s.sbr}`}>
                {speaker.track === 'tecnica' ? 'Técnica' : 'Gerencial'}
              </span>
            </article>
          ))}
        </div>

        <div className={`${s.spkCta} rv`}>
          <p>Mais palestrantes serão anunciados em breve</p>
        </div>
      </div>
    </section>
  )
}
