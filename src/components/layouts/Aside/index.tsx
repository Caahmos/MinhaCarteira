import React from "react";
import {
    Container,
    Header,
    Title,
    LogoImg,
    MenuContainer,
    MenuItemLink,
    MenuItemButton
} from './styles'

import logoImg from '../../assets/logo.svg'
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from "react-icons/md";

import { useAuth } from "../../../hooks/auth";

const Aside: React.FC = () => {
    const { signOut } = useAuth();

    return (
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
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
        </Container>
    )
}

export default Aside