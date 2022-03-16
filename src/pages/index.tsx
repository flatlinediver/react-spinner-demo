import React from 'react';
import Head from 'next/head';
import { Header } from '@ui/header';
import { Main } from '@ui/main';
import { Footer } from '@ui/footer';
import { Spinners } from '@ui/spinners';

const Home = () => (
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
      <Spinners />
    </Main>
    <hr />
    <Footer />
  </>
);

export default Home;
