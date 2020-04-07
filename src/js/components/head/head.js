import React from 'react'
import NpmIcon from './npmIcon';
import GithubIcon from './githubIcon';
import { Wrapper, Title, Icons } from './style'


export default ({}) => (
    <Wrapper>
        <Title>@flatlinediver/<span>react-spinner</span></Title>
        <Icons>
            <GithubIcon />
            <NpmIcon />
        </Icons>
    </Wrapper>
)