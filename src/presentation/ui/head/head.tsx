import React, { FC } from 'react';
import NpmIcon from './npmIcon';
import GithubIcon from './githubIcon';
import { Wrapper, Title, Icons } from './style';

const Head: FC = () => (
  <Wrapper>
    <Title>
      @flatlinediver/<span>react-spinner</span>
    </Title>
    <Icons>
      <GithubIcon />
      <NpmIcon />
    </Icons>
  </Wrapper>
);

export default Head;
