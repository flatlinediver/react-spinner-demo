import React, { FC } from 'react';
import { Wrapper } from './styled';

const Hero: FC = ({ children }) => {
  return <Wrapper role="main">{children}</Wrapper>;
};

export default Hero;
