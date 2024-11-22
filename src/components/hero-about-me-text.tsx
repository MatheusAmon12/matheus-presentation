const HeroAboutMeText = () => {
    return ( 
        <section className='w-full lg:w-1/2'>
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

            <details className='text-[0.875rem] font-sans text-secondary xl:text-[1rem] pt-6 cursor-pointer'>
                <summary>Mais sobre mim</summary>
                <p className='text-white'>
                Eu tenho 24 anos, me formei com técnico em informática em 2019, meu primeiro contato com um mundo do desenvolvimento. Nesse momento eu descobri o que eu queria seguir, pois simplesmente amo a programação.<br/><br/>Desde então busco evoluir cada dia mais como desenvolvedor, uma grande conquista foi a Formação Full Stack JavaScript, pois tive contato com tecnologias incríveis que mostraram o quão grande era o universo da programação. Conquistei outras certificações pela plataforma do Curso em Vídeo, Alura ADA Tech. <br/><br/>Atualmente o meu foco é o Front-End e para abrangir meus conhecimentos me profissionalizei como Designer especialista em Figma. Isso me permitiu desenvolver projetos onde fui responsável desde a interface até a implementação. Meu objetivo é conseguir minha primeira oportunidade e chegar ao nível pleno nos próximos 2 anos.
                </p>
            </details>
        </section>
     );
}
 
export default HeroAboutMeText;