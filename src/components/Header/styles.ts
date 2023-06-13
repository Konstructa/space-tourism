import styled from 'styled-components'

export const Header = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin-left: 3.5rem;
     padding-top: 40px;
`

export const Logo = styled.img`
     height: 40px;
     width: 40px;
`

export const Trace = styled.div`
     height: 1px;
     width: 38vw;
     background-color: #FFFFFF;
     opacity: 0.25;
     position: relative;
     left: 6vw;
     z-index: 2;

     @media screen and (max-width: 1310px) {
          display: none;
     }
`