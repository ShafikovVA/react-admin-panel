import { ReactNode } from "react";
import { Link } from "react-router-dom";

export interface LayoutProps  { 
    url?: string,
    children?: ReactNode,
    className?: string;
}

function LinkButton(props: LayoutProps){
    const {
        url = '',
        children,
        className,
    } = props;

    return(
        <Link className={ "link " + className } to={url}>
            {children}
        </Link>
    )
}

export default LinkButton;