import { Link, LinkProps } from 'react-router-dom';
import { prefetchRoute } from '@/utils/performance';
import { useRef } from 'react';

interface PrefetchLinkProps extends LinkProps {
  prefetchOnHover?: boolean;
}

export const PrefetchLink: React.FC<PrefetchLinkProps> = ({ 
  to, 
  prefetchOnHover = true,
  children,
  ...props 
}) => {
  const hasPrefetched = useRef(false);

  const handleMouseEnter = () => {
    if (prefetchOnHover && !hasPrefetched.current) {
      const path = typeof to === 'string' ? to : to.pathname || '/';
      prefetchRoute(path);
      hasPrefetched.current = true;
    }
  };

  return (
    <Link to={to} onMouseEnter={handleMouseEnter} {...props}>
      {children}
    </Link>
  );
};
