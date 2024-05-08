import Footer from "@/components/footer";
import Header from "@/components/header";
import { ReactNode } from "react";

const TemplateDefault = ({children} : {children: ReactNode}) => {
    return (
        <>
            <Header />
            <div className="py-8">
                {children}
            </div>
            <Footer />
        </>
     );
}
 
export default TemplateDefault;