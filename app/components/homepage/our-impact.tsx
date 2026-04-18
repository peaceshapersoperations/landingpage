'use client';

import { useEffect, useRef, useState } from 'react';
import Container from '../layout/container';
import AnimateIn from '../ui/animate-in';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
}

const Counter = ({
  end,
  suffix = '',
  prefix = '',
  duration = 2000,
  delay = 0,
}: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
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
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCounter = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (now < endTime) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(updateCounter);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [isVisible, end, duration, delay]);

  return (
    <h3 ref={ref} className="text-4xl md:text-5xl font-bold text-accent">
      <span>{prefix}</span>
      {count.toLocaleString()}
      <span>{suffix}</span>
    </h3>
  );
};

const OurImpact = () => {
  const stats = [
    {
      value: 2000,
      suffix: '+',
      label: 'Students',
      delay: 0,
    },
    {
      value: 100,
      suffix: '+',
      label: 'Teachers',
      delay: 200,
    },
    {
      value: 10,
      suffix: '+',
      label: 'Organizations',
      delay: 400,
    },
  ];

  return (
    <section className="pt-30 py-5 md:py-20 md:pt-20">
      <Container className="z-10">
        <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-10 md:gap-40">
          {stats.map((stat, index) => (
            <AnimateIn
              key={index}
              animation="slideUp"
              delay={stat.delay}
              className="text-center"
            >
              <div className="">
                <Counter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2500}
                  delay={stat.delay}
                />
                <p className="text-lg md:text-lg font-light text-primary/80 mt-4 mb-3">
                  {stat.label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurImpact;
