import { LinkedinIcon } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
    return ( 
        <div className="flex items-center justify-between w-full pt-8 pb-2 px-6">
            <div>
                <img src="/logo.png" alt="Logo" height={19} />
            </div>
            <div>
                <Button variant="ghost" asChild>
                    <a href="https://www.github.com/MatheusAmon12">
                        <img src="/github-icon.svg" alt="GitHub" height={24} width={24} />
                    </a>
                </Button>
                <Button variant="ghost" asChild>
                    <a href="https://www.linkedin.com/in/matheus-amon-dos-santos-ferreira-a52526163/">
                        <LinkedinIcon color="white" size={24}/>
                    </a>
                </Button>
            </div>
        </div>
     );
}
 
export default Header;