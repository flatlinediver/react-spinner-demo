import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    transition:${({ theme }) => theme.transition(`background-color`)};
    color: ${({ theme }) => theme.palette.text};
    background-color: ${({ theme }) => theme.palette.bg};
    font-family: 'Poppins';
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
  }

  h1 {
    width: 100%;
    font-size: 1.6rem;
    margin-bottom: 0;
  }
  h2 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  hr {
    opacity: .1;
    border: 1px solid ${({ theme }) => theme.palette.text};
    margin: 0 0 1.3rem;
    width: 100%;
  }
  section {
    width: 100%;
    margin: 0 0 1.3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  p {
    line-height: 1.5;
    margin: .6rem 0;
    &:last-of-type {
      margin: .6rem 0 0;
    }
  }
  .visually-hidden {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap; /* added line */
  }
  h1, h2, p, ul, footer {
    @media (max-width: 24rem) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  hr {
    @media (max-width: 24rem) {
      width: calc(100% - 2rem);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

`;

export const GlobalStyles: FC = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);
