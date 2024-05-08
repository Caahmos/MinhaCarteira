import styled from "styled-components";

export const Container = styled.div`
    padding: 20px 50px;
    grid-area: CT;
    background-color: ${props => props.theme.colors.primary};

    height: calc(100vh - 70px);
    overflow-y: scroll;

    ::-webkit-scrollbar{
        width: 10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 1px;
    }

    ::-webkit-scrollbar-track{
        background-color: ${props => props.theme.colors.tertiary};
        border-radius: 1px;
    }

    @media screen and (max-width: 770px){
        padding: 20px;
    }

`