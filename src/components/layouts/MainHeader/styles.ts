import styled from "styled-components";
import ToggleComponent from '../Toggle';
import { TiThMenu } from "react-icons/ti";

export const Container = styled.div`
        grid-area: MH;
        
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.white};
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 50px;

        border-bottom: 1px solid ${(props) => props.theme.colors.white} ;
`

export const Profile = styled.div`
        display: flex;
        flex-direction: column;
        color: ${props => props.theme.colors.white}
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``

export const Toggle = styled(ToggleComponent)`
        
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
    }
`

export const ToggleView = styled.div`
        @media screen and (max-width: 600px) {
        display: none;
        }
`
