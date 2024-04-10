import styled from "styled-components";

interface IContainerProps {
    color: string;
}

interface ITagProps {
    color: string;
}

export const Container = styled.li<IContainerProps>`
    background-color: ${props => props.color};
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
        transition: 0.4s all;
        opacity: .7;
        transform: translateX(10px);
    }

    > div {
        display: flex;
        flex-direction: column;
        padding-left: 10px;
    }
    
`

export const Tag = styled.div<ITagProps>`
    width: 10px;
    height: 60%;
    background-color: ${props => props.color};
    position: absolute;
    left: 0;
`