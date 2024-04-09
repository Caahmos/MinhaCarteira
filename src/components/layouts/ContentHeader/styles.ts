import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const TitleContainer = styled.h4`

    >h1{
        color: ${props => props.theme.colors.white};

        &::after{
            content: '';
            display: block;
            width: 50px;
            border-top: 3px solid ${props => props.theme.colors.info};
        }
    }
`;

export const Controllers = styled.div`
   
`;
