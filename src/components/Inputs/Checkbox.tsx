import {useRef, useEffect} from "react";

export interface LayoutProps{
    text?: string;
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
    
    console.log(inputRef);
    return(
        <div className="form-input">
            <input ref={inputRef} type="checkbox"  />
            <label onClick={handleOpenFileInput}>{props.text}</label>
        </div>
    );
}

export default Checkbox;