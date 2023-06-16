import { styled, css } from "styled-components";

export const Planet = styled.p<{ isSelected: boolean }>`
    ${({ theme }) => css`
        text-transform: uppercase;
        font-family: 'Barlow Condensed';
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 19px;
        letter-spacing: 2.7px;
        color: ${theme.colors.secondaryColor};
        height: 4rem;
    `} 


    cursor: pointer;
    border-bottom: 4px solid transparent;

    &:hover {
        border-bottom: 4px solid rgb(255, 255, 255, 0.5); 
    }
    
    ${({isSelected }) =>  isSelected && css`
        border-bottom: 4px solid white; 
        color: white;
    `}

    @media screen and (max-width: 760px) {
        padding: 15px 0px;
        line-height: 16.8px;
        letter-spacing: 2.36px;
        font-size: 1.4rem;
    }
`
export const Menu = styled.div`
    display: flex;
    gap: 3.6rem;
    align-items: center;

    @media screen and (max-width: 1310px) {
        justify-content: center;
        gap: 3rem;
    }

    @media screen and (max-width: 760px) {
        gap: 3.5rem;
        padding-top: 2.6rem;
    }
`
