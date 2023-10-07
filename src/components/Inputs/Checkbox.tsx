import {useRef, useEffect} from "react";
import IInput from "./IInput";
import InputLayout from "./InputLayout";

export interface LayoutProps extends IInput{
    checked?: boolean;
}

function Checkbox(props: LayoutProps){
    const { checked } = props;
    
    const inputRef = useRef<HTMLInputElement>(null);
    
    const handleOpenFileInput = () => {
        if(!inputRef.current) return;
        inputRef.current.click();
    }

    useEffect(()=> {
        if(checked && inputRef.current){
            inputRef.current.checked = true;    
        }
    },[]);
    
    return(
        <InputLayout {...props}>
            <input ref={inputRef} type="checkbox"  />
            <label onClick={handleOpenFileInput}>{props.text}</label>
        </InputLayout>
    );
}

export default Checkbox;