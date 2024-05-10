import styled, { keyframes } from 'styled-components'

interface ILegendProps {
    color: string;
}

const animate = keyframes`
    0% {
        transform: translateY(100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateY(0px);
        opacity: 1;
    }
`;

export const Container = styled.div`
    width: 48%;
    height: 260px;

    margin: 10px 0;
    border-radius: 7px;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    display: flex;

    animation: ${animate} .5s;

    @media screen and (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        
        width: 100%;
        height: auto;
    }
`

export const SideLeft = styled.aside`
    padding: 30px 20px;

    > h2 {
        margin-bottom: 20px;
    }
    
`

export const LegendContainer = styled.ul`
    list-style: none;
    height: 180px;
    overflow-y: scroll;

    @media screen and (max-width: 1200px) {
        display: flex;
        justify-content: center;
        height: auto;
    }
`

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;

    > div {
        width: 45px;
        height: 45px;
        border-radius: 5px;
        background-color: ${props => props.color};
        font-size: 18px;
        line-height: 45px;
        text-align: center;
    }

    > span {
        margin: 0 15px;
    }

    @media screen and (max-width: 1200px) {
        > div {
        width: 30px;
        height: 30px;

        font-size: 12px;
        line-height: 30px;
    }
    }
`

export const SideRigth = styled.main`
    display: flex;
    flex: 1;
    padding: 20px;
    justify-content: center;

    @media screen and (max-width: 1200px) {
        width: 100%;
        min-height: 200px;
        flex-grow: 1;
    }
`