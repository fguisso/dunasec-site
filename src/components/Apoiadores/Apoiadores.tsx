import supportersData from '../../data/supporters.json'
import { useReveal } from '../../hooks/useReveal'
import s from './Apoiadores.module.css'

type Supporter = { name: string; logo?: string; url?: string | null; bg?: string | null }

const bgClass: Record<string, string> = { white: s.bgWhite, black: s.bgBlack }

export function Apoiadores() {
  const ref = useReveal()

  return (
    <section id="apoiadores" ref={ref}>
      <div className="ctr">
        <div className="rv" style={{ marginBottom: '1.8rem' }}>
          <p className="ey">Parceiros</p>
          <h2 className="t"><b>Apoiadores</b></h2>
          <div className="rule" />
        </div>

        {supportersData.items.length > 0 ? (
          <div className={`${s.lrow} rv`}>
            {supportersData.items.map((item: Supporter, i: number) => {
              const cls = `${s.lph} ${s.lm} ${item.bg ? bgClass[item.bg] : ''}`
              const content = item.logo
                ? <img src={item.logo} alt={item.name} className={s.limg} />
                : item.name
              return item.url
                ? <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className={cls} aria-label={item.name}>{content}</a>
                : <div key={i} className={cls} aria-label={item.name}>{content}</div>
            })}
          </div>
        ) : (
          <div className={`${s.lrow} rv`}>
            <div className={`${s.lph} ${s.lm}`}>APOIADOR</div>
            <div className={`${s.lph} ${s.lm}`}>APOIADOR</div>
            <div className={`${s.lph} ${s.lm}`}>APOIADOR</div>
          </div>
        )}

        <div className="rv" style={{ textAlign: 'center' }}>
          <p className={s.ctaText}>Quer apoiar o DunaSec?</p>
          <a href="https://forms.gle/pxC9GMMMMgP7LreZA" target="_blank" rel="noopener" className="btn btn-out">Seja um Apoiador</a>
        </div>
      </div>
    </section>
  )
}
