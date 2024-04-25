import styled from "styled-components";

export const Container = styled.div`
        grid-area: MH;
        
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.white};
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 50px;

        border-bottom: 1px solid ${(props) =>  props.theme.colors.gray } ;
`

export const Profile = styled.div`
        display: flex;
        flex-direction: column;
        color: ${props => props.theme.colors.white}
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``
