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
              {speaker.github && (
                <a href={speaker.github} target="_blank" rel="noopener noreferrer" className={s.spkGh} aria-label={`GitHub de ${speaker.name}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              )}
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
