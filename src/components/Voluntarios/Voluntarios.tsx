import { useReveal } from '../../hooks/useReveal'
import s from './Voluntarios.module.css'

export function Voluntarios() {
  const ref = useReveal()

  return (
    <section id="voluntarios" ref={ref}>
      <div className="ctr">
        <div className={s.volG}>
          <div>
            <div className="rv">
              <p className="ey">Faça parte</p>
              <h2 className="t">Seja <b>Voluntário</b></h2>
              <div className="rule" />
            </div>
            <p className="rv d1" style={{ marginTop: '1.5rem' }}>
              Quer vivenciar o DunaSec por dentro e contribuir para o nosso evento de cibersegurança? Nossos voluntários são peça fundamental.
            </p>
            <ul className={`${s.volUl} rv d2`}>
              <li>Ingresso gratuito para o evento</li>
              <li>Credencial exclusiva de voluntário</li>
              <li>Acesso às áreas restritas</li>
              <li>Networking com palestrantes e patrocinadores</li>
              <li>Certificado de participação</li>
              <li>Camiseta oficial DunaSec 2026</li>
            </ul>
            <div className="rv d3">
              <a href="https://forms.gle/TbSjKwxmpBQCkqex5" target="_blank" rel="noopener" className="btn btn-red">
                Quero ser voluntário
              </a>
            </div>
          </div>

          <div className={`${s.volBox} rv`}>
            <svg className={s.volBig} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
              <path d="m18 15-2-2" />
              <path d="m15 18-2-2" />
            </svg>
            <span className={s.volLbl}>Vagas abertas</span>
            <div className={s.volRoles}>
              Credenciamento · Suporte a Palestrantes<br />
              Organização · Mídia &amp; Redes Sociais<br />
              Suporte Geral ao Evento
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
