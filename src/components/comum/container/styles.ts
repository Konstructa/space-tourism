import styled, { css } from 'styled-components';

export const Container  = styled.div<{ background: string; }>`
    min-height: 100vh;
    transition: background 1s ease-in-out;

    ${({theme, background}) => css`
        background-image: url(${theme.background[background].desktop}) ;
        min-height: 100vh;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    `}


    @media screen and (max-width: 1310px) { 
        ${({ theme, background }) => css`
            background-image: url(${theme.background[background].tablet}) ;
        `};
       
    }

    @media screen and (max-width: 760px) { 
        ${({ theme, background }) => css`
             background-image: url(${theme.background[background].mobile}) ;
        `};
       
    }
`;

