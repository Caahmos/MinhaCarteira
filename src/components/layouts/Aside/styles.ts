import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.white};

    @media screen and (max-width: 600px) {
        display: none;
    }

`

export const Header = styled.header`
    height: 80px;
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.white};
`

export const Title = styled.h3`
    margin-left: 10px;
`

export const LogoImg = styled.img`
    height: 40px;
    width: 40px;
`
export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    > a {
        list-style: none;
        text-decoration: none;
    }
`
export const MenuItemLink = styled(Link)`
    color: ${props => props.theme.colors.info};
    margin: 7px 0;
    text-decoration: none;
    transition: 0.4s;
    display: flex;
    align-items: center;

    &:hover{
        opacity: .7;
    }

    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`

export const MenuItemButton = styled.button`
    font-size: 16px;
    color: ${props => props.theme.colors.info};

    margin: 7px 0;
    transition: 0.4s;
    border: none;
    background: none;

    display: flex;
    align-items: center;

    &:hover{
        opacity: .7;
    }

    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`
