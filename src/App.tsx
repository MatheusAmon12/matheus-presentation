import './App.css'
import CarouselProjects from './components/carousel-projects'
import CarouselTechnologies from './components/carousel-technologies'
//import { Button } from './components/ui/button'
import TemplateDefault from './template/default'

function App() {

  return (
    <TemplateDefault>
      <section className='px-6 xl:px-32'>
        <p className='font-serif text-secondary font-bold text-[0.75rem]'>Hello, world! Meu nome é</p>
        <h1 className='font-sans text-white text-[1.5rem] font-bold xl:text-[2.375rem]'>Matheus Ferreira</h1>
        <h2 className='font-serif text-secondary font-bold text-[1.125rem] xl:text-[1.5rem]'>Desenvolvedor Front-End</h2>
        <p className='text-[0.875rem] font-sans text-white max-w-[430px] xl:text-[1rem]'>
          Comprometido em criar experiências digitais memoráveis e funcionais, sou um Desenvolvedor Full Stack | Especializado em Front-End apaixonado pelo que faço e em converter ideias criativas em realidade no desenvolvimento.
          </p>
      </section>

      <CarouselTechnologies height='16'>
        <h2 className='text-center font-serif text-secondary font-bold'>Tecnologias e Ferramentas</h2>
      </CarouselTechnologies>

      <CarouselProjects height='[377px]'>
        <h2 className='text-center font-serif text-secondary font-bold'>Alguns Projetos</h2>
      </CarouselProjects>
    </TemplateDefault>
  )
}

export default App
