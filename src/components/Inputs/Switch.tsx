import InputLayout from "./InputLayout";
import IInput from "./IInput";
import {Switch as SwitchMui} from "@mui/material";
import {SwitchProps} from "@mui/material";

function Switch(props: IInput & SwitchProps){
    const {
        description, 
        inline, 
        text
    } = props;
    
    return(
        <InputLayout description={description} inline={inline} >
            <SwitchMui {...props} />
            <label htmlFor="">{text}</label>
        </InputLayout>
    )
}
export default Switch;