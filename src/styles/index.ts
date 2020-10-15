import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
    height: 100%;

    @media (min-width: 1981px) {
      font-size: 80%;
    };
  }

  body {
    height: auto;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
    background-image: url('https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png');
    background-size: cover;
    background-position: center top;
  }

  body, #root {
    min-height: 100vh;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  #root {
    height: 100%
  }

  body, input, button {
    font: 1.6rem 'Ubuntu', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.48;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  a {
    text-decoration: none;
    background: none;
    font-weight: 500;
    cursor: pointer;
    border: 0;
    transition: 180ms ease-in-out;
  }

  button {
    cursor: pointer;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    list-style: none;
    text-align: left;
    padding: 0;
  }
`;
