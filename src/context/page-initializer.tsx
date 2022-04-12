import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/router';

type PageStatus = 'LOADING' | 'READY';

interface PageInitializer {
  pageStatus: PageStatus;
}

const PageInitializer = createContext<PageInitializer>({
  pageStatus: 'READY',
});

export const PageInitializerProvider: FC = ({ children }) => {
  const [dom, handleDom] = useState<PageStatus>('LOADING');
  const [pageStatus, handlePageStatus] =
    useState<PageStatus>('READY');
  const router = useRouter();

  // TODO: fix first render for animations
  useEffect(() => {
    handleDom('READY');
  }, []);

  const handleRouteChangeStarted = () => {
    handlePageStatus('LOADING');
  };
  const handleRouteChangeFinished = () => {
    handlePageStatus('READY');
  };
  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStarted);
    router.events.on('routeChangeError', handleRouteChangeFinished);
    router.events.on(
      'routeChangeComplete',
      handleRouteChangeFinished
    );
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStarted);
      router.events.off(
        'routeChangeError',
        handleRouteChangeFinished
      );
      router.events.off(
        'routeChangeComplete',
        handleRouteChangeFinished
      );
    };
  }, []);

  return (
    <PageInitializer.Provider value={{ pageStatus }}>
      {dom === 'LOADING' ? null : <>{children}</>}
    </PageInitializer.Provider>
  );
};

export const usePageInitializer = () => useContext(PageInitializer);
