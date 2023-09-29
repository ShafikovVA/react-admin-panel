import {useRef, useEffect} from "react";
import IInput from "./IInput";
import InputLayout from "./InputLayout";

export interface LayoutProps extends IInput{
    checked?: boolean;
}

function Checkbox(props: LayoutProps){
    
    const inputRef = useRef<HTMLInputElement>(null);
    
    const handleOpenFileInput = () => {
        if(!inputRef.current) return;
        console.log(inputRef.current);
        inputRef.current.click();
    }

    useEffect(()=> {
        if(props.checked && inputRef.current){
            inputRef.current.checked = true;    
        }
    })
    
    return(
        <InputLayout description={props.description} inline={props.inline}>
            <input ref={inputRef} type="checkbox"  />
            <label onClick={handleOpenFileInput}>{props.text}</label>
        </InputLayout>
    );
}

export default Checkbox;