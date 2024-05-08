import React, { useState } from "react";
import {
    Container,
    Header,
    Title,
    LogoImg,
    MenuContainer,
    MenuItemLink,
    MenuItemButton,
    MenuHamburguer,
    ToggleView
} from './styles'

import logoImg from '../../assets/logo.svg'
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from "react-icons/md";

import { useAuth } from "../../../hooks/auth";
import { useMenu } from "../../../hooks/openMenu";
import { useTheme } from "../../../hooks/theme";
import Toggle from "../Toggle";

const Aside: React.FC = () => {
    const { signOut } = useAuth();
    const { isOpenMenu, open } = useMenu();
    const { toggleTheme, theme } = useTheme();
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
        console.log(darkTheme);
    }

    return (
        <Container menuIsOpen={isOpenMenu}>
            <Header>
                <LogoImg src={logoImg} alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
                <MenuHamburguer onClick={() => { open() }} />
            </Header>
            <MenuContainer>
                <MenuItemLink to='/dashboard'>
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink to='/list/entry-balance'>
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink>
                <MenuItemLink to='/list/exit-balance'>
                    <MdArrowDownward />
                    Saídas
                </MenuItemLink>
                <MenuItemButton onClick={() => { signOut() }}>
                    <MdExitToApp />
                    Sair
                </MenuItemButton>
            </MenuContainer>
            <ToggleView>
                <Toggle
                    labelLeft='Claro'
                    labelRight='Escuro'
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                />
            </ToggleView>
        </Container>
    )
}

export default Aside