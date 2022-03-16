import React from 'react';
import Head from 'next/head';
import { Header } from '@ui/header';
import { Main } from '@ui/main';
import { Footer } from '@ui/footer';
import Spinner from '@flatlinediver/react-spinner';
import { useTheme } from 'styled-components';

const Home = () => {
  const { palette } = useTheme();
  return (
    <>
      <Head>
        <title>@flatlinediver/react-spinner</title>
        <meta
          name="Description"
          content="@flatlinediver/react-spinner Demo. Highly customizable React Spinner"
        />
      </Head>
      <Header />
      <Main>
        <section style={{ position: `relative`, alignItems: `center` }}>
          <p
            style={{
              fontStyle: `italic`,
              fontSize: `.8rem`,
              textAlign: `left`,
              marginBottom: `2rem`,
            }}
          >
            Trigger the theme toggle button on the up-right corner to see the spinner colors change
          </p>
          <Spinner size={50} colors={[palette.text, palette.link]} />
        </section>
        <hr />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
