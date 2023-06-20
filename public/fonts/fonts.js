import { createGlobalStyle } from "styled-components";

import BebasNeueRegularWoff from "/public/images/fonts/BebasNeue-Regular.woff";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Bebas Neue';
    src: local('Bebas Neue'), local('BebasNeue'),
      url(${BebasNeueRegularWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

`;
