import * as React from "react";
import { Link } from "react-router-dom";

export interface LayoutProps  { 
    url: string,
    children: string | JSX.Element | JSX.Element[],
}

function LinkButton(props: LayoutProps){
    return(
        <Link className="link" to={ props.url ?  props.url : ''}>
            {props.children}
        </Link>
    )
}

export default LinkButton;