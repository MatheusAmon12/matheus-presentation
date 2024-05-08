import './App.css'
import CarouselProjects from './components/carousel-projects'
import CarouselTechnologies from './components/carousel-technologies'
//import { Button } from './components/ui/button'
import TemplateDefault from './template/default'

function App() {

  return (
    <TemplateDefault>
      <section className='py-6 pl-6 max-w-[80vw] xl:pl-32 xl:max-w-[50vw]'>
        <p className='font-serif text-secondary font-bold text-[0.75rem]'>
          Hello, world! Meu nome é
        </p>

        <h1 className='font-sans text-white text-[1.5rem] font-bold xl:text-[2.375rem]'>
          Matheus Ferreira
        </h1>

        <h2 className='font-serif text-secondary font-bold text-[1.125rem] xl:text-[1.5rem]'>
          Desenvolvedor Front-End
        </h2>

        <p className='text-[0.75rem] font-sans text-white xl:text-[1rem]'>
          Comprometido em criar experiências digitais memoráveis e funcionais, sou um Desenvolvedor Full Stack | Especializado em Front-End apaixonado pelo que faço e em converter ideias criativas em realidade no desenvolvimento.
        </p>

        <details className='text-[0.875rem] font-sans text-secondary xl:text-[1rem] pt-6'>
          <summary>Mais sobre mim</summary>
          <p className='text-white'>
            Eu tenho 23 anos, me formei com técnico em informática em 2019, meu primeiro contato com um mundo do desenvolvimento. Nesse momento eu descobri o que eu queria seguir, pois simplesmente amo a programação.<br/><br/>Desde então busco me desenvolver cada dia mais como desenvolvedor, o curso mais importante para mim foi a Formação Full Stack JavaScript, pois tive contato com tecnologias incríveis que mostraram o quão grande era o universo da programação. Realizei outros cursos pela plataforma do Curso em Vídeo, imersões da Alura e Bootcamp MultiCloud. <br/><br/>Atualmente o meu foco é o Front-End e para abrangir meus conhecimentos me profissionalizei como Designer especialista em Figma. Isso me permitiu desenvolver projetos onde fui responsável desde a interface (UI) até a implementação, deploy e hospedagme. Meu objetivo é conseguir minha primeira oportunidade e daqui 4 anos anos chegar ao nível sênior
          </p>
        </details>
      </section>

      <CarouselTechnologies height='h-16'>
        <h2 className='text-center font-serif text-secondary font-bold'>Tecnologias e Ferramentas</h2>
      </CarouselTechnologies>

      <CarouselProjects height='h-[377px]'>
        <h2 className='text-center font-serif text-secondary font-bold'>Alguns Projetos</h2>
      </CarouselProjects>
    </TemplateDefault>
  )
}

export default App
