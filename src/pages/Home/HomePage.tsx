import TitleBlock from "../../components/Blocks/TitleBlock";
import Panel from "../../components/Blocks/Panel/Panel";
import PanelTitle from "../../components/Blocks/Panel/PanelTitle";
import Grid from "../../components/Blocks/Grid";
import VoiceIcon from "../../assets/images/icons/Voice.svg?react";

function HomePage(){
    return(
        <>
            <TitleBlock 
                title="Привет, это главная страница!"
                description="Приветствую вас на главной странице, тут основная информация о данном сайте">
                    <button>
                        <VoiceIcon></VoiceIcon>
                        Тут кнопка
                    </button>
            </TitleBlock>
            <div className="container">
                <Panel>
                    <PanelTitle
                        title="Это панелька!"
                        subtitle="Панелька, которая может визуально разместить в себя все что угодно">
                        Тут какой то текст по преколу чисто или просто кнопки
                    </PanelTitle>
                    <Grid tools columnConfigure></Grid>
                </Panel>
            </div>
        </>
    );   
}

export default HomePage;