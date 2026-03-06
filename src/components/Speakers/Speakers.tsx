import speakersData from '../../data/speakers.json'
import { useReveal } from '../../hooks/useReveal'
import s from './Speakers.module.css'

export function Speakers() {
  const ref = useReveal()
  const delays = ['d1', 'd2', 'd3', 'd4']

  return (
    <section id="palestrantes" ref={ref}>
      <div className="ctr">
        <div className="rv" style={{ marginBottom: '2.4rem' }}>
          <p className="ey">Quem fala</p>
          <h2 className="t">Palestrantes <b>Confirmados</b></h2>
          <div className="rule" />
        </div>

        <div className={s.spkG}>
          {speakersData.map((speaker, i) => (
            <article key={speaker.id} className={`${s.spk} rv ${delays[i] || ''}`}>
              <div className={s.spkAv}>
                {speaker.photo
                  ? <img src={speaker.photo} alt={speaker.name} className={s.spkAvImg} />
                  : speaker.initials
                }
              </div>
              <p className={s.spkNm}>{speaker.name}</p>
              <p className={s.spkRl}>{speaker.role}</p>
              <p className={s.spkCo}>{speaker.company}</p>
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
