import { Link } from 'react-router-dom'
import s from './CodigoDeCondutaPage.module.css'

export function CodigoDeCondutaPage() {
  return (
    <>
      <header className={s.pageHeader}>
        <div className={s.container}>
          <p className={s.eyebrow}>DunaSec 2026</p>
          <h1>Código de <span>Conduta</span></h1>
        </div>
      </header>

      <main>
        <div className={s.container}>

          <div className={s.docSection}>
            <p>
              O DunaSec visa garantir um espaço seguro para trocas de conhecimento através do esforço ativo em busca da pluralidade, inclusão e acolhimento. Para tanto, precisamos ter regras claras para assegurar o respeito por todas as pessoas envolvidas no evento. O Código de Conduta é aplicável para a Organização, Empresas Patrocinadoras, Palestrantes, Participantes, Fornecedores e Apoiadores.
            </p>
          </div>

          <div className={s.docSection}>
            <h2>Por isso</h2>
            <ul>
              <li>Não é tolerado nenhum tipo de assédio, perseguição ou humilhação pública;</li>
              <li>Não é tolerado o descumprimento das leis brasileiras;</li>
              <li>Toda pessoa presente no evento, independente do seu papel, está sujeita a estas regras.</li>
            </ul>
          </div>

          <div className={s.docSection}>
            <h2>Definições</h2>
            <ul>
              <li><strong>Assédio</strong> é a ação de insistir, perseguir ou coagir outra pessoa a um comportamento involuntário.</li>
              <li><strong>Discriminação inapropriada</strong> é o ato de separar, injuriar ou humilhar alguém promovendo sua exclusão por atributo particular da mesma.</li>
              <li><strong>Humilhação pública</strong> é o ato de submeter, rebaixar, ridicularizar ou promover o vexame de outro publicamente.</li>
            </ul>
            <p style={{ marginTop: '1.2rem' }}>
              O público-alvo do evento também inclui crianças e adolescentes, por isso buscamos manter um ambiente apropriado para todas as faixas etárias. Sendo assim, linguagem e imagens sexualizadas não são adequados para palestras e ações promocionais de patrocinadores.
            </p>
          </div>

          <div className={s.docSection}>
            <h2>Como Reportar</h2>
            <p>
              Se você se sentiu assediado(a), perseguido(a) ou humilhado(a), ou presenciou alguma destas atitudes, por favor entre em contato com a organização do evento:
            </p>
            <ul>
              <li>Procure pessoalmente qualquer membro da organização identificado com crachá especial;</li>
              <li>Em breve disponibilizaremos aqui o formulário de reporte da Equipe de Resposta do Código de Conduta.</li>
            </ul>
          </div>

          <div className={s.docSection}>
            <h2>Consequências</h2>
            <p>
              Havendo um relato de violação destes princípios, a organização realizará a devida análise e, quando necessário, tomará as ações para impedir a reincidência. Estas ações podem ir desde uma conversa em busca da retratação até um convite a se retirar do evento por tempo indeterminado.
            </p>
          </div>

        </div>
      </main>

      <footer>
        <div className={s.footerInner}>
          <p>© 2026 DunaSec · <a href="mailto:contact@hekateinc.com">contact@hekateinc.com</a></p>
          <Link to="/" className="btn btn-out">← Voltar para o site</Link>
        </div>
      </footer>
    </>
  )
}
