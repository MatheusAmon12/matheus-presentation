import './App.css'
//import { Button } from './components/ui/button'
import TemplateDefault from './template/default'

function App() {

  return (
    <TemplateDefault>
      <section>
        <p className='font-serif text-secondary font-bold text-[12px]'>Hello, world! Meu nome é</p>
        <h1 className='font-sans text-white text-[24px] font-bold'>Matheus Ferreira</h1>
        <h2 className='font-serif text-secondary font-bold text-[18px]'>Desenvolvedor Front-End</h2>
        <p className='text-[14px] font-sans text-white'>
          Comprometido em criar experiências digitais memoráveis e funcionais, sou um Desenvolvedor Full Stack | Especializado em Front-End apaixonado pelo que faço e em converter ideias criativas em realidade no desenvolvimento.
          </p>
      </section>
    </TemplateDefault>
  )
}

export default App
