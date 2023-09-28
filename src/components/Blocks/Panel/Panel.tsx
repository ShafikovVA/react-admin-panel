
export interface LayoutProps{
    children?: null | undefined | string | JSX.Element | JSX.Element[],
}

function Panel(props: LayoutProps){
    return(
        <div className="panel"> 
            {props.children}
        </div>
    )
}

export default Panel;