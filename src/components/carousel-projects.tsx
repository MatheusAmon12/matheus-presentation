import { ReactNode } from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

interface CarouselProjectsProps {
    height: string,
    children: ReactNode,
}

const CarouselProjects = ({height, children}: CarouselProjectsProps) => {
    return ( 
        <div className="pt-10 text-center">
            {children}
            <div className="w-full flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden pt-6 px-16 xl:justify-center">
                <img className={`h-${height}`} src="/bookings-project.png" alt="Projeto Bookings" />

                <img className={`h-${height}`} src="/delivery-project.png" alt="Projeto Delivery" />

                <img className={`h-${height}`} src="/todo-project.png" alt="Projeto To Do List" />
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