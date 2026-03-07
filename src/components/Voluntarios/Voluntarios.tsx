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
              <a href="https://forms.gle/TbSjKwxmpBQCkqex5" target="_blank" rel="noopener noreferrer" className="btn btn-red">
                Quero ser voluntário
              </a>
            </div>
          </div>

          <div className={`${s.volBox} rv`}>
            <span className={s.volBig}>∞</span>
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
