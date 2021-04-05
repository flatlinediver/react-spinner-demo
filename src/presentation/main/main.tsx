import React, { FC } from 'react';
import Spinner from '@flatlinediver/react-spinner';
import { Wrapper, InnerWrapper } from './style';

const Main: FC = () => (
  <Wrapper>
    <InnerWrapper>
      <Spinner />
    </InnerWrapper>
  </Wrapper>
);

export default Main;
