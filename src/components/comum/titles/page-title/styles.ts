import styled from "styled-components";

export const Title = styled.h3`
    text-transform: uppercase;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 2.8rem;
    letter-spacing: 4.725px;
    font-weight: 400;
    font-style: normal;
    line-height: 3.4rem;

    & > span {
        color: rgb(255, 255, 255, 0.75); 
        font-weight: bold
    }

    @media screen and (max-width: 1310px) { 
        font-size: 2rem;
        line-height: 24px;
        letter-spacing: 3.375px;
    }

    @media screen and (max-width: 760px) { 
        font-size: 1.6rem;
        align-self: center
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-left: 12.5rem;

    @media screen and (max-width: 1310px) {
        margin-left: 4rem;
    }

    @media screen and (max-width: 760px) { 
        margin-left: 0;
        justify-content: center
    }

`;