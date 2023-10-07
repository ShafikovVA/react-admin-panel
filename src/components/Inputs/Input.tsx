import {useRef} from "react";
import IInput from "./IInput";
import InputLayout from "./InputLayout";

function Input(props:IInput){
    const { text } = props;
    const inputRef = useRef<HTMLInputElement>(null);
    return(
        <InputLayout {...props}>
            <label>{text}</label>
            <input ref={inputRef}  />
        </InputLayout>
    )
}

export default Input;