import styled from 'styled-components';

export const Container = styled.div`
    > select {
        padding: 7px 10px;
        margin-right: 20px;
        border-radius: 5px;
        color: ${props => props.theme.colors.black};
    }

    > select > option {
        color: ${props => props.theme.colors.black};
    }

`