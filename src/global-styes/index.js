/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #333;
  }

  .fullpage-slide {
    font-size: 24px;
  }

  mark {
    padding: 2px 4px;
    font-size: 90%;
    color: #fff;
    background-color: #333;
    border-radius: 3px;
    -webkit-box-shadow: inset 0 -1px 0 rgba(0,0,0,.25);
    box-shadow: inset 0 -1px 0 rgba(0,0,0,.25);
  }

  .page {
    position: relative;
  }

  .page-enter {
    opacity: 0;
  }

  .page-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }

  .page-exit {
    opacity: 1;
  }

  .page-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
`;

export default GlobalStyle;
