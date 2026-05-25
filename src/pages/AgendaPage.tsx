import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import agendaData from '../data/agenda.json'
import speakersData from '../data/speakers.json'
import s from './AgendaPage.module.css'

type Track = 'tecnica' | 'gerencial'

interface Speaker {
  id: string
  name: string
  initials: string
  role: string
  company: string
  track: string
  photo: string
}

interface Entry {
  time: string
  endTime: string
  duration: number
  type: 'general' | 'talk' | 'panel' | 'sponsor'
  title?: string
  description?: string
  track?: Track
  speakerId?: string
  moderatorId?: string
  panelistIds?: string[]
}

const data = agendaData as Entry[]
const speakerMap = Object.fromEntries((speakersData as Speaker[]).map(sp => [sp.id, sp]))

function fmtRange(start: string, end: string) {
  return `${start.replace(':', 'h')} - ${end.replace(':', 'h')}`
}

function SlotContent({ entry, onClick }: { entry: Entry; onClick?: () => void }) {
  const isTech = entry.track === 'tecnica'
  const isPanel = entry.type === 'panel'
  const isSponsor = entry.type === 'sponsor'

  const tagClass = isSponsor ? s.tagSponsor : isTech ? s.tagTech : s.tagGer
  const tagLabel = isPanel ? 'Painel' : isSponsor ? 'Patrocinador' : 'Palestra'

  const speaker = entry.speakerId ? speakerMap[entry.speakerId] : null
  const moderator = entry.moderatorId ? speakerMap[entry.moderatorId] : null
  const panelists = entry.panelistIds?.map(id => speakerMap[id]).filter(Boolean) as Speaker[] | undefined

  const clickable = entry.type === 'talk' || entry.type === 'panel'

  return (
    <div className={clickable ? s.slotClickable : undefined} onClick={clickable ? onClick : undefined}>
      <span className={`${s.tag} ${tagClass}`}>{tagLabel}</span>
      {entry.title ? (
        <p className={s.slotTitle}>{entry.title}</p>
      ) : speaker ? (
        <p className={s.slotTitle}>A confirmar</p>
      ) : !moderator ? (
        <p className={s.slotTitle}>A confirmar</p>
      ) : null}
      {speaker && (
        <div className={s.slotSpeakerRow}>
          {speaker.photo ? (
            <img src={speaker.photo} alt={speaker.name} className={s.slotAvatar} loading="lazy" />
          ) : (
            <span className={s.slotAvatarFallback}>{speaker.initials}</span>
          )}
          <div>
            <p className={s.slotSpeaker}>{speaker.name}</p>
            {(speaker.role || speaker.company) && (
              <p className={s.slotRole}>
                {speaker.role}{speaker.role && speaker.company ? ' · ' : ''}{speaker.company}
              </p>
            )}
          </div>
        </div>
      )}
      {moderator && (
        <p className={s.slotMod}>Mediador: {moderator.name}</p>
      )}
      {panelists && panelists.length > 0 && (
        <p className={s.slotPanelists}>{panelists.map(p => p.name).join(', ')}</p>
      )}
    </div>
  )
}

function Modal({ entry, onClose }: { entry: Entry; onClose: () => void }) {
  const isTech = entry.track === 'tecnica'
  const isPanel = entry.type === 'panel'

  const tagClass = isTech ? s.tagTech : s.tagGer
  const tagLabel = isPanel ? 'Painel' : 'Palestra'
  const trackLabel = isTech ? 'Trilha Técnica' : 'Trilha Gerencial'

  const speaker = entry.speakerId ? speakerMap[entry.speakerId] : null
  const moderator = entry.moderatorId ? speakerMap[entry.moderatorId] : null
  const panelists = entry.panelistIds?.map(id => speakerMap[id]).filter(Boolean) as Speaker[] | undefined

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  return (
    <div className={s.overlay} onClick={onClose}>
      <div className={s.modal} onClick={e => e.stopPropagation()}>
        <button className={s.modalClose} onClick={onClose} aria-label="Fechar">×</button>

        <div className={s.modalHead}>
          <span className={`${s.tag} ${tagClass}`}>{tagLabel}</span>
          <span className={s.modalTrack}>{trackLabel}</span>
          <span className={s.modalTime}>{fmtRange(entry.time, entry.endTime)}</span>
        </div>

        {entry.title && <h2 className={s.modalTitle}>{entry.title}</h2>}

        {speaker && (
          <div className={s.modalSpeaker}>
            {speaker.photo ? (
              <img src={speaker.photo} alt={speaker.name} className={s.modalAvatar} />
            ) : (
              <span className={s.modalAvatarFallback}>{speaker.initials}</span>
            )}
            <div>
              <p className={s.modalName}>{speaker.name}</p>
              {(speaker.role || speaker.company) && (
                <p className={s.modalRole}>
                  {speaker.role}{speaker.role && speaker.company ? ' · ' : ''}{speaker.company}
                </p>
              )}
            </div>
          </div>
        )}

        {isPanel && moderator && (
          <div className={s.modalPanel}>
            <div className={s.modalSpeaker}>
              {moderator.photo ? (
                <img src={moderator.photo} alt={moderator.name} className={s.modalAvatar} />
              ) : (
                <span className={s.modalAvatarFallback}>{moderator.initials}</span>
              )}
              <div>
                <p className={s.modalLabel}>Mediador</p>
                <p className={s.modalName}>{moderator.name}</p>
                {(moderator.role || moderator.company) && (
                  <p className={s.modalRole}>
                    {moderator.role}{moderator.role && moderator.company ? ' · ' : ''}{moderator.company}
                  </p>
                )}
              </div>
            </div>
            {panelists && panelists.length > 0 && (
              <>
                <p className={s.modalLabel} style={{ marginTop: '1rem' }}>Painelistas</p>
                {panelists.map(p => (
                  <div key={p.id} className={s.modalSpeaker}>
                    {p.photo ? (
                      <img src={p.photo} alt={p.name} className={s.modalAvatar} />
                    ) : (
                      <span className={s.modalAvatarFallback}>{p.initials}</span>
                    )}
                    <div>
                      <p className={s.modalName}>{p.name}</p>
                      {(p.role || p.company) && (
                        <p className={s.modalRole}>
                          {p.role}{p.role && p.company ? ' · ' : ''}{p.company}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        )}

        {entry.description && (
          <p className={s.modalDesc}>{entry.description}</p>
        )}
      </div>
    </div>
  )
}

export function AgendaPage() {
  const times = [...new Set(data.map((e) => e.time))].sort()
  const [selected, setSelected] = useState<Entry | null>(null)

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

              if (general && !tech && !ger) {
                const isBreak = general.title === 'Pausa para Almoço' || general.title === 'Pausa' || general.title === 'Credenciamento'
                const tagLabel = isBreak ? 'Intervalo' : 'Atividade Geral'
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

              const refEntry = tech || ger || general
              return (
                <div key={time} className={s.row}>
                  <div className={s.slotTime}>
                    <span className={s.timeStart}>{time.replace(':', 'h')}</span>
                    <span className={s.timeRange}>{fmtRange(refEntry?.time || time, refEntry?.endTime || time)}</span>
                    <span className={s.timeDur}>{refEntry?.duration} min</span>
                  </div>
                  <div className={`${s.slotCell} ${tech ? (tech.type === 'panel' ? s.slotPanel : s.slotTech) : s.slotEmpty}`}>
                    {tech ? (
                      <SlotContent entry={tech} onClick={() => setSelected(tech)} />
                    ) : (
                      <span className={s.emptyMark}>—</span>
                    )}
                  </div>
                  <div className={`${s.slotCell} ${ger ? (ger.type === 'sponsor' ? s.slotSponsor : s.slotGer) : s.slotEmpty}`}>
                    {ger ? (
                      <SlotContent entry={ger} onClick={() => setSelected(ger)} />
                    ) : (
                      <span className={s.emptyMark}>—</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <div className={s.noteBox}>
            Programação sujeita a alterações. Acompanhe o DunaSec no Instagram e LinkedIn para atualizações.
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

      {selected && <Modal entry={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
