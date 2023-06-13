import styled, { css } from "styled-components";

export const Text = styled.p`
    ${({ theme }) => css`
        font-family: ${theme.font.family.barlow};
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 3.2rem;
    `}

    @media screen and (max-width: 1310px) {
        font-size: 1.6rem;
        line-height: 2.8rem;
    }

    @media screen and (max-width: 760px) {
        font-size: 1.5rem;
        line-height: 2.5rem;
    }
`;