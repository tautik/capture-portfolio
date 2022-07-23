import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body{
        background: #1b1b1b;
        font-family:'inter',sans-serif;
    }

    button {
        font-weight: bold;
        font-size: 1.1rem;
        padding: 1rem 2rem;
        background-color: transparent;
        border: 3px solid #23d997;
        cursor: pointer;
        color: white;
        transition: all 0.5s ease;
        font-family:'Inter',sans-serif;

        &:hover{
            background-color: #1cb77e;
            color:white;
        }
    }
    h2{
        font-weight: lighter;
        font-size: 3rem;
    }
    span{
        color: #1cb77e;
        font-weight: bold;
    }
    p{
        padding: 2rem 0rem;
        font-size: 1.2rem;
    }

    h3{
        font-size: 1.2rem;
        font-weight: bold; 
    }

`;

export default GlobalStyle;
