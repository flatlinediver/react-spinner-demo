import React, { FC, useEffect, useState } from 'react';

const PageInitializer: FC = ({ children }) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  if (!ready) return null;
  return <>{children}</>;
};

export default PageInitializer;
