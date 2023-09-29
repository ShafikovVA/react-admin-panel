export interface LayoutProps{
    children?: string | JSX.Element | JSX.Element[],
    title?: string,
    description?: string,
}

function PanelBlock(props : LayoutProps){
    return(
        <div className="panel-block">
            <div className="title-block">
                <div className="div">
                    <div className="title">{props.title}</div>
                    <div className="description">{props.description}</div>
                </div>
            </div>
            <div className="div">{props.children}</div>
        </div>
    )
}
export default PanelBlock;