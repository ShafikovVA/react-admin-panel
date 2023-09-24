import { useState } from "react";
import { Collapse } from '@mui/material';
import IndicatorIcon from "../../assets/images/icons/Indicator.svg?react";

export interface LayoutProps  {
    title: string;
    icon?: string | JSX.Element | JSX.Element[],
    children: JSX.Element[],
}

function DropDown(props: LayoutProps){
    let [expanded, setExpanded] = useState(false);    
    return(
        <div className="dropdown-link" onClick={()=> setExpanded(!expanded)}>
            <div className="title">
                {props.icon}
                {props.title}
                <IndicatorIcon className={'indicator ' + (expanded ? 'rotated': '') } ></IndicatorIcon>
            </div>
            <Collapse in={expanded}>
                {props.children}
            </Collapse>
        </div>
    )
}

export default DropDown