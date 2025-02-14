import Footer from "@/components/footer";
import { ReactNode } from "react";

const TemplateDefault = ({children} : {children: ReactNode}) => {
    return (
        <>
            {children}
            <Footer />
        </>
     );
}
 
export default TemplateDefault;