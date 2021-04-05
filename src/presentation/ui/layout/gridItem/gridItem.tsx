import React, { FC } from 'react';
import { Wrapper, IWrapper } from './styled';

interface GridItem extends IWrapper {}

const GridItem: FC<GridItem> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default GridItem;
