export interface LayoutProps{
    children?: null | undefined | string | JSX.Element | JSX.Element[],
}

function FormPanel(props: LayoutProps){
    return(
        <div className="form-panel"> 
            {props.children}
        </div>
    )
}

export default FormPanel;