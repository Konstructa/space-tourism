import styled, { css } from 'styled-components'


export const Destination = styled.div`
    animation: 1s ease-out 0s 1 slideInFromLeft; 
    
    @keyframes slideInFromLeft {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0);
        }
    }


    @media screen and (max-width: 1310px) {
   
    }

`;

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

export const MenuDestination = styled.div`
    display: flex;
    gap: 40px;
    align-items: center;
    text-transform: uppercase;
    font-family: 'Barlow Condensed';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    color: #D0D6F9;

    @media screen and (max-width: 1310px) {
        justify-content: center;
        gap: 1.0rem;
    }

    @media screen and (max-width: 760px) {
        gap: 2.5rem;
    }
`


