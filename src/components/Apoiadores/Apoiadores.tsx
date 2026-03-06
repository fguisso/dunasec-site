import supportersData from '../../data/supporters.json'
import { useReveal } from '../../hooks/useReveal'
import s from './Apoiadores.module.css'

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
            {supportersData.items.map((item: { name: string }, i: number) => (
              <div key={i} className={`${s.lph} ${s.lm}`}>{item.name}</div>
            ))}
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
