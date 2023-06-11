import styled, { css } from 'styled-components';

export const Container  = styled.div<{ background: string; }>`
    height: 100vh;
    ${({theme, background}) => css`
        background-image: url(${theme.background[background].desktop}) ;
        width: 100%;
        height: 100vh;
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

