import {useState} from 'react';
import InputLayout from "./InputLayout";
import IInput from "./IInput";
import { Select as SelectMui, SelectProps, SelectChangeEvent } from "@mui/material";

export interface LayoutProps extends IInput, SelectProps {
    children?: string | JSX.Element | JSX.Element[]; 
};

function Select(props: LayoutProps) {
    
    const [value, setValue] = useState('');

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        setValue(event.target.value as string);
    };

    return(
        <InputLayout {...props}>
            <label htmlFor="">{props.text}</label>
            <SelectMui value={value} onChange={handleChange} {...props}></SelectMui>
        </InputLayout>
    )
}

export default Select;