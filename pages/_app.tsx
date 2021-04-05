import React, { FC } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { PageInitializer } from '@utils';
import { theme, GlobalStyles } from '@stylesConfig';
import { StoreProvider } from '../src/store';
import { Container } from '@ui';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <PageInitializer>
    <Head>
      <title>@flatlinediver/react-spinner</title>
      <meta name="viewport" content="width=device-width, user-scalable=yes" />
      <meta
        name="Description"
        content="@flatlinediver/react-spinner Demo. Highly customizable React Spinner"
      />
    </Head>
    <ThemeProvider theme={theme}>
      <GlobalStyles>
        <StoreProvider>
          <Container>
            <Component {...pageProps} />
          </Container>
        </StoreProvider>
      </GlobalStyles>
    </ThemeProvider>
  </PageInitializer>
);

export default MyApp;
