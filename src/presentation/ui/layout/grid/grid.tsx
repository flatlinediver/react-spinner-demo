import React, { FC } from 'react';
import { Wrapper, IWrapper } from './styled';

interface Grid extends IWrapper {}

const Grid: FC<Grid> = ({ children, cls = 12 }) => {
  return <Wrapper cls={cls}>{children}</Wrapper>;
};

export default Grid;
