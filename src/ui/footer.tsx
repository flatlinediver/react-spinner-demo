import { Link } from '@ui/custom-link';
import React, { FC } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  font-size: 0.8rem;
  width: 100vw;
  max-width: 330px;
  margin: 0 0 1.3rem;
  font-style: italic;
`;

export const Footer: FC = () => (
  <StyledFooter>
    Check it out on
    <Link
      fontSize={`.8rem`}
      label="@flatlinediver/react-spinner"
      external
      href={`https://www.npmjs.com/package/@flatlinediver/react-spinner`}
    >
      npm
    </Link>
    for all options
  </StyledFooter>
);
