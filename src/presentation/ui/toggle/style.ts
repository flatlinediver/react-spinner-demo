import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1em;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export const Button = styled.button`
  border: none;
  outline: none;
  width: 38px;
  height: 18px;
  border-radius: 32px;
  background: ${({ theme }) => theme.palette.white};
  display: block;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;
export const Circle = styled.div<{ bool: boolean }>`
  border-radius: 50%;
  transition: ${({ theme }) => theme.transitions.default};
  height: 13px;
  width: 13px;
  background: ${({ theme }) => theme.palette.darkBlue};
  display: block;
  transform: ${({ bool }) => (bool ? 'translateX(2.5px)' : 'translateX(calc(100% + 8.5px))')};
  opacity: ${({ bool }) => (bool ? 1 : 0.4)};
`;
