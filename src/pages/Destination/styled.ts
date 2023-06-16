import styled from 'styled-components'
import { Title as ContentTitle} from '../../components/comum/titles/content-title/styles';
import { Text } from '../../components/BodyText/styles';


export const Planet = styled.p`
    padding: 15px 10px;
    cursor: pointer;
    border-bottom: 4px solid transparent;

    &:target {
        color: blue
    }

    &:hover {
        border-bottom: 4px solid rgb(255, 255, 255, 0.5); 
    }

    @media screen and (max-width: 760px) {
        padding: 15px 0px;
    }
`

export const PlanetDescription = styled.div`
    ${ContentTitle} {
        font-size: 10rem;
        margin: 3rem 0 0 0;
        padding-top: 5rem;
    }

    ${Text} {
        padding-top: 5rem
    }

    @media screen  and (max-width: 1310px) {

        ${ContentTitle} {
            font-size: 8rem;
            padding-top: 3rem;
        }

        ${Text} {
            padding-top: 3rem;
        }
    }
`;


