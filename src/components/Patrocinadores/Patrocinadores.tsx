import sponsorsData from '../../data/sponsors.json'
import { useReveal } from '../../hooks/useReveal'
import s from './Patrocinadores.module.css'

const sizeMap: Record<string, string> = {
  platina: s.lg,
  ouro: s.lm,
  prata: s.ls,
  bronze: s.lx,
}

const colorMap: Record<string, { nm: string; ln: string }> = {
  platina: { nm: s.tp, ln: s.tlp },
  ouro: { nm: s.tr2, ln: s.tlr },
  prata: { nm: s.tc2, ln: s.tlc },
  bronze: { nm: s.tg, ln: s.tlg },
}

export function Patrocinadores() {
  const ref = useReveal()

  return (
    <section id="patrocinadores" ref={ref}>
      <div className="ctr">
        <div className="rv" style={{ marginBottom: '2.4rem' }}>
          <p className="ey">Marcas parceiras</p>
          <h2 className="t"><b>Patrocinadores</b></h2>
          <div className="rule" />
        </div>

        {sponsorsData.filter((tier) => tier.items.length > 0).map((tier) => {
          const colors = colorMap[tier.tier]
          const size = sizeMap[tier.tier]
          return (
            <div key={tier.tier} className={`${s.tier} rv`}>
              <div className={s.tierHdr}>
                <span className={`${s.tierNm} ${colors.nm}`}>{tier.label}</span>
                <div className={`${s.tierLn} ${colors.ln}`} />
              </div>
              <div className={s.lrow}>
                {tier.items.map((item: { name: string; logo?: string; url?: string }, i: number) =>
                  item.url ? (
                    <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className={`${s.lph} ${size}`}>
                      {item.logo ? <img src={item.logo} alt={item.name} className={s.limg} loading="lazy" /> : item.name}
                    </a>
                  ) : (
                    <div key={i} className={`${s.lph} ${size}`}>
                      {item.logo ? <img src={item.logo} alt={item.name} className={s.limg} loading="lazy" /> : item.name}
                    </div>
                  )
                )}
              </div>
            </div>
          )
        })}

        <div className={`${s.patCta} rv`}>
          <h3>
            Traga sua marca para <b>nosso evento</b>
          </h3>
          <p>Conecte-se com 250+ profissionais de TI, C-levels e decisores de segurança digital.</p>
          <a href="https://forms.gle/C8ceUqPmbshzd22SA" target="_blank" rel="noopener" className="btn btn-red btn-lg">
            Quero ser Patrocinador
          </a>
        </div>
      </div>
    </section>
  )
}
