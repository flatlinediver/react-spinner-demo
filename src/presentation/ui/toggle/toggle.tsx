import React, { FC } from 'react';
import { Wrapper, Button, Circle } from './style';

interface Toogle {
  bool?: boolean;
  handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Toggle: FC<Toogle> = ({ bool = false, handleClick }) => (
  <Wrapper>
    <span>Thick</span>
    <Button name="spinner thickness toggle" onClick={handleClick}>
      <Circle bool={bool} />
    </Button>
  </Wrapper>
);

export default Toggle;
