import Footer from "@/components/footer";
import Header from "@/components/header";
import { ReactNode } from "react";

const TemplateDefault = ({children} : {children: ReactNode}) => {
    return (
        <>
            <div className="pb-8 bg-[url('/tech-background-sm.png')] xl:bg-[url('/tech-background.png')] bg-cover bg-fixed">
                <Header />
                {children}
            </div>
            <Footer />
        </>
     );
}
 
export default TemplateDefault;