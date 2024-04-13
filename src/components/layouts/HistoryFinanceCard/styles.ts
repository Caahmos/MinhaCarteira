import styled from "styled-components";

interface ITagProps {
    color: string;
}

export const Container = styled.li`
    background-color: ${props => props.theme.colors.tertiary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    border-radius: 3px;
    margin: 12px 0;
    padding: 12px 10px;
    cursor: pointer;

    position: relative;

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