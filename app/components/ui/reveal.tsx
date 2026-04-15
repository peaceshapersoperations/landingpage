'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  repeat?: boolean; // 👈 NEW PROP
}

const Reveal = ({
  children,
  className,
  delay = 0,
  duration = 700,
  threshold = 0.1,
  direction = 'up',
  repeat = false, // 👈 default = no repeat
}: RevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // 👇 only stop observing if repeat is false
          if (!repeat) {
            observer.unobserve(entry.target);
          }
        } else {
          // 👇 reset visibility when leaving viewport (for repeat)
          if (repeat) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
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
  }, [threshold, repeat]);

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(30px)';
      case 'down':
        return 'translateY(-30px)';
      case 'left':
        return 'translateX(30px)';
      case 'right':
        return 'translateX(-30px)';
      default:
        return 'translateY(30px)';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out',
        isVisible
          ? 'opacity-100 blur-0 transform-none'
          : 'opacity-0 blur-sm transform',
        className,
      )}
      style={{
        transform: isVisible ? 'none' : getTransform(),
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;