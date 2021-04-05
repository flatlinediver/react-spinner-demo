import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import { SpinnerProvider } from '@flatlinediver/react-spinner';
import { useStore } from 'src/store';
import Main from 'src/presentation/main';
import Sidebar from 'src/presentation/sidebar';

export const Wrapper = styled.div`
  transition: ${({ theme }) => theme.transitions.default};
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: ${({ theme }) => theme.palette.lightGrey};
  position: relative;
  overflow-x: hidden;
`;

const Home: NextPage = () => {
  const { store } = useStore();
  return (
    <SpinnerProvider {...store}>
      <Wrapper>
        <Sidebar />
        <Main />
      </Wrapper>
    </SpinnerProvider>
  );
};

export default Home;
