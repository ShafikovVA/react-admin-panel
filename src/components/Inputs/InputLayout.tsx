import IInput from "./IInput";


function InputLayout(props: IInput){
    return(
        <div className={"form-input "+ (props.inline ? 'inline' : '')} >
            {props.children}
            {props.description && 
                <div className="description">{props.description}</div>
            }
        </div>
    )
}

export default InputLayout;