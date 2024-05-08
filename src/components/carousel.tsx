import { ReactNode } from "react";

interface CarouselProps {
    height: string,
    children: ReactNode,
}

const Carousel = ({height, children}: CarouselProps) => {
    return ( 
        <div className="pt-10">
            {children}
            <div className="w-full flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden pt-6">
                <img className={`h-${height}`} src="/react-original.svg" alt="React" />

                <img className={`h-${height}`} src="/nextjs-original.svg" alt="NextJS" />

                <img className={`h-${height}`} src="/javascript-original.svg" alt="JavaScript" />

                <img className={`h-${height}`} src="/typescript-original.svg" alt="Typescript" />

                <img className={`h-${height}`} src="/nodejs-original.svg" alt="NodeJS" />

                <img className={`h-${height}`} src="/redux-original.svg" alt="Redux" />

                <img className={`h-${height}`} src="/html5-original.svg" alt="HTML5" />

                <img className={`h-${height}`} src="/css3-original.svg" alt="CSS3" />

                <img className={`h-${height}`} src="/figma-original.svg" alt="Figma" />

                <img className={`h-${height}`} src="/sass-original.svg" alt="Sass" />

                <img className={`h-${height}`} src="/
                npm-original-wordmark.svg" alt="NPM" />

                <img className={`h-${height}`} src="/jest-plain.svg" alt="Jest" />

                <img className={`h-${height}`} src="/mongodb-original.svg" alt="MongoDB" />

                <img className={`h-${height}`} src="/postgresql-original.svg" alt="PostgreSQL" />

                <img className={`h-${height}`} src="/materialui-original.svg" alt="Material UI" />

                <img className={`h-${height}`} src="/bash-original.svg" alt="Git Bash" />

                <img className={`h-${height}`} src="/git-original.svg" alt="GitHub" />

                <img className={`h-${height}`} src="/vscode-original.svg" alt="VS Code" />

                <img className={`h-${height}`} src="/tailwindcss-original-wordmark.svg" alt="Tailwind CSS" />
            </div>
            
        </div>
     );
}
 
export default Carousel;