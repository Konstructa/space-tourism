import styled from 'styled-components'
import { Container } from '../../components/Container/styles';

export const Home = styled.div`
    display: flex;
    width: 75vw;
    margin: auto;
    padding-top: 18vh;
    justify-content: space-between;
    align-items: flex-end;

    
    ${Container} {
        background-color: blue
    }

    @media screen and (max-width: 1310px) {
        flex-direction: column;
        align-items: center;
        width: 90%;
        align-items: center;
        padding-top: 20vh;
        gap: 100px;
    }

`;