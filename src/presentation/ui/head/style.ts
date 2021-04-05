import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: row;
  align-items: start;
  justify-items: start;
  grid-gap: 1em;
  margin-bottom: 4em;
`;
export const Title = styled.h1`
  font-size: 1em;
  text-align: left;
  font-weight: normal;
  fill: ${({ theme }) => theme.palette.lightBlue};
  color: ${({ theme }) => theme.palette.lightBlue};

  span {
    display: inline;
    font-weight: bold;
  }
`;
export const Icons = styled.div`
  width: max-content;
  display: grid;
  grid-auto-flow: column;
  align-items: end;
  justify-items: center;
  grid-gap: 1em;
`;
export const Link = styled.a`
  border: none;
  outline: none;
  background: none;
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.default};
  cursor: pointer;
  path {
    transition: ${({ theme }) => theme.transitions.default};
    fill: ${({ theme }) => theme.palette.orange};
  }
  &:hover {
    path {
      fill: ${({ theme }) => theme.palette.lightBlue};
    }
  }
`;
