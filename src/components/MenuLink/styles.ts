import styled from 'styled-components'

export const MenuLink = styled.li`
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

    &:hover {
        border-bottom: 2px solid rgba(255, 255, 255, 0.5);
    }

    @media screen and (max-width: 1310px) {
        &:before {
            display: none;
        }

        font-size: 14px;
    }
`