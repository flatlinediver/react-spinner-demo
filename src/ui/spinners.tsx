import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import Spinner from '@flatlinediver/react-spinner';

export const Spinners: FC = () => {
  const { palette } = useTheme();

  return (
    <section style={{ position: `relative`, alignItems: `center` }}>
      <p
        style={{
          fontStyle: `italic`,
          fontSize: `.8rem`,
          textAlign: `left`,
          marginBottom: `2rem`,
        }}
      >
        Trigger the theme toggle button on the up-right corner to see the spinner colors change
      </p>
      <div
        style={{
          display: `grid`,
          gridGap: `1rem`,
          gridTemplateColumns: `1fr 1fr 1fr`,
          alignItems: `end`,
        }}
      >
        <Spinner thick size={20} colors={palette.text} />
        <Spinner size={30} colors={[palette.text, palette.link]} />
        <Spinner size={50} colors={palette.link} />
      </div>
    </section>
  );
};
