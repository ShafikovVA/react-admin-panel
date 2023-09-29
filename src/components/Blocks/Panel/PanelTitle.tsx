export interface LayoutProps{
    title?: string | JSX.Element | JSX.Element[],
    subtitle?: string | JSX.Element | JSX.Element[],
    children?: string | JSX.Element | JSX.Element[],
}

function PanelTitle(props: LayoutProps){
    return(
        <div className="panelTitle">
            {(props.title || props.children) &&
                <div className="panelTitle-container">
                    <div className="title">{props.title}</div>
                    <div className="children">{props.children}</div>    
                </div>
            }
            {props.subtitle && 
                <div className="subtitle">{props.subtitle}</div>
            }
         
      
        </div>
    )
}
export default PanelTitle