import styled from 'styled-components'

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const H5 = styled.h5`
    font-family: 'Barlow Condensed';
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.7rem;
    letter-spacing: 2.3625px;
    color: #D0D6F9;
    margin: 0;

    @media screen and (max-width: 760px) {
        font-size: 1.4rem;
    }
`;
export const P = styled.p`
    font-family: 'Bellefair';
    font-weight: 400;
    font-size: 2.8rem;
    line-height: 3.2rem;
    text-transform: uppercase;
    margin: 0;

    @media screen and (max-width: 760px) {
        font-size: 2.8rem;
    }
`;

export const PlanetDistance = styled.div`
    display: flex;
    align-items: center;
    gap: 79px;
    text-transform: uppercase;
    border-top: 1px solid #383B4B;
    padding-top: 8%;
    margin-top: 4rem;

    @media screen and (max-width: 1310px) {
        justify-content: center;
        padding-top: 3%;
    }

    @media screen and (max-width: 760px) {
        flex-direction: column;
        gap: 35px;
        padding-top: 40px;
    }

`;

