import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { Button } from "./ui/button";

const Footer = () => {
    return ( 
        <div className="flex justify-center w-full flex-col items-center py-10 bg-secondary text-white font-sans relative z-10">
            <h1 className="text-md font-bold">Entre em contato</h1>
            <div className="flex flex-wrap items-center justify-center pt-4">
                <Button variant="link" className="gap-2 flex items-center text-white" asChild>
                    <a href="https://wa.me/5538991500574" target="_blank">
                        <FaWhatsapp size={24} />
                        <span className="text-sm block">(38) 99150-0574</span>
                    </a>
                </Button>
                <Button variant="link" className="gap-2 flex items-center text-white" asChild>
                    <a href="mailto:amonmatheus757@gmail.com" target="_blank">
                        <IoMailOutline size={24} />
                        <span className="text-sm block">amonmatheus757@gmail.com</span>
                    </a>
                </Button>
            </div>
        </div>
     );
}
 
export default Footer;