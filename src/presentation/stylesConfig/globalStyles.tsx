import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
