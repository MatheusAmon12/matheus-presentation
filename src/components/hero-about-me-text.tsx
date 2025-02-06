const HeroAboutMeText = () => {
    return ( 
        <section className='w-full md:w-1/2'>
            <p className='font-serif text-secondary font-bold text-[0.75rem]'>
                Hello, world! Meu nome é
            </p>

            <h2 className='font-sans text-white text-[1.5rem] font-bold xl:text-[2.375rem]'>
                Matheus Ferreira
            </h2>

            <h2 className='font-serif text-secondary font-bold text-[1.125rem] xl:text-[1.5rem]'>
                Desenvolvedor Fullstack
            </h2>

            <h1 className='mt-4 text-3xl md:text-4xl font-black text-white'>
                Transformo ideias em código escalável e experiências impactantes
            </h1>
        </section>
     );
}
 
export default HeroAboutMeText;