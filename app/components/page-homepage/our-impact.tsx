'use client';
import { useEffect, useRef, useState } from 'react';
import Container from '../layouts/container';
import { cn } from '@/lib/utils';

const list = [
  {
    id: 1,
    label: 'Students',
    count: 2000,
  },
  {
    id: 2,
    label: 'Teachers',
    count: 100,
  },
  {
    id: 3,
    label: 'Organizations',
    count: 10,
  },
];

const formatNumber = (num: number) => {
  return num.toLocaleString() + '+';
};

const CountUpNumber = ({
  target,
  duration = 2000,
}: {
  target: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * target);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return <div ref={ref}>{formatNumber(count)}</div>;
};

const OurImpact = () => {
  return (
    <section
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.3' stroke-opacity='0.05'%3E%3Cpath d='M0 10Q25 0 50 10T100 10'/%3E%3Cpath d='M0 15Q25 5 50 15T100 15'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
      className="space-y-10 md:space-y-10 py-10"
    >
      {/* Section Header */}
      <header className="flex justify-center text-accent text-[10px] md:text-base lg:text-sm capitalize tracking-wider gap-4">
        <h2 className="bg-accent/5 rounded-full px-4 py-2">Our Impact</h2>
      </header>

      <Container className="text-primary">
        {/* Stats Grid */}
        <div className="grid grid-cols-[max-content] place-content-center sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mx-auto max-w-[1300px]">
          {list.map((item, index) => (
            <article
              key={item.id}
              className="relative rounded-[25px] text-center space-y-4 bg-accent/5 backdrop-blur-sm px-12 py-10 md:p-8 lg:p-10 transition-all duration-300"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Geometric pattern overlay */}
              <div className="absolute inset-0 opacity-10 rounded-[25px] overflow-hidden">
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id={`grid-${item.id}`}
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    fill={`url(#grid-${item.id})`}
                  />
                </svg>
              </div>

              {/* Counter */}
              <div className="relative">
                <span className="text-4xl lg:text-5xl xl:text-5xl font-normal block text-accent">
                  <CountUpNumber target={item.count} />
                </span>
              </div>

              {/* Label */}
              <p className="relative text-lg md:text-xl font-light text-accent/90">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurImpact;
