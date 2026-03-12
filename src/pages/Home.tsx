import { Hero } from '../components/Hero/Hero'
import { Natal } from '../components/Natal/Natal'
import { Sobre } from '../components/Sobre/Sobre'
import { Trilhas } from '../components/Trilhas/Trilhas'
import { Speakers } from '../components/Speakers/Speakers'
import { Apoiadores } from '../components/Apoiadores/Apoiadores'
import { Patrocinadores } from '../components/Patrocinadores/Patrocinadores'
import { Caravanas } from '../components/Caravanas/Caravanas'
import { Voluntarios } from '../components/Voluntarios/Voluntarios'
import { CtaFinal } from '../components/CtaFinal/CtaFinal'

export function Home() {
  return (
    <>
      <Hero />
      <Natal />
      <Sobre />
      <Trilhas />
      <Speakers />
      <Patrocinadores />
      <Apoiadores />
      <Caravanas />
      <Voluntarios />
<CtaFinal />
    </>
  )
}
