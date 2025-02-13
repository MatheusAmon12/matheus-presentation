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
          <h2 className='container text-center font-sans text-white font-bold text-3xl lg:text-4xl mb-10'>Tecnologias e Ferramentas</h2>  
        </CarouselTechnologies>
      </div>

      <div className='w-full bg-[#1a1a1a] relative z-10 py-20'>
        <CarouselProjects height='h-[377px]'>
          <h2 className='container text-center font-sans text-white font-bold text-3xl lg:text-4xl mb-10'>Alguns Projetos</h2>
        </CarouselProjects>
      </div>
    </TemplateDefault>
  )
}

export default App
