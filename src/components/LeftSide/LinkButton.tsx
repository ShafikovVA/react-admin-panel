import * as React from "react";

export interface LayoutProps  { 
    url: string,
    children: string | JSX.Element | JSX.Element[],
}

function LinkButton(props: LayoutProps){
    return(
        <a className="link" href={props.url}>
            {props.children}
        </a>
    )
}

export default LinkButton;