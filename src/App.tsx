import TemplateDefault from './template/default'
import Hero from './components/hero'
import AboutMe from './components/about-me'
import CarouselTechnologies from './components/carousel-technologies'
import CarouselProjects from './components/carousel-projects'

function App() {

  return (
    <TemplateDefault>
      <div className='flex flex-col justify-center items-center'>
        <Hero />
      </div>

      <div className='w-full bg-slate-900 relative z-10 py-20'>
        <AboutMe />
      </div>

      <div className='w-full bg-[#1a1a1a] relative z-10 py-20'>
        <CarouselTechnologies>
          <h2 className='container text-center font-sans text-white font-bold text-3xl xl:text-3xl mb-10'>Tecnologias e Ferramentas</h2>  
        </CarouselTechnologies>
      </div>

      <CarouselProjects height='h-[377px]'>
        <h2 className='text-center font-serif text-secondary font-bold text-lg xl:text-3xl'>Alguns Projetos</h2>
      </CarouselProjects>
    </TemplateDefault>
  )
}

export default App
