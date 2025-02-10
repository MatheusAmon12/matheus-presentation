import Footer from "@/components/footer";
import Header from "@/components/header";
import { ReactNode } from "react";

const TemplateDefault = ({children} : {children: ReactNode}) => {
    return (
        <div className="w-full container">
            <Header />
            {children}
            <Footer />
        </div>
     );
}
 
export default TemplateDefault;