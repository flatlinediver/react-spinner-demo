import React, { FC } from 'react';
import styled from 'styled-components';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { StyledLinkProps, linkStyles } from '@styles/common-styles';

const StyledLink = styled.a<StyledLinkProps>`
  ${({ color, asButton, fontSize }) => linkStyles({ color, asButton, fontSize })};
`;

interface LinkProps extends NextLinkProps, StyledLinkProps {
  href: string;
  label: string;
  external?: boolean;
}

export const Link: FC<LinkProps> = ({
  label,
  external,
  children,
  asButton,
  color,
  fontSize,
  ...rest
}) => {
  const additionalProps = external
    ? {
        target: `_blank`,
        rel: `noreferrer`,
        'aria-label': `${label} (opens in new window)`,
      }
    : { 'aria-label': `${label}` };

  return (
    <NextLink {...rest}>
      <StyledLink
        href={rest.href}
        {...additionalProps}
        asButton={asButton}
        color={color}
        fontSize={fontSize}
      >
        {children}
      </StyledLink>
    </NextLink>
  );
};
