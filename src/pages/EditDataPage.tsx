import Panel from "../components/Blocks/Panel/Panel";
import PanelTitle from "../components/Blocks/Panel/PanelTitle";
import FormPanel from "../components/Blocks/FormPanel/FormPanel";
import FormPanelBlock from "../components/Blocks/FormPanel/FormPanelBlock";
import Input from "../components/Inputs/Input";
import Checkbox from "../components/Inputs/Checkbox";
import Switch from "../components/Inputs/Switch";
import Select from "../components/Inputs/Select";
import MenuItem from '@mui/material/MenuItem';


function EditDataPage(){

    return(
        <div className="container">
            <Panel > 
                <PanelTitle subtitle={'Добавить - создать товар'} />
            </Panel>
            <FormPanel>
                <FormPanelBlock 
                    title={"Информация о товаре"}
                    description={"Введите основную информацию о товаре"}>
                        <Input 
                            text="Инпут 1" 
                            description="Это описание инпута" />
                        <Input text="Инпут 2" />
                        <Input text="Инпут 3" />
                        <Checkbox text="Чекбокс" inline />
                        <Switch text="А это свитчер" defaultChecked inline></Switch>
                        <Select text="Это селект">
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={13}>13</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                        </Select>
                </FormPanelBlock>    
                <FormPanelBlock
                     title={"Фотографии товара"}
                     description={"Загрузите фотографии товара"}>
                
                </FormPanelBlock>    
            </FormPanel>

        </div>
    )
}

export default EditDataPage;