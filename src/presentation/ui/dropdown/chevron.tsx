import React, { FC } from 'react';
import { Svg } from './style';

const Chevron: FC<{ opened: boolean }> = ({ opened }) => (
  <Svg opened={opened} width="16" viewBox="0 0 32 32">
    <line
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2px"
      x1="16"
      x2="7"
      y1="20.5"
      y2="11.5"
    />
    <line
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2px"
      x1="25"
      x2="16"
      y1="11.5"
      y2="20.5"
    />
  </Svg>
);

export default Chevron;
