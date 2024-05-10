import styled, { keyframes } from 'styled-components';

interface IContentProps {
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

export const Container = styled.div<IContentProps>`
    width: 32%;
    height: 150px;
    margin: 10px 0;
    background-color: ${props => props.color};
    color: ${props => props.theme.colors.white};
    border-radius: 7px;
    padding: 10px 20px;
    position: relative;
    overflow: hidden;

    animation: ${animate} .5s;

    > img {
        height: 110%;
        position: absolute;
        top: -10px;
        right: -20px;
        opacity: .3;
        
    }

    > span {
        font-size: 18px;
        font-weight: 500;
    }

    >small {
        font-size: 12px;
        position: absolute;
        bottom: 10px;
    }

    @media(max-width: 770px){
        width: 100%;
        
        > span {
            font-size: 14px;
        }

        > h1 {
            word-wrap: break-word;
            font-size: 20px;
        }
    }
    
    @media(max-width: 420px){
        width: 100%;

        > span {
            font: 18px;
        }

        > h1 {
            word-wrap: break-word;
            font-size: 26px;
        }
    }

`