import selfPhoto from "../../public/perfil.webp"

const AboutMe = () => {
    return ( 
        <section className="flex flex-col items-center justify-center lg:flex-row gap-8
         container py-20 lg:px-48">
            <div className="lg:w-1/2">
                <img src={selfPhoto} alt="Matheus Amon dos S Ferreira" className="object-cover rounded-lg shadow-lg" />
            </div>
            <div className="lg:w-1/2">
                <h1 className="text-white font-serif text-lg">Sobre mim</h1>
                <h2 className="text-white font-sans text-4xl font-bold mt-2">Matheus Amon dos S Ferreira</h2>
                <h2 className="text-blue-600 font-serif text-xl mb-4">Fullstack Developer</h2>
                <p className="text-white text-sm font-sans">
                    Sou estudante de Análise e Desenvolvimento de Sistemas, com formação técnica em informática e três anos de experiência em desenvolvimento web. Destaco meu trabalho para a empresa Humanizar, onde, aplicando boas práticas de SEO, acessibilidade e performance, desenvolvi landing pages que aumentaram a captação de leads em mais de 50%.
                    <br/><br/>
                    Atuei como Desenvolvedor Front-End Jr na comunidade voluntária Front-End Fusion, onde fui promovido a Fullstack Jr e reconhecido como Desenvolvedor Fullstack Destaque. Contribuí na implementação de um sistema de envio de e-mails e no desenvolvimento da interface do formulário de cadastro.
                    <br/><br/>
                    Atualmente, sou estagiário Front-End na Vidya Code, onde sigo evoluindo tecnicamente. Meu objetivo é alcançar o nível júnior e crescer até a senioridade.
                </p>
            </div>
        </section>
     );
}
 
export default AboutMe;