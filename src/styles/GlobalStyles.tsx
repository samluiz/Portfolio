import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  body {
    background-color: #696969;
    color: white;
    min-height: calc(100vh * 6);
    font-family: Sen, 'sans-serif';
    font-smooth: antialised;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
    margin: 0;
        padding: 0;
        user-select: none;
  }

  a {
    color: white;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`
