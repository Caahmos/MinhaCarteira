import styled from 'styled-components'

interface ITitleContainerProps {
    $lineColor: string;
};

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

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
`;

export const Controllers = styled.div`
    display: flex;
`;
