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
    <label id="range-label">Size</label>
    <Input aria-labelledby="range-label" type="range" {...props} />
  </Wrapper>
);

export default Slider;
