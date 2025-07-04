
import React, { useEffect, useState } from 'react';

interface DropAnimationProps {
  children: React.ReactNode;
  delay?: number;
  dropHeight?: number;
  duration?: number;
  className?: string;
}

export const DropAnimation: React.FC<DropAnimationProps> = ({
  children,
  delay = 0,
  dropHeight = 50,
  duration = 0.6,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all ease-out ${className}`}
      style={{
        transform: isVisible ? 'translateY(0)' : `translateY(-${dropHeight}px)`,
        opacity: isVisible ? 1 : 0,
        transitionDuration: `${duration}s`,
        transitionTimingFunction: isVisible 
          ? 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' // bounce effect
          : 'ease-out'
      }}
    >
      {children}
    </div>
  );
};

interface DropAnimationGroupProps {
  children: React.ReactNode[];
  staggerDelay?: number;
  dropHeight?: number;
  duration?: number;
  className?: string;
}

export const DropAnimationGroup: React.FC<DropAnimationGroupProps> = ({
  children,
  staggerDelay = 0.1,
  dropHeight = 50,
  duration = 0.6,
  className = ''
}) => {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <DropAnimation
          key={index}
          delay={index * staggerDelay * 1000}
          dropHeight={dropHeight}
          duration={duration}
          className={className}
        >
          {child}
        </DropAnimation>
      ))}
    </>
  );
};
