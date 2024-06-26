import styled, { keyframes } from 'styled-components'

const animate = keyframes`
    0% {
        transform: translateX(-100px);
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

export const Container = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    margin: 10px 0;
    padding: 30px 20px;

    border-radius: 7px;

    animation: ${animate} .5s;

    > h2 {
        margin-bottom: 20px;
    }

`

export const ChartContainer = styled.div`
    width: 100%;
    height: 260px
`