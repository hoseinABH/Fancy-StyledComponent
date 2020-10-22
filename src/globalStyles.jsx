import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
    box-sizing:border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #7f53ac;
}
h1 {
  margin: 32px 0;
  color: #fff;
  font-size: 24px;
}

`;

export default GlobalStyle;
