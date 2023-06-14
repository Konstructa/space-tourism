import styled from 'styled-components'


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