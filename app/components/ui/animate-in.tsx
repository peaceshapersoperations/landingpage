'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  animation?:
    | 'fadeIn'
    | 'slideUp'
    | 'slideDown'
    | 'slideLeft'
    | 'slideRight'
    | 'scaleIn'
    | 'rotateIn';
  distance?: number;
  scale?: number;
  rotate?: number;
  easing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
}

const AnimateIn = ({
  children,
  className,
  delay = 0,
  duration = 400,
  threshold = 0.1,
  animation = 'fadeIn',
  distance = 30,
  scale = 0.9,
  rotate = 10,
  easing = 'ease-out',
}: AnimateInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -30px 0px',
      },
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getInitialStyles = () => {
    switch (animation) {
      case 'fadeIn':
        return {
          opacity: 0,
          transform: 'none',
        };
      case 'slideUp':
        return {
          opacity: 0,
          transform: `translateY(${distance}px)`,
        };
      case 'slideDown':
        return {
          opacity: 0,
          transform: `translateY(-${distance}px)`,
        };
      case 'slideLeft':
        return {
          opacity: 0,
          transform: `translateX(${distance}px)`,
        };
      case 'slideRight':
        return {
          opacity: 0,
          transform: `translateX(-${distance}px)`,
        };
      case 'scaleIn':
        return {
          opacity: 0,
          transform: `scale(${scale})`,
        };
      case 'rotateIn':
        return {
          opacity: 0,
          transform: `rotate(${rotate}deg) scale(${scale})`,
        };
      default:
        return {
          opacity: 0,
          transform: 'none',
        };
    }
  };

  const getVisibleStyles = () => {
    return {
      opacity: 1,
      transform: 'none',
    };
  };

  const styles = isVisible ? getVisibleStyles() : getInitialStyles();

  return (
    <div
      ref={ref}
      className={cn('transition-all', className)}
      style={{
        opacity: styles.opacity,
        transform: styles.transform,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: easing,
      }}
    >
      {children}
    </div>
  );
};

export default AnimateIn;
