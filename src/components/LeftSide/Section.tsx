import * as React from "react";

export interface LayoutProps  { 
    title: React.ReactNode,
    children: string | JSX.Element | JSX.Element[],
}

function Section(props: LayoutProps){
    return(
        <div className="section">
            <div className="title">
                {props.title}
            </div>
            {props.children}
        </div>
    )
}
export default Section