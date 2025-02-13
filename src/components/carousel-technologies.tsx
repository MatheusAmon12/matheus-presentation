import { TechIconsList } from "@/_constants/tech-icons-list";
import { ReactNode } from "react";

interface CarouselTechnologiesProps {
    children: ReactNode,
}

const CarouselTechnologies = ({children}: CarouselTechnologiesProps) => {
    return ( 
        <div className="lg:container pt-10 xl:px-32">
            {children}
            <div className="w-full flex flex-row md:flex-wrap md:items-center md:justify-center gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden py-6 px-16">
                {
                    TechIconsList.map((image, index) => (
                        <div key={index} className="flex flex-row items-center justify-center gap-2 rounded-full border-2 border-blue-600 min-w-40 lg:min-w-60 py-4">
                            <img src={image.imageUrl} alt={image.alt} className="size-8" />
                            <span className="text-base text-white font-sans">{image.alt}</span>
                        </div>
                    ))
                }
            </div>

        </div>
     );
}
 
export default CarouselTechnologies;