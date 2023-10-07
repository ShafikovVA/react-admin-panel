import { useState, ReactNode } from "react";
import { Collapse } from '@mui/material';
import IndicatorIcon from "../../assets/images/icons/IndicatorIcon";

export interface LayoutProps  {
    title: string;
    icon?: ReactNode,
    children: ReactNode,
}

function DropDown(props: LayoutProps){
    const { title, icon, children } = props;
    let [expanded, setExpanded] = useState(false);    
    return(
        <div className="dropdown-link" onClick={()=> setExpanded(!expanded)}>
            <div className="title">
                {icon}
                {title}
                <IndicatorIcon className={'indicator ' + (expanded ? 'rotated': '') } />
            </div>
            <Collapse in={expanded}>
                {children}
            </Collapse>
        </div>
    )
}

export default DropDown