import styled, { css } from 'styled-components';

export const Container  = styled.div<{  background: string; }>`
    height: 100vh;
    background-color: green;
    ${({theme, background}) => css`
        background-image: url(../../assets/${background}/background-${background}-desktop.jpg) ;
        width: 100%;
        min-height: 100vh;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    `}
`;

