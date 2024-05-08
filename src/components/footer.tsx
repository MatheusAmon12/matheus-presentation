import { Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
    return ( 
        <div className="flex justify-center w-full flex-col items-center py-10 bg-secondary text-white font-serif text-xs">
            <h1>Entre em contato</h1>
            <div className="flex">
                <Button variant="link" className="gap-2 flex items-center text-white" >
                    <Phone size={16} />
                    <span className="text-xs block">WhatsApp</span>
                </Button>
                <Button variant="link" className="gap-2 flex items-center text-white">
                    <Mail size={16} />
                    <span className="text-xs block">E-mail</span>
                </Button>
            </div>
        </div>
     );
}
 
export default Footer;