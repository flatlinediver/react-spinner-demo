import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Input = styled.input`
  border: 0;
  outline: none;
  -webkit-appearance: none;
  background: ${({ theme }) => theme.palette.white};
  height: 7px;
  border-radius: 3.5px;
  &::-moz-range-track {
    background: ${({ theme }) => theme.palette.white};
    border: 0;
    outline: none;
    height: 7px;
    border-radius: 3.5px;
  }
  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.default};
    border: 3px solid ${({ theme }) => theme.palette.darkBlue};
    &:hover {
      border: 3px solid ${({ theme }) => theme.palette.white};
    }
  }
  &::-moz-range-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${({ theme }) => theme.palette.white};
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.default};
    border: 3px solid ${({ theme }) => theme.palette.darkBlue};
    &:hover {
      border: 3px solid ${({ theme }) => theme.palette.white};
    }
  }
  &:active::-moz-range-thumb {
  }
`;
