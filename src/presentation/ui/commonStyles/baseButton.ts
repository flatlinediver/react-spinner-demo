import styled from 'styled-components';

export const BaseButton = styled.button`
  height: max-content;
  width: max-content;
  display: block;

  // Typography
  font-family: ${({ theme }) => theme.typography.button.fontFamily};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  font-size: ${({ theme }) => theme.typography.button.fontSize};
  line-height: ${({ theme }) => theme.typography.button.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.button.letterSpacing};
  text-transform: ${({ theme }) => theme.typography.button.textTransform};
`;

export default BaseButton;
