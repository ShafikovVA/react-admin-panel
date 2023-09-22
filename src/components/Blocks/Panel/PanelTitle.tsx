export interface LayoutProps{
    title: string | JSX.Element | JSX.Element[],
    subtitle: string | JSX.Element | JSX.Element[],
    children: string | JSX.Element | JSX.Element[],
}

function PanelTitle(props: LayoutProps){
    return(
        <div className="panelTitle">
            <div className="title">{props.title}</div>
            <div className="title">{props.subtitle}</div>
            {props.children}
        </div>
    )
}
export default PanelTitle