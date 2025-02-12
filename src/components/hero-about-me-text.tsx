import ParticlesHeroBackground from "./particles-hero-background";

const HeroAboutMeText = () => {
    return ( 
        <section className='w-full h-screen'>
            <ParticlesHeroBackground />
            <div className="lg:w-1/2 text-center my-40 lg:my-56 container relative z-10">
                <p className='font-serif text-secondary font-bold text-base lg:text-lg'>
                    Hello, world!
                </p>
                <h1 className='mt-4 text-3xl md:text-4xl font-black text-white'>
                    Transformo ideias em código escalável e experiências impactantes.
                </h1>
            </div>
        </section>
     );
}
 
export default HeroAboutMeText;