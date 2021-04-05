import React, { FC } from 'react';
import { Svg } from './style';

const Check: FC<{ active?: boolean }> = ({ active }) => (
  <Svg active={active} width="20" viewBox="0 0 32 32">
    <path
      clipRule="evenodd"
      d="M27.704,8.397c-0.394-0.391-1.034-0.391-1.428,0 
            L11.988,22.59l-6.282-6.193c-0.394-0.391-1.034-0.391-1.428,0c-0.394,0.391-0.394,1.024,0,1.414l6.999,6.899 
            c0.39,0.386,1.039,0.386,1.429,0L27.704,9.811C28.099,9.421,28.099,8.787,27.704,8.397C27.31,8.006,28.099,8.787,27.704,8.397z"
      fillRule="evenodd"
    />
  </Svg>
);

export default Check;
