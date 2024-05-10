import styled from 'styled-components'

interface ITitleContainerProps {
    $lineColor: string;
};

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.colors.white};
`;

export const TitleContainer = styled.h1<ITitleContainerProps>`

    >h1{
        color: ${props => props.theme.colors.white};

        &::after{
            content: '';
            display: block;
            width: 50px;
            border-top: 3px solid ${props => props.$lineColor};
        }
    }

    @media screen and (max-width: 576px){
        font-size: 1.3rem;
    }
`;

export const Controllers = styled.div`
    display: flex;
`;
