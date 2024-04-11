import React from "react";
import {
    Container,
    Header,
    Title,
    LogoImg,
    MenuContainer,
    MenuItemLink
} from './styles'

import logoImg from '../../assets/logo.svg'
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from "react-icons/md";

import { Link } from 'react-router-dom';

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>
            <MenuContainer>
                <Link to='/dashboard'>
                    <MenuItemLink>
                        <MdDashboard />
                        Dashboard
                    </MenuItemLink>
                </Link>
                <Link to='/list/entry-balance'>
                    <MenuItemLink>
                        <MdArrowUpward />
                        Entradas
                    </MenuItemLink>
                </Link>
                <Link to='/list/exit-balance'>
                    <MenuItemLink>
                        <MdArrowDownward />
                        Saídas
                    </MenuItemLink>
                </Link>
                <Link to='/exit'>
                    <MenuItemLink>
                        <MdExitToApp />
                        Sair
                    </MenuItemLink>
                </Link>
            </MenuContainer>
        </Container>
    )
}

export default Aside