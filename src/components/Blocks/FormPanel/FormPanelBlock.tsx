export interface LayoutProps{
    children?: string | JSX.Element | JSX.Element[],
    title?: string,
    description?: string,
}

function FormPanelBlock(props : LayoutProps){
    return(
        <div className="panel-block">
            <div className="title-block">
                <div className="title">{props.title}</div>
                <div className="description">{props.description}</div>
            </div>
            <div className="content">{props.children}</div>
        </div>
    )
}
export default FormPanelBlock;