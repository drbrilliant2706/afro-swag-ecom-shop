import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  lazy?: boolean;
  priority?: 'high' | 'low';
  blur?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  fallback = '/placeholder.svg',
  lazy = true,
  priority = 'low',
  blur = true,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState<string>(lazy ? '' : src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!lazy) {
      setImageSrc(src);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.01,
        rootMargin: '100px' // Start loading 100px before element comes into view
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src, lazy]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    setImageSrc(fallback);
  };

  return (
    <div ref={imgRef} className={cn('relative overflow-hidden', className)}>
      {isLoading && blur && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      {imageSrc && (
        <img
          src={hasError ? fallback : imageSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          loading={lazy ? 'lazy' : 'eager'}
          // @ts-ignore - fetchpriority is a valid HTML attribute
          fetchpriority={priority}
          decoding="async"
          className={cn(
            'transition-all duration-500 ease-in-out',
            isLoading ? 'opacity-0 scale-105 blur-sm' : 'opacity-100 scale-100 blur-0',
            className
          )}
          {...props}
        />
      )}
    </div>
  );
};
