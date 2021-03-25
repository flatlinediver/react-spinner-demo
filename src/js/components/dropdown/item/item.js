import React from 'react';
import { Wrapper } from './style';
import Check from './check';

export default ({onClick, children, active}) => (
    <Wrapper onClick={onClick}>
        <Check active={active}/>
        {children}
    </Wrapper>
)