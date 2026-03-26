import { useState, useEffect, useRef } from 'react';

const INTERVAL = 100;
const DURATION = 5000;
const TRANSITION_TIME = 300;

export const useScopeCarousel = (scopesLength: number) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(DURATION);

  const timeoutRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= INTERVAL) {
          // prevent overlapping transitions
          if (isTransitioning) return prev;

          setIsTransitioning(true);

          timeoutRef.current = setTimeout(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % scopesLength);
            setIsTransitioning(false);
          }, TRANSITION_TIME);

          return DURATION;
        }

        return prev - INTERVAL;
      });
    }, INTERVAL);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isPaused, isTransitioning, scopesLength]);

  const handleScopeHover = (index: number) => {
    // stop everything cleanly
    setIsPaused(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);

    setIsTransitioning(true);

    timeoutRef.current = setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
      setTimeRemaining(DURATION);
    }, 150);
  };

  const handleMouseLeave = () => {
    // resume after slight delay (feels natural)
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 500);
  };

  return {
    activeIndex,
    isTransitioning,
    handleScopeHover,
    handleMouseLeave,
  };
};
