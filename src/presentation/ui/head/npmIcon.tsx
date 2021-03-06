import React, { FC } from 'react';
import { Link } from './style';

const NpmIcon: FC = () => (
  <Link
    title="Link to module NPM page"
    aria-label="Link to module NPM page"
    href="https://www.npmjs.com/package/@flatlinediver/react-spinner"
  >
    <svg height="16" viewBox="0 0 780 250">
      <path
        d="M240,250h100v-50h100V0H240V250z
                M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z
                M0,200h100V50h50v150h50V0H0V200z"
      />
    </svg>
  </Link>
);

export default NpmIcon;
