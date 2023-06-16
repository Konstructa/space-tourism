import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Barlow', sans-serif;
        font-family: 'Barlow Condensed', sans-serif;
        font-family: 'Bellefair', serif;
        color: #FFFFFF;
    }

    html {
        font-size: 62.5%
    }


    ::-webkit-scrollbar {
    width: 10px;
    }


    ::-webkit-scrollbar-track {
        background: #0B0D17; 
    }
    

    ::-webkit-scrollbar-thumb {
        background: #FFF; 
        border-radius: 10px;
    }


    ::-webkit-scrollbar-thumb:hover {
    background: #555; 
    }
`;