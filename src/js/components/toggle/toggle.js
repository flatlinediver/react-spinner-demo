import React from 'react';
import { Wrapper, Button, Circle } from './style';

export default ({bool = false, handleClick}) => (
    <Wrapper>
        <span>Thick</span>
        <Button onClick={handleClick}>
            <Circle bool={bool}/>
        </Button>
    </Wrapper>
);