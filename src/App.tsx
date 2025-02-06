import CarouselProjects from './components/carousel-projects'
import CarouselTechnologies from './components/carousel-technologies'
import HeroAboutMeText from './components/hero-about-me-text'
import TemplateDefault from './template/default'

function App() {

  return (
    <TemplateDefault>
      <div className='flex flex-col md:flex-row items-center mt-10 gap-10'>
        <HeroAboutMeText />
        <div className='md:w-1/2'>
          <img src="/perfil.webp" alt="Matheus Amon dos S Ferreira" loading='lazy' className='w-full' />
        </div>
      </div>

      <div className='mt-12'>
        <CarouselTechnologies>
          <h2 className='text-center font-serif text-secondary font-bold text-lg xl:text-3xl'>Tecnologias e Ferramentas</h2>
        </CarouselTechnologies>
      </div>

      <CarouselProjects height='h-[377px]'>
        <h2 className='text-center font-serif text-secondary font-bold text-lg xl:text-3xl'>Alguns Projetos</h2>
      </CarouselProjects>
    </TemplateDefault>
  )
}

export default App
