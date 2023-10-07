import {useEffect} from 'react';
import {Link} from "react-router-dom";
import type { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux'

import TitleBlock from "../../components/Blocks/TitleBlock";
import Panel from "../../components/Blocks/Panel/Panel";
import PanelTitle from "../../components/Blocks/Panel/PanelTitle";
import Grid from "../../components/Blocks/Grid";
import VoiceIcon from "../../assets/images/icons/VoiceIcon";
import PlusCircleIcon from '../../assets/images/icons/PlusCircleIcon';
import  { getAll }  from '../../store/Users';
import { AppDispatch } from '../../store';


function UsersPage(){
    const users = useSelector((state: RootState)=> state.users);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getAll())
    }, []);
    useEffect(() => {
        console.log(users);
    }, [users])
    
    

    return(
        <>
            <TitleBlock 
                title="Управление пользователями на сайте"
                description="Эта страница позволяет вам эффективно управлять пользователями. Здесь вы можете просматривать, добавлять, редактировать и удалять пользователей.">
                    <button>
                        <VoiceIcon></VoiceIcon>
                        Тут кнопка
                    </button>
            </TitleBlock>
            <div className="container">
                <Panel>
                    <PanelTitle
                        title="Пользователи"
                        subtitle="Упоавление данными пользователей">
                        <Link to="/users/create" className="btn transparent"><PlusCircleIcon/> Создать пользователя</Link>
                    </PanelTitle>
                    <Grid tools columnConfigure model={users.users}></Grid>
                  
                </Panel>
            </div>
        </>
    )
}

export default UsersPage