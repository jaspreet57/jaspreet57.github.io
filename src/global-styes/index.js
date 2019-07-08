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

  p {
    font-size: 18px;
    line-height: 1.4em;
    letter-spacing: 0.1rem;
    text-align: justify;
    padding: 10px;
  }

  .underline {
    background-image: linear-gradient(to right, #f44336 75%, transparent 75%);
    background-position: 0 1.04em;
    background-repeat: repeat-x;
    background-size: 1px;
  }

  mark {
    padding: 2px 4px;
    font-size: 90%;
    color: #fff;
    background-color: #f44336;
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
    will-change: opacity;
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
