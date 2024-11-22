import { ReactNode } from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { ProjectsList } from "@/_constants/projects-list";

interface CarouselProjectsProps {
    height: string,
    children: ReactNode,
}

const CarouselProjects = ({children}: CarouselProjectsProps) => {
    return ( 
        <div className="w-full pt-10 text-center">
            {children}
            <div className="flex justify-between items-center flex-col lg:flex-row w-full">
                {
                    ProjectsList.map((image, index) => (
                        <a 
                            key={index} 
                            href={image.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="cursor-pointer"
                        >
                            <img loading="lazy" className= 'hover:scale-105 py-10 object-cover w-96' src={image.imageUrl} alt={image.alt} />
                        </a>
                    ))
                }
            </div>

            <Button variant="outline" className="text-secondary border-secondary hover:bg-secondary hover:text-white mt-6 space-x-2" asChild>
                <a href="https://www.github.com/MatheusAmon12" target="_blank">
                    <span className="font-serif">Ver todos</span>
                    <ChevronRight size={24} />
                </a>
            </Button>

        </div>
     );
}
 
export default CarouselProjects;