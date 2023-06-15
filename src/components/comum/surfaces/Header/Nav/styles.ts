import styled from 'styled-components'
import { NavLink } from "react-router-dom";

export const NavItem = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    color: #FFFFFF;
    height: 98%;
    cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
    letter-spacing: 2.7px;
    text-decoration: none;
    text-transform: uppercase;

    & > p > span {
        font-weight: 700;
    }

    @media screen and (max-width: 1310px) {
        & > p > span {
            display: none;
        }

        font-size: 1.4rem;
    }
`

export const NavBarContainer = styled.div`

`

export const NavBar = styled.div`

`