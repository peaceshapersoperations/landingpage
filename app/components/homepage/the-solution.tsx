import { useState, useEffect, useRef } from 'react';
import {
  ArrowRight02FreeIcons,
  ArrowLeft01Icon,
  ArrowRight01Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Container from '../layout/container';
import { Button } from '../ui/button';
import Reveal from '../ui/reveal';

const AUTOPLAY_DELAY = 4000; // must be > transition duration

const TheSolution = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const solutions = [
    {
      id: 1,
      title: 'Safeguarding System',
      description:
        'The complete architecture that protects children and vulnerable people from harm policy, trained people, reporting pathways, risk assessment, and the ongoing support to make it last.',
      image: 'two-systems/1.jpg',
    },
    {
      id: 2,
      title:
        'Violence Prevention <span>&</span> De<span>-</span>escalation System',
      description:
        'The trained capacity and institutional culture that stops conflict before it becomes violence for schools managing student behaviour, and for organisations managing workplace tension.',
      image: 'two-systems/2.jpg',
    },
  ];

  const totalSlides = solutions.length;

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
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, AUTOPLAY_DELAY);
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
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="relative overflow-hidden isolate grid gap-6 md:gap-5 pt-30">
      <header className="text-center text-3xl leading-11 md:text-3xl lg:text-4xl lg:leading-14 font-bold text-primary">
        <h2>Our Solution</h2>
      </header>

      <Container className="grid gap-10">
        {/* Navigation */}
        <div className="flex justify-center gap-5 items-center">
          <button
            onClick={goToPrevious}
            className="border border-primary/30 text-primary p-3 rounded-full transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <HugeiconsIcon
              icon={ArrowLeft01Icon}
              className="w-6 h-6 group-hover:scale-110 transition-transform"
            />
          </button>

          <button
            onClick={goToNext}
            className="border border-primary/30 text-primary p-3 rounded-full transition-all duration-300 group"
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
          className="relative overflow-hidden rounded-[40px] md:rounded-[60px]"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <div
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {solutions.map((solution) => (
              <div key={solution.id} className="w-full shrink-0">
                <Reveal repeat className="h-full">
                  <article className="grid grid-cols-1 lg:grid-cols-2 place-items-center bg-primary rounded-[40px] md:rounded-[60px] overflow-hidden">
                    {/* Image */}
                    <figure className="w-full bg-accent/50 aspect-4/3.5 overflow-hidden">
                      <img
                        src={solution.image}
                        className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                        alt={solution.title.replace(/<[^>]*>/g, '')}
                      />
                    </figure>

                    {/* Content */}
                    <div className="relative space-y-12 text-white p-6 md:p-10 lg:p-25">
                      <div className="space-y-6">
                        <h3
                          className="text-2xl md:text-4xl font-normal"
                          dangerouslySetInnerHTML={{
                            __html: solution.title,
                          }}
                        />
                        <p className="text-white/80 text-base font-light leading-relaxed">
                          {solution.description}
                        </p>
                      </div>

                      <div>
                        <Button
                          variant="secondary"
                          size="sm"
                          icon={ArrowRight02FreeIcons}
                        >
                          See what's included
                        </Button>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center gap-2">
          {solutions.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? 'bg-white w-8 h-2'
                  : 'bg-white/30 w-2 h-2 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TheSolution;
