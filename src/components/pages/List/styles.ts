import styled from 'styled-components';

export const Container = styled.div`


`;

export const Content = styled.main`
    > p {
        color: ${props => props.theme.colors.white}
    };
`;

export const Filters = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .tag-filter{
        font-size: 18px;
        font-weight: 500;
        background-color: transparent;
        color: ${props => props.theme.colors.white};
        margin: 0 10px;
        opacity: .5;

        &:hover{
            transition: 0.4s all;
            opacity: 0.7;
        }
    }

        .tag-filter-eventual::after{
            content: '';
            display: block;
            width: 75px;
            margin: 0 auto;
            border-bottom: 10px solid ${props => props.theme.colors.warning};
        }

        .tag-filter-recurrent::after{
            content: '';
            display: block;
            width: 75px;
            margin: 0 auto;
            border-bottom: 10px solid ${props => props.theme.colors.success};
        }

        .tag-actived{
            opacity: 1;
        }

`;