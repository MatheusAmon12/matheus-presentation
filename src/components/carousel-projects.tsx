import { ReactNode } from "react";

interface CarouselProjectsProps {
    height: string,
    children: ReactNode,
}

const CarouselProjects = ({height, children}: CarouselProjectsProps) => {
    return ( 
        <div className="pt-10">
            {children}
            <div className="w-full flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden pt-6 px-16">
                <img className={`h-${height}`} src="/bookings-project.png" alt="Projeto Bookings" />

                <img className={`h-${height}`} src="/delivery-project.png" alt="Projeto Delivery" />

                <img className={`h-${height}`} src="/todo-project.png" alt="Projeto To Do List" />
            </div>

        </div>
     );
}
 
export default CarouselProjects;