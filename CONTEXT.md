# DunaSec 2026 — Contexto para continuação no Claude Code

## O projeto
Site estático (HTML/CSS/JS puro, sem frameworks) para o **DunaSec 2026**, primeiro evento de cibersegurança do Nordeste.

- **Data:** 30 de maio de 2026
- **Local:** Natal, RN (endereço a definir)
- **Participantes:** ~250
- **Organização:** Fernando Guisso · Grupo Lune · Hekate
- **Contato:** contact@hekateinc.com

---

## Arquivos entregues

| Arquivo | Descrição |
|---|---|
| `index.html` | Página principal (~1.2MB, assets em base64) |
| `agenda.html` | Página de agenda com trilha switcher |
| `codigo-de-conduta.html` | Código de conduta do evento |
| `assets/` | Todos os assets originais (PNG + base64) |

---

## Paleta de cores — IDV FIEL (não inventar cores novas)

```css
--bk:  #000000   /* fundo principal */
--bk2: #080808   /* fundo seções alternadas */
--bk3: #111111   /* cards, inputs */
--bk4: #181818   /* FAQ aberto */
--red: #FF0040   /* cor principal — acentos, botões, bordas */
--cyn: #00FFFF   /* APENAS circuitos e badge Trilha Técnica */
--vlt: #5500FF   /* APENAS glow de fundo no hero */
--wh:  #FFFFFF   /* texto principal */
```

**PROIBIDO usar:** laranja, dourado, marrom, areia, bege, verde, rosa, qualquer hex fora da paleta acima.

---

## Tipografia

- **Display/Mono:** Share Tech Mono (Google Fonts) — títulos, labels, botões, código
- **Body:** Exo 2 (Google Fonts) — parágrafos, descrições
- **Regras:** Zero text-shadow, zero filter blur em texto. Glows apenas em elementos de fundo (radial-gradient).

---

## Vocabulário visual (do IDV)

- Fundos: preto puro, sem gradientes coloridos
- Bordas: `1px solid rgba(255,0,64,.25)` ou `var(--red)` no hover
- Clip-path angular: `polygon(8px 0%, 100% 0%, calc(100%-8px) 100%, 0% 100%)` em botões e cards
- Cantos HUD: bordas L-shape vermelhas nos cards visuais
- Circuitos: imagens `circuit_red.png`, `circuit_cyan.png`, `circuit_blue.png` com `opacity: 0.08~0.20`
- Glows de fundo: `radial-gradient` com vermelho em `opacity: 0.10~0.15`, animação `pulse`
- Labels de seção: `// NOME` em mono vermelho + título grande em branco
- Linha decorativa: `width:40px; height:2px; background:var(--red)`

---

## Estrutura de seções (index.html)

1. **#hero** — Logo, DNS, tagline, meta, botões CTA, countdown BRT
2. **#natal** — Seção de turismo de Natal/RN ← **PRECISA DE FOTO REAL**
3. **#sobre** — Sobre o evento + logomarca dunas + stats
4. **#trilhas** — Cards Gerencial (vermelho) e Técnica (ciano)
5. **#palestrantes** — Grid 4 colunas com avatares de iniciais
6. **#localizacao** — Endereço (a definir) + frame do venue
7. **#apoiadores** — Placeholders de logos
8. **#patrocinadores** — Tiers Platina/Ouro/Prata/Bronze + CTA
9. **#caravanas** — Cards de cidades
10. **#voluntarios** — Lista de benefícios + box ∞
11. **#faq** — Accordion acessível
12. **#cta-final** — CTA duplo
13. **footer**

---

## Tarefa pendente mais urgente: Foto de Natal

A seção `#natal` tem um card `.natal-vis` com `.natal-card` que **precisa de uma imagem real** do Morro do Careca / Praia de Ponta Negra / dunas de Natal.

### Como implementar quando tiver a imagem:

```html
<!-- Substituir o .natal-card atual por: -->
<div class="natal-vis rv d2">
  <div class="natal-img-frame">
    <img src="natal-foto.jpg" alt="Morro do Careca, Natal RN">
    <div class="hud tl"></div>
    <div class="hud tr"></div>
    <div class="hud bl"></div>
    <div class="hud br"></div>
    <span class="natal-coord">Morro do Careca · Natal RN</span>
  </div>
</div>
```

```css
.natal-img-frame {
  position: relative;
  border: 1px solid rgba(255,0,64,.25);
  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px));
  overflow: hidden;
}
.natal-img-frame img {
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  /* overlay escuro para manter paleta IDV */
  filter: brightness(0.75) saturate(0.6);
}
/* Para converter para tons vermelhos/pretos da paleta: */
.natal-img-frame::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0,0,0,.2) 0%,
    rgba(255,0,64,.08) 50%,
    rgba(0,0,0,.5) 100%
  );
  pointer-events: none;
}
```

---

## Conteúdo placeholder (a substituir)

| Campo | Status |
|---|---|
| Endereço do venue | `[ENDEREÇO A DEFINIR]` |
| Link Sympla | `https://sympla.com.br` (placeholder) |
| Fotos dos palestrantes | Iniciais (AK, CN, CL, AC) |
| Logos patrocinadores/apoiadores | Boxes vazios |
| Links Instagram/LinkedIn | Placeholder |
| Títulos das palestras | `[Título a definir]` na agenda |
| Foto de Natal | Card de texto temporário |

---

## Palestrantes confirmados

| Iniciais | Nome | Cargo | Empresa | Trilha |
|---|---|---|---|---|
| AK | Allan Kardec | Tech Leader AppSec | Hakai Security | Técnica |
| CN | Clara Nobre | Cloud Security Architect | PicPay | Técnica |
| CL | Caio Luders | Security Researcher | Independent | Técnica |
| AC | Anderson Cirilo | Threat Intel Analyst | Mercado Livre | Técnica |

---

## Tiers de patrocínio

| Tier | Valor | Cor no site |
|---|---|---|
| Platina | R$ 15.000 | Branco (`#fff`) |
| Ouro | R$ 10.000 | Vermelho (`#FF0040`) |
| Prata | R$ 6.000 | Ciano (`#00FFFF`) |
| Bronze | R$ 3.000 | Branco 45% (`rgba(255,255,255,.45)`) |

---

## Assets disponíveis em `assets/`

```
logo_branco.png       — Logotipo horizontal branco (navbar, hero, footer)
logo_branco.b64       — Mesmo em base64
logo_mark_branco.png  — Logomarca das dunas (círculo), branco
logo_mark_branco.b64  — Mesmo em base64
logo_mark_preto.png   — Logomarca das dunas, preto
dns_branco.png        — Sigla "dns" branco
dns_branco.b64        — Mesmo em base64
dns_preto.png         — Sigla "dns" preto
circuit_red.png       — Circuito vermelho (hero direita, trilha gerencial)
circuit_red.b64
circuit_red_flip.png  — Circuito vermelho espelhado (hero esquerda)
circuit_red_flip.b64
circuit_cyan.png      — Circuito ciano (trilha técnica, seção natal)
circuit_cyan.b64
circuit_blue.png      — Circuito violeta/azul (disponível)
circuit_blue.b64
```

---

## Comandos úteis no Claude Code

```bash
# Servir localmente para visualizar
npx serve .
# ou
python3 -m http.server 8080

# Para embedar nova imagem em base64
python3 -c "
import base64
with open('natal.jpg','rb') as f:
    b64 = base64.b64encode(f.read()).decode()
print(f'data:image/jpeg;base64,{b64[:50]}...')
" 

# Para verificar tamanho do HTML final
wc -c index.html
```

---

## Decisões de design tomadas

- **Sem text-shadow ou filter em texto** — apenas glows em elementos de fundo
- **Sem emojis como elemento visual** — substituídos por `→`, `—`, `+` em monospace
- **Contador no footer removido** — apenas no hero
- **"Corporativo" → "Gerencial"** em todo o site
- **Prata: R$ 6.000** (corrigido do PDF oficial; não R$ 7.000)
- **Botão patrocinador** = mesmo estilo vermelho/outline da paleta, sem laranja
- **Seção Natal** vem logo após o hero (2ª posição)
