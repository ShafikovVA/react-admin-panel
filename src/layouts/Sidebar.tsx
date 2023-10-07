import Section from "../components/SideBar/Section";
import LinkButton from "../components/SideBar/LinkButton";
import DropDown from "../components/SideBar/DropDown";
import { Box } from "@mui/material";

import UserIcon from "../assets/images/icons/UserIcon";
import CategoryIcon from "../assets/images/icons/CategoryIcon";
import DocumentIcon from "../assets/images/icons/DocumentIcon";
import BulletIcon from "../assets/images/icons/BulletIcon";

import { useLocation } from 'react-router-dom';


function HeaderLeftSide(){
    return (
        <Box className="leftSideBar">
            <Section title="Управление главной страницей">
                <LinkButton className={ useLocation().pathname === '/'  ? 'active' : ''} url="/">
                    <UserIcon /> 
                    Главная страница
                </LinkButton>
                <LinkButton className={ useLocation().pathname.startsWith('/EditDataPage')  ? 'active' : ''} url="/EditDataPage">
                    <CategoryIcon />
                    Не главная страница
                </LinkButton>
                <LinkButton className={ useLocation().pathname.startsWith('/users')  ? 'active' : ''} url="/users">
                    <UserIcon />
                    Пользователи
                </LinkButton>
                <DropDown title="Дропдаун"
                        icon={<DocumentIcon />}>
                        <LinkButton url="/">
                            <BulletIcon />
                            Первый
                        </LinkButton>
                        <LinkButton url="/">
                            <BulletIcon />
                            Второй
                        </LinkButton>
                        <LinkButton url="/">
                            <BulletIcon />
                            Третий
                        </LinkButton>
                </DropDown>
            </Section>
        </Box>
    )
}
export default HeaderLeftSide 