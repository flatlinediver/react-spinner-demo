import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.palette.lightBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.sm}) {
    background: ${({ theme }) => theme.palette.lightGrey};
    min-width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
    height: unset;
    min-height: 120px;
  }
`;
export const InnerWrapper = styled.div`
  background: ${({ theme }) => theme.palette.white};
  border-radius: 0.5em;
  padding: 1em;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2em;
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.sm}) {
    box-shadow: none;
    background: none;
    width: 100%;
    height: 100%;
  }
`;
