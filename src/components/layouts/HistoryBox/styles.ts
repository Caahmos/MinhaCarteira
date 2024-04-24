import styled from 'styled-components'

export const Container = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${ props => props.theme.colors.tertiary};
    color: ${ props => props.theme.colors.white};
    margin: 10px 0;
    padding: 30px 20px;

    border-radius: 7px;

    > h2 {
        margin-bottom: 20px;
    }

`

export const ChartContainer = styled.div`
    width: 100%;
    height: 260px
`