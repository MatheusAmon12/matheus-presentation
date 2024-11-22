import { TechIconsList } from "@/_constants/tech-icons-list";
import { ReactNode } from "react";

interface CarouselTechnologiesProps {
    children: ReactNode,
}

const CarouselTechnologies = ({children}: CarouselTechnologiesProps) => {
    return ( 
        <div className="pt-10 xl:px-32">
            {children}
            <div className="w-full flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden py-6 px-16 xl:grid xl:grid-rows-4 xl:grid-flow-col xl:justify-items-center xl:py-6">
                {
                    TechIconsList.map((image, index) => (
                        <img key={index} src={image.imageUrl} alt={image.alt} className="size-20" />
                    ))
                }
            </div>

        </div>
     );
}
 
export default CarouselTechnologies;