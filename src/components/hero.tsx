import ParticlesHeroBackground from "./particles-hero-background";

const Hero = () => {
    return ( 
        <section className='w-full flex justify-center items-center flex-1'>
            <ParticlesHeroBackground />
            <div className="lg:w-1/2 text-center relative z-10">
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
 
export default Hero;