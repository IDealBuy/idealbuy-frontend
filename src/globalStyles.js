import { createGlobalStyle } from 'styled-components'
import KarlaRegular from './assets/fonts/Karla-Regular.ttf'
import KarlaBold from './assets/fonts/Karla-Bold.ttf'
import KarlaItalic from './assets/fonts/Karla-Italic.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
        font-family: 'Karla';
        src:url(${KarlaRegular}) format('ttf');
        font-weight: normal;
        font-style: normal;
    }
  @font-face {
        font-family: 'Karla';
        src:url(${KarlaBold}) format('ttf');
        font-weight: bold;
        font-style: normal;
    }
  @font-face {
        font-family: 'Karla';
        src:url(${KarlaItalic}) format('ttf');
        font-weight: normal;
        font-style: italic;
    }

  :root{
      --primary-color: #E63946;
      --primary-color50: #F39BA2;
      --secondary-color:#1D3557;
      --secondary-color50:#6C95CE;
      --background-color:#F1FAEE;
      --background-color50:#F8FDF7;
      --primary-font:"Karla", sans-serif;

  }

  *{
    box-sizing:border-box;

  }
  body {
    margin: 0;
    padding: 0;
    font-family: var(--primary-font);
  }

  button{
    color:white;
    &:focus{
      outline:none;
    }
  }
  
 
`

export default GlobalStyle
