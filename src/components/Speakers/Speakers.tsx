import { useRef, useEffect, useCallback } from 'react'
import speakersData from '../../data/speakers.json'
import { useReveal } from '../../hooks/useReveal'
import s from './Speakers.module.css'

export function Speakers() {
  const ref = useReveal()
  const trackRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const scroll = useCallback((dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('article') as HTMLElement
    const step = card.offsetWidth + 16
    // se chegou no fim, volta ao início
    if (dir === 1 && el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) {
      el.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      el.scrollBy({ left: dir * step, behavior: 'smooth' })
    }
  }, [])

  const startAuto = useCallback(() => {
    timerRef.current = setInterval(() => scroll(1), 3000)
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
          {speakersData.map((speaker) => (
            <article key={speaker.id} className={s.spk}>
              <div className={s.spkAv}>
                {speaker.photo
                  ? <img src={speaker.photo} alt={speaker.name} className={s.spkAvImg} />
                  : speaker.initials
                }
              </div>
              <p className={s.spkNm}>{speaker.name}</p>
              {speaker.role  && <p className={s.spkRl}>{speaker.role}</p>}
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
