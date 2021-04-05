import styled from 'styled-components';

export const Wrapper = styled.button`
  background: ${({ theme }) => theme.palette.white};
  border-radius: 0.5em;
  padding: 1em;
  width: 100%;
  color: ${({ theme }) => theme.palette.primaryText};
  border-radius: 0;
  padding: 2em;
  outline: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.lightBlue};
  text-align: left;
  cursor: pointer;
  position: relative;
`;

export const Dot = styled.span<{ bg: string }>`
  background: ${({ bg }) => bg};
  width: 15px;
  height: 15px;
  display: inline-block;
  border-radius: 10px;
  margin-right: 0.5em;
`;
export const Svg = styled.svg<{ active?: boolean }>`
  position: absolute;
  top: 50%;
  right: 1em;
  transform: translateY(-50%);
  transition: ${({ theme }) => theme.transitions.default};
  opacity: ${({ active }) => (active ? 1 : 0)};
  path {
    fill: ${({ theme }) => theme.palette.orange};
  }
`;
