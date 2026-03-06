import { useState } from 'react'
import { Link } from 'react-router-dom'
import agendaData from '../data/agenda.json'
import speakersData from '../data/speakers.json'
import s from './AgendaPage.module.css'

type Trail = 'both' | 'ger' | 'tech'

const speakersMap = Object.fromEntries(speakersData.map((sp) => [sp.id, sp]))

interface SlotProps {
  title: string
  speakerId?: string | null
  duration: number
  typeClass: string
  typeLabel: string
  isPlaceholder?: boolean
  description?: string
}

function TalkSlot({ title, speakerId, duration, typeClass, typeLabel, isPlaceholder, description }: SlotProps) {
  const speaker = speakerId ? speakersMap[speakerId] : null
  return (
    <>
      <span className={`${s.talkType} ${typeClass}`}>{typeLabel}</span>
      <p className={`${s.talkTitle}${isPlaceholder ? ' ' + s.talkTitlePh : ''}`}>{title}</p>
      {description && (
        <p style={{ fontFamily: 'var(--mono)', fontSize: '.62rem', color: 'var(--w45)' }}>{description}</p>
      )}
      {speaker && (
        <div className={s.spkRow}>
          <div className={s.spkAvSm}>{speaker.initials}</div>
          <div>
            <p className={s.spkName}>{speaker.name}</p>
            <p className={s.spkRole}>{speaker.role} · {speaker.company}</p>
          </div>
        </div>
      )}
      {!speaker && speakerId === null && title !== '[Título a definir]' && !title.startsWith('[Cerimônia') && (
        <div className={s.spkRow}>
          <div className={s.spkAvSm}>??</div>
          <div>
            <p className={s.spkName}>[A confirmar]</p>
            <p className={s.spkRole}>[Cargo · Empresa]</p>
          </div>
        </div>
      )}
      {speakerId === null && (title === '[Título a definir]' || title.includes('a definir]') || title.includes('alto nível')) && (
        <div className={s.spkRow}>
          <div className={s.spkAvSm}>??</div>
          <div>
            <p className={s.spkName}>[A confirmar]</p>
            <p className={s.spkRole}>[Cargo · Empresa]</p>
          </div>
        </div>
      )}
      <span className={s.dur}>{duration} min</span>
    </>
  )
}

function getBothView() {
  const slots: React.ReactNode[] = []
  const allTimes = [...new Set(agendaData.map((a) => a.time))].sort()

  allTimes.forEach((time) => {
    const entries = agendaData.filter((a) => a.time === time)
    const isAll = entries.every((e) => e.track === 'all')
    const gerEntry = entries.find((e) => e.track === 'gerencial')
    const techEntry = entries.find((e) => e.track === 'tecnica')
    const allEntry = entries.find((e) => e.track === 'all')

    slots.push(
      <div key={time} className={s.slotTime}>{time}</div>
    )

    if (isAll && allEntry) {
      const t = allEntry.type
      const isBreak = t === 'break'
      const typeClass = isBreak ? s.ttBreak : t === 'panel' ? s.ttPanel : s.ttOpen

      if (isBreak) {
        slots.push(
          <div key={`${time}-full`} className={`${s.slotCell} ${s.slotFull} ${s.slotBreak}`} style={{ gridColumn: '2/4' }}>
            <span className={`${s.talkType} ${s.ttBreak}`}>{allEntry.title}</span>
            <span className={s.breakLbl}>{allEntry.duration} min{allEntry.description ? ` · ${allEntry.description}` : ''}</span>
          </div>
        )
      } else {
        slots.push(
          <div key={`${time}-full`} className={`${s.slotCell} ${s.slotFull}`} style={{ gridColumn: '2/4' }}>
            <span className={`${s.talkType} ${typeClass}`}>{t === 'panel' ? 'Painel Principal' : t === 'open' ? (allEntry.title.includes('Abertura') ? 'Abertura Oficial' : 'Encerramento') : allEntry.title}</span>
            <p className={s.talkTitle}>{allEntry.title}</p>
            {allEntry.description && (
              <p style={{ fontFamily: 'var(--mono)', fontSize: '.62rem', color: 'var(--w45)', marginTop: '.4rem' }}>{allEntry.description}</p>
            )}
            <span className={s.dur}>{allEntry.duration} min</span>
          </div>
        )
      }
    } else {
      const isPlaceholderGer = gerEntry ? (gerEntry.title === '[Título a definir]' || gerEntry.speakerId === null) : true
      const isPlaceholderTech = techEntry ? (techEntry.title === '[Título a definir]' || techEntry.speakerId === null) : true

      slots.push(
        <div key={`${time}-ger`} className={`${s.slotCell} ${s.slotGer}`}>
          {gerEntry ? (
            <TalkSlot
              title={gerEntry.title}
              speakerId={gerEntry.speakerId}
              duration={gerEntry.duration}
              typeClass={s.ttGer}
              typeLabel="Gerencial"
              isPlaceholder={isPlaceholderGer}
            />
          ) : <span className={`${s.talkType} ${s.ttBreak}`}>—</span>}
        </div>
      )
      slots.push(
        <div key={`${time}-tech`} className={`${s.slotCell} ${s.slotTech}`}>
          {techEntry ? (
            <TalkSlot
              title={techEntry.title}
              speakerId={techEntry.speakerId}
              duration={techEntry.duration}
              typeClass={s.ttTech}
              typeLabel="Técnica"
              isPlaceholder={isPlaceholderTech}
            />
          ) : <span className={`${s.talkType} ${s.ttBreak}`}>—</span>}
        </div>
      )
    }
  })

  return slots
}

export function AgendaPage() {
  const [trail, setTrail] = useState<Trail>('both')

  const gerEntries = agendaData.filter((a) => a.track === 'gerencial' || a.track === 'all')
  const techEntries = agendaData.filter((a) => a.track === 'tecnica' || a.track === 'all')

  return (
    <>
      <header className={s.pageHdr}>
        <div className={s.pageHdrGlow} aria-hidden="true" />
        <div className={s.container}>
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
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '.65rem', color: 'var(--w45)', letterSpacing: '.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              // Selecione a trilha
            </p>
            <div className={s.trailSwitcher} role="group" aria-label="Seletor de trilha">
              <button
                className={`${s.trailBtn}${trail === 'both' ? ' ' + s.activeGer : ''}`}
                onClick={() => setTrail('both')}
              >
                Ambas as Trilhas
              </button>
              <button
                className={`${s.trailBtn}${trail === 'ger' ? ' ' + s.activeGer : ''}`}
                onClick={() => setTrail('ger')}
              >
                Trilha Gerencial
              </button>
              <button
                className={`${s.trailBtn}${trail === 'tech' ? ' ' + s.activeTech : ''}`}
                onClick={() => setTrail('tech')}
              >
                Trilha Técnica
              </button>
            </div>
          </div>

          <div className={s.legend}>
            <div className={s.legItem}><div className={`${s.legDot} ${s.ldGer}`} /> Trilha Gerencial</div>
            <div className={s.legItem}><div className={`${s.legDot} ${s.ldTech}`} /> Trilha Técnica</div>
            <div className={s.legItem}><div className={`${s.legDot} ${s.ldGen}`} /> Atividade Geral</div>
          </div>

          {/* BOTH */}
          {trail === 'both' && (
            <div className={`${s.schedGrid} ${s.grid2col}`}>
              <div className={`${s.gridHdr} ${s.hdrTime}`}>Horário</div>
              <div className={`${s.gridHdr} ${s.hdrGer}`}>Trilha Gerencial</div>
              <div className={`${s.gridHdr} ${s.hdrTech}`}>Trilha Técnica</div>
              {getBothView()}
            </div>
          )}

          {/* GERENCIAL */}
          {trail === 'ger' && (
            <div className={`${s.schedGrid} ${s.grid1col}`}>
              <div className={`${s.gridHdr} ${s.hdrTime}`}>Horário</div>
              <div className={`${s.gridHdr} ${s.hdrGer}`}>Trilha Gerencial</div>
              {gerEntries.map((entry, i) => (
                <div key={i} style={{ display: 'contents' }}>
                  <div className={s.slotTime}>{entry.time}</div>
                  <div className={`${s.slotCell} ${entry.track === 'all' && entry.type === 'break' ? s.slotBreak : s.slotGer}`}>
                    {entry.type === 'break' ? (
                      <><span className={`${s.talkType} ${s.ttBreak}`}>{entry.title}</span><span className={s.breakLbl}>{entry.duration} min</span></>
                    ) : (
                      <TalkSlot
                        title={entry.title}
                        speakerId={entry.speakerId}
                        duration={entry.duration}
                        typeClass={entry.type === 'panel' ? s.ttPanel : entry.type === 'open' ? s.ttOpen : s.ttGer}
                        typeLabel={entry.type === 'panel' ? 'Painel' : entry.type === 'open' ? (entry.title.includes('Abertura') ? 'Abertura Oficial' : 'Encerramento') : 'Gerencial'}
                        isPlaceholder={entry.title.includes('definir')}
                        description={entry.description}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TECNICA */}
          {trail === 'tech' && (
            <div className={`${s.schedGrid} ${s.grid1col}`}>
              <div className={`${s.gridHdr} ${s.hdrTime}`}>Horário</div>
              <div className={`${s.gridHdr} ${s.hdrTech}`}>Trilha Técnica</div>
              {techEntries.map((entry, i) => (
                <div key={i} style={{ display: 'contents' }}>
                  <div className={s.slotTime}>{entry.time}</div>
                  <div className={`${s.slotCell} ${entry.track === 'all' && entry.type === 'break' ? s.slotBreak : s.slotTech}`}>
                    {entry.type === 'break' ? (
                      <><span className={`${s.talkType} ${s.ttBreak}`}>{entry.title}</span><span className={s.breakLbl}>{entry.duration} min</span></>
                    ) : (
                      <TalkSlot
                        title={entry.title}
                        speakerId={entry.speakerId}
                        duration={entry.duration}
                        typeClass={entry.type === 'panel' ? s.ttPanel : entry.type === 'open' ? s.ttOpen : s.ttTech}
                        typeLabel={entry.type === 'panel' ? 'Painel' : entry.type === 'open' ? (entry.title.includes('Abertura') ? 'Abertura Oficial' : 'Encerramento') : 'Técnica'}
                        isPlaceholder={entry.title.includes('definir')}
                        description={entry.description}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className={s.noteBox}>
            Programação sujeita a alterações · Siga o DunaSec no Instagram e LinkedIn para atualizações
          </div>

          <div className={s.backBtn}>
            <Link to="/" className="btn btn-out">← Voltar para o site</Link>
          </div>
        </div>
      </main>

      <footer>
        <div className={s.footerInner}>
          <p>© 2026 DunaSec · Todos os direitos reservados</p>
          <Link to="/" className="btn btn-out">← Voltar</Link>
        </div>
      </footer>
    </>
  )
}
