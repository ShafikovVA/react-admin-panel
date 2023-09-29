import InputLayout from "./InputLayout";
import IInput from "./IInput";
import {Switch as SwitchMui} from "@mui/material";
import {SwitchProps} from "@mui/material";

export interface LayoutProps extends IInput, SwitchProps{};

function Switch(props: LayoutProps){
    return(
        <InputLayout description={props.description} inline={props.inline} >
            <SwitchMui {...props} />
            <label htmlFor="">{props.text}</label>
        </InputLayout>
    )
}
export default Switch;