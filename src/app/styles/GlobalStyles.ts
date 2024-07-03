import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: Tahoma, Geneva, Verdana, sans-serif;
  }

  h1 {
    font-size: 60px;
    font-weight: 700;
    line-height: 72px;
    margin: 0;
  }

  h2 {
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
    margin: 0;
  }

  h3 {
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
    margin: 0;
  }

  a, p {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    margin: 0;
  }

  span {
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    margin: 0;
  }
`;

export default GlobalStyles;
