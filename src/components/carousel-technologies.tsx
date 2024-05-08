import { ReactNode } from "react";

interface CarouselTechnologiesProps {
    height: string,
    children: ReactNode,
}

const CarouselTechnologies = ({height, children}: CarouselTechnologiesProps) => {
    return ( 
        <div className="pt-10 xl:px-32">
            {children}
            <div className="w-full flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden py-6 px-16 xl:grid xl:grid-rows-4 xl:grid-flow-col xl:justify-items-center xl:py-6">
                <img loading="lazy" className={`${height} hover:scale-125 cursor-pointer hover:animate-pulse`} src="/react-original.svg" alt="React" />

                <img loading="lazy" className={`${height} hover:scale-125 cursor-pointer hover:animate-pulse`} src="/nextjs-original.svg" alt="NextJS" />

                <img loading="lazy" className={`${height} hover:scale-125 cursor-pointer hover:animate-pulse`} src="/javascript-original.svg" alt="JavaScript" />

                <img loading="lazy" className={`${height} hover:scale-125 cursor-pointer hover:animate-pulse`} src="/typescript-original.svg" alt="Typescript" />

                <img loading="lazy" className={`${height} hover:scale-125 cursor-pointer hover:animate-pulse`} src="/nodejs-original.svg" alt="NodeJS" />

                <img loading="lazy" className={`${height} hover:scale-125 cursor-pointer hover:animate-pulse`} src="/redux-original.svg" alt="Redux" />

                <img loading="lazy" className={`${height} hover:scale-125 cursor-pointer hover:animate-pulse`} src="/html5-original.svg" alt="HTML5" />

                <img loading="lazy" className={`${height} hover:scale-125 cursor-pointer hover:animate-pulse`} src="/css3-original.svg" alt="CSS3" />

                <img loading="lazy" className={`${height} hover:scale-125 cursor-pointer hover:animate-pulse`} src="/figma-original.svg" alt="Figma" />

                <img loading="lazy" className={`${height} hover:scale-125 cursor-pointer hover:animate-pulse`} src="/sass-original.svg" alt="Sass" />

                <img loading="lazy" className={`${height} hover:scale-125 cursor-pointer hover:animate-pulse`} src="/npm-original.svg" alt="NPM" />

                <img loading="lazy" className={`${height} hover:scale-125 cursor-pointer hover:animate-pulse`} src="/jest-plain.svg" alt="Jest" />

                <img loading="lazy" className={`${height} hover:scale-125 cursor-pointer hover:animate-pulse`} src="/mongodb-original.svg" alt="MongoDB" />

                <img loading="lazy" className={`${height} hover:scale-125 cursor-pointer hover:animate-pulse`} src="/postgresql-original.svg" alt="PostgreSQL" />

                <img loading="lazy" className={`${height} hover:scale-125 cursor-pointer hover:animate-pulse`} src="/materialui-original.svg" alt="Material UI" />

                <img loading="lazy" className={`${height} hover:scale-125 cursor-pointer hover:animate-pulse`} src="/bash-original.svg" alt="Git Bash" />

                <img loading="lazy" className={`${height} hover:scale-125 cursor-pointer hover:animate-pulse`} src="/git-original.svg" alt="GitHub" />

                <img loading="lazy" className={`${height} hover:scale-125 cursor-pointer hover:animate-pulse`} src="/vscode-original.svg" alt="VS Code" />

                <img loading="lazy" className={`${height} hover:scale-125 cursor-pointer hover:animate-pulse`} src="/tailwindcss-original-wordmark.svg" alt="Tailwind CSS" />
            </div>

        </div>
     );
}
 
export default CarouselTechnologies;