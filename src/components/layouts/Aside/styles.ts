import styled, { css } from "styled-components";
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";

interface IContainerProps {
    menuIsOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.white};
    transition: all 0.7s ease;
    position: relative;

    @media screen and (max-width: 600px) {
        padding-left: 7px;
        position: fixed;
        z-index: 2;

        width: 250px;
        
        display: ${props => props.menuIsOpen ? 'inline-block' : 'none'};
        height: ${props => props.menuIsOpen ? '100vh' : 'none'};
        overflow: hidden;
    }

`

export const Header = styled.header`
    height: 80px;
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.white};
    
    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: row-reverse;
    }
`

export const Title = styled.h3`
    margin-left: 10px;

    @media screen and (max-width: 600px) {
        display: none;
    }
`

export const LogoImg = styled.img`
    height: 40px;
    width: 40px;

    @media screen and (max-width: 600px) {
       display: none;
    }
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
export const MenuHamburguer = styled(TiThMenu)`
        font-size: 35px;
        display: none;
        padding: 5px;
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.warning};
        border-radius: 7px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }

        @media screen and (max-width: 600px) {
        display: inline-block;
        margin-right: 30px;
    }
`
export const ToggleView = styled.div`
        width: 100%;
        display: none;
        position: absolute;
        bottom: 0;

        @media screen and (max-width: 600px) {
            display: flex;
            justify-content: center;
            padding-bottom: 20px;
        }
`