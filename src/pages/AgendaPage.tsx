import { Link } from 'react-router-dom'
import agendaData from '../data/agenda.json'
import s from './AgendaPage.module.css'

type Track = 'tecnica' | 'gerencial'

interface Entry {
  time: string
  endTime: string
  duration: number
  type: 'general' | 'talk' | 'panel'
  title?: string
  track?: Track
}

const data = agendaData as Entry[]

function fmtRange(start: string, end: string) {
  return `${start.replace(':', 'h')} - ${end.replace(':', 'h')}`
}

export function AgendaPage() {
  const times = [...new Set(data.map((e) => e.time))].sort()

  return (
    <>
      <header className={s.pageHdr}>
        <div className={s.pageHdrGlow} aria-hidden="true" />
        <div className={s.container}>
          <p className={s.kicker}>// Programação</p>
          <h1>Agenda <span>DunaSec 2026</span></h1>
          <div className={s.meta}>
            <span><span className={s.metaDot} />30 de Maio de 2026</span>
            <span><span className={s.metaDot} />Natal, RN</span>
            <span><span className={s.metaDot} />2 Trilhas Simultâneas</span>
          </div>
        </div>
      </header>

      <main>
        <div className={s.container}>
          <div className={s.legend}>
            <div className={s.legItem}><div className={`${s.legDot} ${s.ldTech}`} /> Trilha Técnica</div>
            <div className={s.legItem}><div className={`${s.legDot} ${s.ldGer}`} /> Trilha Gerencial</div>
            <div className={s.legItem}><div className={`${s.legDot} ${s.ldGen}`} /> Atividade Geral</div>
          </div>

          <div className={s.schedGrid}>
            <div className={`${s.gridHdr} ${s.hdrTime}`}>Horário</div>
            <div className={`${s.gridHdr} ${s.hdrTech}`}>Trilha Técnica</div>
            <div className={`${s.gridHdr} ${s.hdrGer}`}>Trilha Gerencial</div>

            {times.map((time) => {
              const entries = data.filter((e) => e.time === time)
              const general = entries.find((e) => e.type === 'general')
              const tech = entries.find((e) => e.track === 'tecnica')
              const ger = entries.find((e) => e.track === 'gerencial')

              if (general) {
                const isBreak = general.title === 'Pausa para Almoço' || general.title === 'Coffee Break' || general.title === 'Credenciamento'
                const isPanel = general.title === 'Painel'
                const tagLabel = isBreak ? 'Intervalo' : isPanel ? 'Painel' : 'Atividade Geral'
                return (
                  <div key={time} className={s.row}>
                    <div className={s.slotTime}>
                      <span className={s.timeStart}>{time.replace(':', 'h')}</span>
                      <span className={s.timeRange}>{fmtRange(general.time, general.endTime)}</span>
                      <span className={s.timeDur}>{general.duration} min</span>
                    </div>
                    <div className={`${s.slotCell} ${s.slotFull} ${isBreak ? s.slotBreak : s.slotGeneral}`}>
                      <span className={`${s.tag} ${isBreak ? s.tagBreak : s.tagGen}`}>
                        {tagLabel}
                      </span>
                      <p className={s.slotTitle}>{general.title}</p>
                    </div>
                  </div>
                )
              }

              return (
                <div key={time} className={s.row}>
                  <div className={s.slotTime}>
                    <span className={s.timeStart}>{time.replace(':', 'h')}</span>
                    <span className={s.timeRange}>{fmtRange(tech?.time || time, tech?.endTime || ger?.endTime || time)}</span>
                    <span className={s.timeDur}>{(tech || ger)?.duration} min</span>
                  </div>
                  <div className={`${s.slotCell} ${tech ? s.slotTech : s.slotEmpty}`}>
                    {tech ? (
                      <>
                        <span className={`${s.tag} ${s.tagTech}`}>Palestra</span>
                        <p className={s.slotTitle}>A confirmar</p>
                      </>
                    ) : (
                      <span className={s.emptyMark}>—</span>
                    )}
                  </div>
                  <div className={`${s.slotCell} ${ger ? s.slotGer : s.slotEmpty}`}>
                    {ger ? (
                      <>
                        <span className={`${s.tag} ${s.tagGer}`}>{ger.type === 'panel' ? 'Painel Gerencial' : 'Palestra'}</span>
                        <p className={s.slotTitle}>A confirmar</p>
                      </>
                    ) : (
                      <span className={s.emptyMark}>—</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <div className={s.noteBox}>
            Programação sujeita a alterações. Palestrantes e títulos das sessões serão divulgados em breve. Siga o DunaSec no Instagram e LinkedIn para atualizações.
          </div>

          <div className={s.backBtn}>
            <Link to="/" className="btn btn-out">← Voltar para o site</Link>
          </div>
        </div>
      </main>

      <footer>
        <div className={s.footerInner}>
          <p>© 2026 DunaSec, todos os direitos reservados.</p>
          <Link to="/" className="btn btn-out">← Voltar</Link>
        </div>
      </footer>
    </>
  )
}
