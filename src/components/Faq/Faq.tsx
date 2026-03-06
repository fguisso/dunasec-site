import { useState } from 'react'
import { Link } from 'react-router-dom'
import faqData from '../../data/faq.json'
import { useReveal } from '../../hooks/useReveal'
import s from './Faq.module.css'

export function Faq() {
  const ref = useReveal()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" ref={ref}>
      <div className="ctr">
        <div className="rv" style={{ marginBottom: '2.4rem' }}>
          <p className="ey">Dúvidas</p>
          <h2 className="t">Perguntas <b>Frequentes</b></h2>
          <div className="rule" />
        </div>

        <div className={s.faqList}>
          {faqData.map((item, i) => (
            <div key={i} className={`${s.faqItem} rv${openIndex === i ? ' ' + s.open : ''}`}>
              <button
                className={s.faqQ}
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                {item.q}
                <span className={s.faqIco}>+</span>
              </button>
              <div className={s.faqA}>
                {item.q === 'O evento tem código de conduta?' ? (
                  <>
                    Sim. Acesse nosso{' '}
                    <Link to="/codigo-de-conduta">Código de Conduta completo</Link> para mais informações.
                  </>
                ) : item.q === 'Como me tornar patrocinador?' ? (
                  <>
                    Envie um e-mail para{' '}
                    <a href="mailto:contact@hekateinc.com">contact@hekateinc.com</a>.
                    {' '}Tiers disponíveis: Platina (R$ 15.000), Ouro (R$ 10.000), Prata (R$ 6.000) e Bronze (R$ 3.000).
                  </>
                ) : (
                  item.a
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
