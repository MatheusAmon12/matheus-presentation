import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine} from "@tsparticles/react";
import {
    type Container,
    type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesHeroBackground = () => {
    const [init, setInit] = useState(false);
    
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        })
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    }

    const options: ISourceOptions = useMemo(() => ({
        particles: {
            number: {
                value: 45,
            },
            move: {
                enable: true,
                speed: 2
            },
            color: {
                value: "#0E57A4",
            },
            links: {
                color: {
                    value: "#0E57A4",
                },
                enable: true,
                opacity: 0.5,
            },
            size: {
                value: { min: 1, max: 5 },
            },
        }
    }), []);


    if (init) {
        return (
            <Particles 
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        )
    }
    return <></>;
}
 
export default ParticlesHeroBackground;