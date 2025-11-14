import { useEffect, useRef } from 'react';
import { prefetchRoute } from '@/utils/performance';

export const usePrefetchRoute = (path: string, enabled = true) => {
  const hasPrefetched = useRef(false);

  useEffect(() => {
    if (enabled && !hasPrefetched.current) {
      prefetchRoute(path);
      hasPrefetched.current = true;
    }
  }, [path, enabled]);
};

export const usePrefetchOnHover = () => {
  const handleMouseEnter = (path: string) => {
    prefetchRoute(path);
  };

  return { onMouseEnter: handleMouseEnter };
};
