import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 1em;
`;
export const Content = styled.div<{ maxHeight: number }>`
  width: 100%;
  z-index: 2;
  will-change: max-height;
  transition: ${({ theme: { transitions } }) =>
    `max-height ${transitions.easing.easeInOut} ${transitions.duration.standard}`};
  max-height: ${({ maxHeight }) => `${maxHeight}px`};
`;
export const Button = styled.button<{ opened: boolean }>`
  color: ${({ theme }) => theme.palette.primaryText};
  background: ${({ theme }) => theme.palette.white};
  border-radius: 0.5em;
  box-shadow: ${({ theme }) => theme.shadows[5]};
  padding: 1em;
  transition: ${({ theme }) => theme.transitions.default};
  width: 100%;
  padding: 2em;
  outline: none;
  border: none;
  text-transform: capitalize;
  border-bottom: 2px solid ${({ opened, theme }) => (opened ? 'transparent' : theme.palette.white)};
  border-radius: ${({ opened }) => (opened ? '.2em .2em 0 0' : '.2em')};
  z-index: 3;
  text-align: left;
  cursor: pointer;
  position: relative;
`;
export const Svg = styled.svg<{ opened: boolean }>`
  position: absolute;
  top: 50%;
  right: 1em;
  transform: translateY(-50%) rotate(${({ opened }) => (opened ? '540deg' : 0)});
  transition: ${({ theme }) => theme.transitions.default};
  line {
    stroke: ${({ theme }) => theme.palette.darkBlue};
  }
`;
