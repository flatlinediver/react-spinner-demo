import React, { FC } from 'react';
import { Wrapper, Input } from './style';

interface Slider {
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  min: number;
  max: number;
}

const Slider: FC<Slider> = (props) => (
  <Wrapper>
    <span>Size</span>
    <Input type="range" {...props} />
  </Wrapper>
);

export default Slider;
