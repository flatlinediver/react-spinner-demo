import React, { FC } from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  width: 100vw;
  max-width: 330px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 3rem 0 0;
`;

export const Main: FC = ({ children }) => (
  <StyledMain>
    <h1>React Spinner</h1>
    <section>
      <p>Loading spinner based on Material-UI</p>
    </section>
    <hr />
    {children}
  </StyledMain>
);
