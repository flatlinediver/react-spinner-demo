import styled from 'styled-components';

export interface IWrapper {
  gridColumn?: string;
  gridRow?: string;
}

export const Wrapper = styled.div<IWrapper>`
  width: 100%;
  grid-row: ${({ gridRow }) => gridRow || 'auto'};
  grid-column: ${({ gridColumn }) => gridColumn || 'auto'};
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-column: auto;
  }
`;
