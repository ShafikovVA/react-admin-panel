import TitleBlock from "../../components/Blocks/TitleBlock";
import Panel from "../../components/Blocks/Panel/Panel";
import PanelTitle from "../../components/Blocks/Panel/PanelTitle";
import Grid from "../../components/Blocks/Grid";
import VoiceIcon from "../../assets/images/icons/Voice.svg?react";
import PlusCircleIcon from '../../assets/images/icons/Plus Circle.svg?react';

import {Link} from "react-router-dom";


function UsersPage(){
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
                    <Grid tools columnConfigure></Grid>
                </Panel>
            </div>
        </>
    )
}

export default UsersPage