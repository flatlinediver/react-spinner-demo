import React, { useState, useEffect, useRef, FC } from 'react';
import { Wrapper, Button, Content } from './style';
import Chevron from './chevron';

interface Dropdown {
  opened: boolean;
  setOpened: () => void;
  label: string;
}

const Dropdown: FC<Dropdown> = ({ children, opened, setOpened, label }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [maxHeight, setMaxHeight] = useState(0);
  useEffect(() => {
    setMaxHeight(opened && !!contentRef.current ? contentRef?.current?.scrollHeight : 0);
  }, [opened, contentRef.current]);
  return (
    <Wrapper>
      <Button aria-label={`${label} option`} opened={opened} onClick={setOpened}>
        {label}
        <Chevron opened={opened} />
      </Button>
      <Content maxHeight={maxHeight} ref={contentRef}>
        {children}
      </Content>
    </Wrapper>
  );
};

export default Dropdown;
