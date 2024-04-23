import styled from 'styled-components'

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    width: 48%;
    height: 260px;

    margin: 10px 0;
    border-radius: 7px;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    display: flex;
`

export const SideLeft = styled.aside`
    padding: 30px 20px;

    > h2 {
        margin-bottom: 20px;
    }
`

export const LegendContainer = styled.ul`
    list-style: none;
    height: 180px;
    overflow-y: scroll;
`

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;

    > div {
        width: 45px;
        height: 45px;
        border-radius: 5px;
        background-color: ${props => props.color};
        font-size: 18px;
        line-height: 45px;
        text-align: center;
    }

    > span {
        margin: 0 15px;
    }
`
export const SideRigth = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;
`