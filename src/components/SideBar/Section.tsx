import { ReactNode } from "react";

export interface LayoutProps  { 
    title: ReactNode,
    children: ReactNode,
}

function Section(props: LayoutProps){
    const { 
        title, 
        children 
    } = props;
    return(
        <div className="section">
            <div className="title">
                {title}
            </div>
            {children}
        </div>
    )
}
export default Section