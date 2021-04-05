import styled from 'styled-components';

export const Wrapper = styled.main`
  padding-top: ${({
    theme: {
      shapes: { header, spacing },
    },
  }) => `calc(${header.height} + ${spacing.big})`};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${({ theme }) => `${theme.breakpoints.sm}`}) {
    padding-top: ${({
      theme: {
        shapes: { header, spacing },
      },
    }) => `calc(${header.height} + ${spacing.default})`};
  }
`;
