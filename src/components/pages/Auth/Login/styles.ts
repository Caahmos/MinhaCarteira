import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    > h3 {
        color: ${props => props.theme.colors.white};
        margin-left: 7px;
    };

    > img {
        width: 30px;
        height: 30px;
    }
`

export const Form = styled.form`
    width: 300px;
    height: 300px;

    padding: 30px;

    border-radius: 7px;

    background-color: ${props => props.theme.colors.tertiary};

`

export const FormTitle = styled.h2`
    color: ${props => props.theme.colors.white};
    margin-bottom: 30px;
    &:after{
        content: '';
        display: block;
        width: 75px;
        border-bottom: 6px solid ${props => props.theme.colors.warning};
    }
`
