import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    font-size:16px;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font: 400 1rem 'Roboto',sans-serif;
    background: ${({theme})=>theme.colors.background};
    overflow-x: hidden;
  }


`;


export default GlobalStyles;
