import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/poppins-v15-latin-regular.eot');
    src: local(''),
      url('/fonts/poppins-v15-latin-regular.eot?#iefix') format('embedded-opentype'),
      url('/fonts/poppins-v15-latin-regular.woff2') format('woff2'),
      url('/fonts/poppins-v15-latin-regular.woff') format('woff'),
      url('/fonts/poppins-v15-latin-regular.ttf') format('truetype'),
      url('/fonts/poppins-v15-latin-regular.svg#Poppins') format('svg');
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/poppins-v15-latin-700.eot');
    src: local(''),
      url('/fonts/poppins-v15-latin-700.eot?#iefix') format('embedded-opentype'),
      url('/fonts/poppins-v15-latin-700.woff2') format('woff2'),
      url('/fonts/poppins-v15-latin-700.woff') format('woff'),
      url('/fonts/poppins-v15-latin-700.ttf') format('truetype'),
      url('/fonts/poppins-v15-latin-700.svg#Poppins') format('svg');
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.typography.root.fontFamily};
  }
  body {
    font-family: ${({ theme }) => theme.typography.root.fontFamily};
    font-size: ${({ theme }) => theme.typography.root.fontSize};
    color: ${({ theme }) => theme.palette.primaryText};
    background-color: ${({ theme }) => theme.palette.white};
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  input, button {
    border: none;
  }
  button:focus:not(:focus-visible) {
    outline: none;
  }
  button:focus-visible {
    outline: 1px solid ${({ theme }) => theme.palette.yellow};
  }
`;

const GlobalStyles: FC = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

export default GlobalStyles;
