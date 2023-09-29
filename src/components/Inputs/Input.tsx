import {useRef, useEffect} from "react";
import IInput from "./IInput";
import InputLayout from "./InputLayout";

export interface LayoutProps extends IInput{
    text?: string;
}

function Input(props:LayoutProps){
    const inputRef = useRef<HTMLInputElement>(null);
    return(
        <InputLayout description={props.description} inline={props.inline} >
            <label>{props.text}</label>
            <input ref={inputRef}  />
        </InputLayout>
    )
}

export default Input;