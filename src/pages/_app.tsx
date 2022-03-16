import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import { GlobalStyles } from '@styles/global-styles';
import { PageInitializerProvider } from '@context/page-initializer';
import { ThemeModeProvider } from '@context/theme-mode';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeModeProvider
    render={(mode) => (
      <ThemeProvider theme={theme(mode)}>
        <GlobalStyles>
          <PageInitializerProvider>
            <Component {...pageProps} />
          </PageInitializerProvider>
        </GlobalStyles>
      </ThemeProvider>
    )}
  />
);

export default MyApp;
