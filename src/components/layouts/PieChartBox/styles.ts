import styled, { keyframes } from 'styled-components'

interface ILegendProps {
    color: string;
}

const animate = keyframes`
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
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

    @media screen and (max-width: 770px) {
        width: 100%;
    }
    
`

export const SideLeft = styled.aside`
    padding: 30px 20px;

    > h2 {
        margin-bottom: 20px;
    };

    @media screen and (max-width: 1345px) {
        padding: 0 15px 5px;
        margin-bottom: 7px;

        > h2 {
            margin-top: 15px;
            margin-bottom: 7px;
        }
    };

    @media screen and (max-width: 420px) {
        padding: 15px;
        margin-bottom: 7px;
    };
`

export const LegendContainer = styled.ul`
    list-style: none;
    height: 180px;
    overflow-y: scroll;

    @media screen and (max-width: 1345px) {
        display: flex;
        flex-direction: column;
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

    @media screen and (max-width: 1345px) {
        font-size: 14px;
        margin: 3px 0;

        > div {
            height: 35px;
            width: 35px;
            line-height: 35px;
        };

        > span {
            margin-left: 7px;
        }

    }
`
export const SideRigth = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;

    @media screen and (max-width: 1345) {
        height: 100%;
    }
`