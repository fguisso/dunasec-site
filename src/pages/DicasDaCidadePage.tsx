import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import tipsData from '../data/city-tips.json'
import s from './DicasDaCidadePage.module.css'

interface Place {
  name: string
  description: string
  distance: string
  address: string
  phone?: string
  hours: string[]
  mapsUrl: string
  highlights?: string[]
}

interface Category {
  id: string
  title: string
  places: Place[]
}

const categories = tipsData as Category[]

const bannerImages: Record<string, string> = {
  'restaurantes': 'https://images.unsplash.com/photo-1515898034510-821b204966e4?auto=format&w=1200&q=80',
  'pontos-turisticos': 'https://images.unsplash.com/photo-1515897613818-e70a91564e58?auto=format&w=1200&q=80',
  'praias': 'https://images.unsplash.com/photo-1515898958569-d1a4efff1384?auto=format&w=1200&q=80',
  'lagoas': 'https://images.unsplash.com/photo-1515898698999-18f625d67499?auto=format&w=1200&q=80',
}

function PlaceCard({ place }: { place: Place }) {
  return (
    <div className={s.card}>
      <h3 className={s.cardName}>{place.name}</h3>
      <div className={s.distBadge}>{place.distance} do Hotel Barreira Roxa</div>

      {place.highlights && place.highlights.length > 0 && (
        <div className={s.highlights}>
          {place.highlights.map((h, i) => (
            <div key={i} className={s.highlight}>{h}</div>
          ))}
        </div>
      )}

      <p className={s.cardDesc}>{place.description}</p>

      <div className={s.cardMeta}>
        <div className={s.metaRow}>
          <span className={s.metaLabel}>Endereço</span>
          <span className={s.metaValue}>{place.address}</span>
        </div>
        {place.phone && (
          <div className={s.metaRow}>
            <span className={s.metaLabel}>Telefone</span>
            <span className={s.metaValue}>{place.phone}</span>
          </div>
        )}
        <div className={s.metaRow}>
          <span className={s.metaLabel}>Horário</span>
          <ul className={s.hours}>
            {place.hours.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </div>
      </div>

      <a
        href={place.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={s.mapsLink}
      >
        Ver no Google Maps
      </a>
    </div>
  )
}

export function DicasDaCidadePage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  const scrollToSection = (id: string) => {
    setActiveFilter(id)
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const displayed = activeFilter
    ? categories.filter(c => c.id === activeFilter)
    : categories

  return (
    <>
      <header className={s.pageHdr}>
        <div className={s.pageHdrGlow} aria-hidden="true" />
        <div className={s.container}>
          <p className={s.kicker}>// Guia do Participante</p>
          <h1>Dicas da <span>Cidade</span></h1>
          <p className={s.subtitle}>Distâncias calculadas a partir do Hotel Barreira Roxa (local do evento)</p>
        </div>
      </header>

      <main>
        <div className={s.container}>
          <div className={s.featured}>
            <img
              src="/buggy-duna.png"
              alt="Buggy nas dunas de Natal"
              className={s.featuredImg}
              loading="lazy"
            />
            <div className={s.featuredBody}>
              <span className={s.featuredBadge}>Bugueiro Oficial do Evento</span>
              <h2 className={s.featuredTitle}>Passeio de Buggy</h2>
              <p className={s.featuredDesc}>
                Conheça as praias e dunas de Natal com o bugueiro oficial do DunaSec.
              </p>
              <div className={s.highlights}>
                <div className={s.highlight}>Diga que foi indicação do Fernando da TI</div>
              </div>
              <div className={s.featuredActions}>
                <a
                  href="https://wa.me/5584981134822?text=Ol%C3%A1!%20Vim%20pelo%20DunaSec%2C%20indica%C3%A7%C3%A3o%20do%20Fernando.%20Gostaria%20de%20saber%20sobre%20o%20passeio%20de%20buggy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.featuredBtn}
                >
                  WhatsApp: (84) 98113-4822
                </a>
                <a
                  href="https://www.instagram.com/jandaira_bugueiro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.featuredBtnOut}
                >
                  @jandaira_bugueiro
                </a>
              </div>
            </div>
          </div>

          <nav className={s.catNav}>
            <button
              className={`${s.catBtn} ${activeFilter === null ? s.catBtnActive : ''}`}
              onClick={() => setActiveFilter(null)}
            >
              Todos
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`${s.catBtn} ${activeFilter === cat.id ? s.catBtnActive : ''}`}
                onClick={() => scrollToSection(cat.id)}
              >
                {cat.title}
              </button>
            ))}
          </nav>

          {displayed.map(cat => (
            <section
              key={cat.id}
              className={s.catSection}
              ref={el => { sectionRefs.current[cat.id] = el }}
            >
              {bannerImages[cat.id] && (
                <img
                  src={bannerImages[cat.id]}
                  alt={`Natal RN - ${cat.title}`}
                  className={s.catBanner}
                  loading="lazy"
                />
              )}
              <h2 className={s.catTitle}>{cat.title}</h2>
              <div className={s.grid}>
                {cat.places.map(place => (
                  <PlaceCard key={place.name} place={place} />
                ))}
              </div>
            </section>
          ))}

          <div className={s.noteBox}>
            Informações sujeitas a alterações. Confirme horários e disponibilidade diretamente com os estabelecimentos.
            <br />
            Fotos: Unsplash (licença livre)
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
