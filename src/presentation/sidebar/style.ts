import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 300px;
  min-height: 100vh;
  background: ${({ theme }) => theme.palette.darkBlue};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 2em 1em 1em;
  color: white;
  z-index: 1;
  overflow-y: scroll;
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.sm}) {
    min-width: 100%;
    padding-bottom: 130px;
  }
`;
