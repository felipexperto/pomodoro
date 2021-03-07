import { createGlobalStyle } from 'styled-components';
import theme from 'styles/Themes';

const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-family: ${theme.main.fonts.family};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: geometricPrecision;
  }

  html,
  body,
  #root {
    height: 100%;
    width: 100%;
  }

  html {
    font-size: 16px;
  }

  body {
    background-color: ${theme.main.colors.purple};
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
