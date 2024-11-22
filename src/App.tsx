import CarouselProjects from './components/carousel-projects'
import CarouselTechnologies from './components/carousel-technologies'
import HeroAboutMeText from './components/hero-about-me-text'
import TemplateDefault from './template/default'

function App() {

  return (
    <TemplateDefault>
      <div className='flex flex-wrap items-center justify-between mt-10'>
        <HeroAboutMeText />
        <div className=''>
          <img src="/perfil.webp" alt="Matheus Amon dos S Ferreira" loading='lazy' />
        </div>
      </div>

      <CarouselTechnologies height='h-16'>
        <h2 className='text-center font-serif text-secondary font-bold text-lg xl:text-3xl'>Tecnologias e Ferramentas</h2>
      </CarouselTechnologies>

      <CarouselProjects height='h-[377px]'>
        <h2 className='text-center font-serif text-secondary font-bold text-lg xl:text-3xl'>Alguns Projetos</h2>
      </CarouselProjects>
    </TemplateDefault>
  )
}

export default App
