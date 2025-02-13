import { Button } from "./ui/button";
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";

const Header = () => {
    return ( 
        <div className="flex items-center justify-between w-full pt-8 pb-2 container relative z-10">
            <div className="h-4">
                <img src="/logo.png" alt="Logo" className="h-full" />
            </div>
            <div>
                <Button variant="ghost" className="hover:bg-secondary" asChild>
                    <a href="https://www.github.com/MatheusAmon12" target="_blank" rel="noopener noreferrer">
                        <LuGithub color="white" size={24}/>
                    </a>
                </Button>
                <Button variant="ghost" className="hover:bg-secondary" asChild>
                    <a href="https://www.linkedin.com/in/matheus-amon-dos-santos-ferreira-a52526163/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn color="white" size={24}/>
                    </a>
                </Button>
            </div>
        </div>
     );
}
 
export default Header;