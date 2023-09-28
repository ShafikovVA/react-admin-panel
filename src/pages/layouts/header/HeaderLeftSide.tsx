import Section from "../../../components/LeftSide/Section";
import LinkButton from "../../../components/LeftSide/LinkButton";
import DropDown from "../../../components/LeftSide/DropDown";


import UserIcon from "./../../../assets/images/icons/User.svg?react";
import CategoryIcon from "./../../../assets/images/icons/Category.svg?react";
import DocumentIcon from "./../../../assets/images/icons/Document.svg?react";
import Bullet from "./../../../assets/images/icons/Bullet.svg?react";
import FilterIcon from "./../../../assets/images/icons/Filter.svg";
import GameIcon from "./../../../assets/images/icons/Game.svg";
import SettingIcon from "./../../../assets/images/icons/Setting.svg";

function HeaderLeftSide(){
    
    return (
        <div className="leftSideBar">
            <Section title="Управление главной страницей">
                <LinkButton url="/">
                    <UserIcon></UserIcon> 
                    Главная страница
                </LinkButton>
                <LinkButton url="/EditDataPage">
                    <CategoryIcon></CategoryIcon>
                    Не главная страница
                </LinkButton>
                <DropDown title="Дропдаун"
                        icon={<DocumentIcon></DocumentIcon>}>
                        <LinkButton url="/">
                            <Bullet></Bullet>
                            Первый
                        </LinkButton>
                        <LinkButton url="/">
                            <Bullet></Bullet>
                            Второй
                        </LinkButton>
                        <LinkButton url="/">
                            <Bullet></Bullet>
                            Третий
                        </LinkButton>
                </DropDown>
                   
            </Section>
        </div>
    )
}
export default HeaderLeftSide 