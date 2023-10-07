import IInput from "./IInput";


function InputLayout(props: IInput){
    const { 
        inline, 
        children, 
        description 
    } = props;
    
    return(
        <div className={"form-input "+ (inline ? 'inline' : '')} >
            {children}
            {description && 
                <div className="description">{description}</div>
            }
        </div>
    )
}

export default InputLayout;