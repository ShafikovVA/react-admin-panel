interface LayoutProps {
    title: string;
    description: undefined | null | string;
    children:  undefined | null | string | JSX.Element | JSX.Element[],
}

function TitleBlock(props: LayoutProps){
    return(
        <div className="titleBlock">
            <div className="container">
                <div className="title-contaniner">
                    <div className="title">{props.title}</div>
                    <div className="children">{props.children}</div>
                </div>
                <div className="description">{props.description}</div>
            </div>
        </div>
    )
}

export default TitleBlock;