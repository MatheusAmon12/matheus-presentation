import Header from "@/components/header";
import { ReactNode } from "react";

const TemplateDefault = ({children} : {children: ReactNode}) => {
    return (
        <>
            <Header />
            <div className="px-6 pt-8">
                {children}
            </div>
        </>
     );
}
 
export default TemplateDefault;