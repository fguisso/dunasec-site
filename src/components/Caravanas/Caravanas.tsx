import { useReveal } from '../../hooks/useReveal'
import s from './Caravanas.module.css'

const cities = [
  { name: 'João Pessoa, PB', info: '185 km · aprox. 2h de viagem', icon: '→' },
  { name: 'Fortaleza, CE', info: '540 km · voo disponível', icon: '→' },
  { name: 'Recife, PE', info: '300 km · aprox. 3h de viagem', icon: '→' },
  { name: 'Mossoró, RN', info: '280 km · aprox. 3h de viagem', icon: '→' },
  { name: 'Outra cidade?', info: 'Entre em contato para organizar', icon: '+' },
]

export function Caravanas() {
  const ref = useReveal()

  return (
    <section id="caravanas" ref={ref}>
      <div className="ctr">
        <div className={s.carG}>
          <div className={s.carT}>
            <div className="rv">
              <p className="ey">Logística</p>
              <h2 className="t">Venha de <b>Caravana</b></h2>
              <div className="rule" />
            </div>
            <p className="rv d1" style={{ marginTop: '1.6rem' }}>
              Está em outra cidade do Nordeste e quer vir ao DunaSec com sua galera? Estamos organizando caravanas de diversas cidades da região.
            </p>
            <p className="rv d2">
              Inscreva-se no grupo da sua cidade e venha junto com outros profissionais e estudantes de cibersegurança.
            </p>
            <div className="rv d3" style={{ marginTop: '1.6rem' }}>
              <a href="https://forms.gle/dhybHr7LmwUWMWr57" target="_blank" rel="noopener" className="btn btn-out">
                Quero organizar uma caravana
              </a>
            </div>
          </div>

          <div className={`${s.carCards} rv`}>
            {cities.map((city) => (
              <article key={city.name} className={s.carCard}>
                <span className={s.carIco}>{city.icon}</span>
                <div>
                  <h4>{city.name}</h4>
                  <p>{city.info}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
