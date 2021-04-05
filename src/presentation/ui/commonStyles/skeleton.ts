import styled, { DefaultTheme, keyframes } from 'styled-components';

interface SkeletonInterface {
  hasLoaded?: boolean;
}

const blink = (theme: DefaultTheme) => keyframes`
  from {
    background-color: transparent;
  }
  to {
    background-color: ${theme.palette.primary};
  }
`;

export default styled.div<SkeletonInterface>`
  position: relative;
  z-index: 2;
  &:after {
    display: flex;
    opacity: ${({ hasLoaded }) => (!hasLoaded ? 1 : 0)};
    transition: ${({ theme }) => theme.transitions.default};
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    background: red;
    animation: ${({ theme }) => blink(theme)} 1s linear infinite alternate;
    z-index: 1;
  }
`;
