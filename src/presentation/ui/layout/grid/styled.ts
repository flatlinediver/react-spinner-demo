import styled from 'styled-components';

export interface IWrapper {
  cls?: number;
}

export const Wrapper = styled.div<IWrapper>`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(${({ cls }) => `${cls}, 1fr`});
  align-items: start;
  justify-items: center;
  grid-gap: ${({ theme }) => `${theme.shapes.spacing.big}`};
  padding: ${({ theme }) => `${theme.shapes.spacing.big}`};
  @media (max-width: ${({ theme }) => `${theme.breakpoints.sm}`}) {
    padding: ${({ theme }) => `${theme.shapes.spacing.default}`};
    grid-template-columns: 1fr;
  }
`;
