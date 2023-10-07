import {useState} from 'react';
import InputLayout from "./InputLayout";
import IInput from "./IInput";
import { Select as SelectMui, SelectProps, SelectChangeEvent } from "@mui/material";

function Select(props: IInput & SelectProps) {
    const { text } = props;

    const [value, setValue] = useState('');

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        setValue(event.target.value as string);
    };

    return(
        <InputLayout {...props}>
            <label htmlFor="">{text}</label>
            <SelectMui value={value} onChange={handleChange} {...props} />
        </InputLayout>
    )
}

export default Select;