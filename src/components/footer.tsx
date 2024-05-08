import { Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
    return ( 
        <div className="flex justify-center w-full flex-col items-center py-10 bg-secondary text-white font-serif text-xs">
            <h1>Entre em contato</h1>
            <div className="flex">
                <Button variant="link" className="gap-2 flex items-center text-white" asChild>
                    <a href="https://wa.me/5538991500574" target="_blank">
                        <Phone size={16} />
                        <span className="text-xs block">WhatsApp</span>
                    </a>
                </Button>
                <Button variant="link" className="gap-2 flex items-center text-white" asChild>
                    <a href="mailto:amonmatheus757@gmail.com" target="_blank">
                        <Mail size={16} />
                        <span className="text-xs block">E-mail</span>
                    </a>
                </Button>
            </div>
        </div>
     );
}
 
export default Footer;