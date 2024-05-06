import styled from "styled-components";

export const Grid = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;
    /* AS: Aside
       MH: MainHeader
       CT: Content 
    */
    grid-template-areas: 
    'AS MH'
    'AS CT';
`