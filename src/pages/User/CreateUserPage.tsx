import Panel from "../../components/Blocks/Panel/Panel";
import PanelTitle from "../../components/Blocks/Panel/PanelTitle";
import FormPanel from "../../components/Blocks/FormPanel/FormPanel";
import FormPanelBlock from "../../components/Blocks/FormPanel/FormPanelBlock";
import Input from "../../components/Inputs/Input";
import Checkbox from "../../components/Inputs/Checkbox";
import Switch from "../../components/Inputs/Switch";
import Select from "../../components/Inputs/Select";
import {MenuItem, Breadcrumbs, Link, Typography} from '@mui/material';


function CreateUserPage(){
    return(
        <div className="container">
            <Breadcrumbs>
                <Link underline="hover" color="inherit" href="/users">Пользователи</Link>
                <Typography >Создать пользователя</Typography>
            </Breadcrumbs>
            <Panel > 
                <PanelTitle subtitle={'Добавить - создать пользователя'} />
            </Panel>
            <FormPanel>
                <FormPanelBlock 
                    title={"Информация о пользователе"}
                    description={"Введите основную информацию о пользователе"}>
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
                    title={"Фотографии пользователя"}
                    description={"Загрузите фотографии пользователя"}>
                
                </FormPanelBlock>    
            </FormPanel>

        </div>
    )
}

export default CreateUserPage;