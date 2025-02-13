import { ReactNode } from "react";
import { Button } from "./ui/button";
import { FaChevronRight } from "react-icons/fa";
import { ProjectsList } from "@/_constants/projects-list";

interface CarouselProjectsProps {
    height: string,
    children: ReactNode,
}

const CarouselProjects = ({children}: CarouselProjectsProps) => {
    return ( 
        <div className="container text-center">
            {children}
            <div className="flex justify-center items-center flex-col lg:flex-row gap-10 w-full">
                {
                    ProjectsList.map((image, index) => (
                        <a 
                            key={index} 
                            href={image.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex flex-col items-center cursor-pointer"
                        >
                            <img loading="lazy" className= 'hover:scale-105 py-4 object-cover w-96 transition-all ease-in-out duration-300' src={image.imageUrl} alt={image.alt} />
                            <div className="bg-blue-600 px-4 py-2 rounded-full hover:scale-105 transition-all ease-in-out duration-300">
                                <p className="text-base font-serif text-white">
                                    {image.alt}
                                </p>
                            </div>
                        </a>
                    ))
                }
            </div>

            <Button variant="outline" className="text-secondary border-secondary hover:bg-secondary hover:text-white mt-10 space-x-2" asChild>
                <a href="https://www.github.com/MatheusAmon12" target="_blank">
                    <span className="font-serif">Ver todos</span>
                    <FaChevronRight size={16} />
                </a>
            </Button>

        </div>
     );
}
 
export default CarouselProjects;