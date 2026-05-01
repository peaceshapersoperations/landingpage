import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface CustomTooltipProps {
  children: React.ReactNode;
  content: string;
  className?: string;
  show?: boolean;
  textClassName?: string;
  arrowClassName?: string;
}

const CustomTooltip = ({
  children,
  content,
  className,
  show = false,
  textClassName,
  arrowClassName,
}: CustomTooltipProps) => {
  const [isVisible, setIsVisible] = useState(show);
  const timeoutRef = useRef<number | undefined>(undefined);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsVisible(false);
    }, 100);
  };

  useEffect(() => {
    setIsVisible(show);
  }, [show]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <small
          className={cn(
            'absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 text-[8px] lg:text-[10px] font-medium rounded-full whitespace-nowrap z-50 transition-all duration-200',
            className,
            textClassName || 'bg-white text-primary',
          )}
        >
          {content}
          <div
            className={cn(
              'absolute top-0 left-1/2 transform -translate-x-1/2 -mt-1 w-2 h-2 rotate-45',
              arrowClassName || 'bg-white',
            )}
          />
        </small>
      )}
    </div>
  );
};

export default CustomTooltip;
