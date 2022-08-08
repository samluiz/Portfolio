import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  body {
    background-color: #000000;
    color: white;
    min-height: fit-content;
    font-family: Sen, 'sans-serif';
    font-smooth: antialised;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }

  html {
    scroll-behavior: smooth;
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

  /* Hide scrollbar for Chrome, Safari and Opera */
  body::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  body {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
`
