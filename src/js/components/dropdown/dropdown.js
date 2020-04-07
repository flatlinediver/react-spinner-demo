import React, { useState, useEffect, useRef } from 'react';
import { Wrapper, Button, Content } from './style';
import Chevron from './chevron';

export default ({children, opened, setOpened, label}) => {
    const contentRef = useRef(null);
    const [ maxHeight, setMaxHeight ] = useState(0);
    useEffect(() => {
        setMaxHeight(opened ? contentRef.current.scrollHeight : 0)
    }, [opened])
    return (
        <Wrapper opened={opened}>
            <Button opened={opened} onClick={setOpened}>
                {label}
                <Chevron opened={opened}/>
            </Button>
            <Content maxHeight={maxHeight} ref={contentRef} opened={opened}>
                {children}
            </Content>
        </Wrapper>
    )
}