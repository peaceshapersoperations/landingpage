'use client';

import Container from '../layout/container';
import { motion } from 'framer-motion';
import { ArrowLeft01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useEffect, useRef, useState } from 'react';

const peaceShapersFeatures = [
  {
    title: 'Systems, not awareness',
    description:
      'We focus on building the policies, protocols, and structures that prevent harm before it occurs.',
    // category: 'Approach',
    src: '/others/01.jpg',
  },
  {
    title: 'Built for Nigerian context',
    description:
      'Our approach reflects the realities of authority, reporting culture, and institutional dynamics in Nigeria.',
    // category: 'Context',
    src: '/others/02.jpg',
  },
  {
    title: 'Practical implementation',
    description:
      'We work directly with schools and organisations to install systems that staff can actually use.',
    // category: 'Implementation',
    src: '/others/3.jpg',
  },
  {
    title: 'Long term institutional change',
    description:
      'Our goal is not temporary interventions but sustainable safeguarding systems.',
    // category: 'Impact',
    src: '/others/4.jpg',
  },
];

const FeatureCard = ({
  title,
  description,
  src,
  isActive,
}: {
  title: string;
  description: string;
  src: string;
  isActive: boolean;
}) => {
  return (
    <motion.div className="relative grid grid-cols-1 md:grid-cols-2 gap-5 origin-top overflow-hidden">
      {/* Image Section */}
      <motion.div
        className="relative w-full h-full aspect-4/3.5 overflow-hidden rounded-[40px] md:rounded-[60px]"
        animate={{
          y: isActive ? 0 : -50,
          opacity: isActive ? 1 : 0,
        }}
        transition={{
          duration: 0.7,
          ease: 'easeInOut',
        }}
      >
        <img src={src} alt={title} className="h-full w-full object-cover" />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="bg-accent flex-1 aspect-4/3 md:aspect-auto p-10 md:p-10 lg:p-20 flex flex-col justify-center max-w-2xl text-white rounded-[40px] md:rounded-[60px]"
        animate={{
          y: isActive ? 0 : 50,
          opacity: isActive ? 1 : 0,
        }}
        transition={{
          duration: 0.7,
          ease: 'easeInOut',
        }}
      >
        <h3 className="text-2xl md:text-4xl md:leading-13 font-normal mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-white/80 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const WhyChoosePeaceShapers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const totalSlides = peaceShapersFeatures.length;

  // --- Navigation ---
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    restartAutoplay();
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    restartAutoplay();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    restartAutoplay();
  };

  // --- Autoplay ---
  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const restartAutoplay = () => {
    startAutoplay();
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [totalSlides]);

  // --- Keyboard navigation ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') goToPrevious();
      if (e.key === 'ArrowDown') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="relative py-30 space-y-10">
      <header className="text-center text-3xl leading-11 md:text-3xl lg:text-4xl lg:leading-14 font-bold text-primary">
        <h2>Why Peace Shapers</h2>
      </header>

      <Container className="grid gap-10">
        {/* Navigation */}
        <div className="flex justify-center gap-5 items-center">
          <button
            onClick={goToPrevious}
            className="border border-accent/30 text-accent p-3 rounded-full transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <HugeiconsIcon
              icon={ArrowLeft01Icon}
              className="w-6 h-6 group-hover:scale-110 transition-transform"
            />
          </button>

          <button
            onClick={goToNext}
            className="border border-accent/30 text-accent p-3 rounded-full transition-all duration-300 group"
            aria-label="Next slide"
          >
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              className="w-6 h-6 group-hover:scale-110 transition-transform"
            />
          </button>
        </div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <div className="relative w-full">
            {peaceShapersFeatures.map((feature, index) => (
              <div
                key={index}
                className={`${
                  currentIndex === index ? 'relative' : 'absolute inset-0'
                }`}
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  src={feature.src}
                  isActive={currentIndex === index}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center gap-2">
          {peaceShapersFeatures.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? 'bg-accent w-8 h-2'
                  : 'bg-accent/30 w-2 h-2 hover:bg-accent/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChoosePeaceShapers;
