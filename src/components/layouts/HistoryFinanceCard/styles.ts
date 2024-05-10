import styled, { keyframes } from "styled-components";

interface ITagProps {
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

export const Container = styled.li`
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    border-radius: 3px;
    margin: 12px 0;
    padding: 12px 10px;
    cursor: pointer;

    position: relative;

    animation: ${animate} .5s;

    &:hover{
        transition: 0.1s all;
        opacity: .7;
        transform: translateX(15px);
    }

    > div {
        display: flex;
        flex-direction: column;
        padding-left: 10px;
    }
    
`

export const Tag = styled.div<ITagProps>`
    width: 10px;
    height: 100%;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    background-color: ${props => props.color};
    position: absolute;
    left: 0;
`