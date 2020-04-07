import React from 'react';
import { Wrapper, Input } from './style';

export default props => (
    <Wrapper>
        <span>Size</span>
        <Input type="range" {...props} />
    </Wrapper>
);