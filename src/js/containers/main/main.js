import React, { useContext } from 'react';
import Spinner from '@flatlinediver/react-spinner';
import { ConfigContext } from '../../utils/configContext';
import { Wrapper, InnerWrapper } from './style';

export default () => {
    const {spinnerProps} = useContext(ConfigContext)
    return (
        <Wrapper>
            <InnerWrapper>
                <Spinner {...spinnerProps}/>
            </InnerWrapper>
        </Wrapper>
    )
}