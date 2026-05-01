import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselVariant = 'primary' | 'secondary' | 'accent';

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
  variant?: CarouselVariant;
  autoPlay?: boolean;
  autoPlayInterval?: number;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  variant?: CarouselVariant;
  autoPlay?: boolean;
  autoPlayInterval?: number;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

function Carousel({
  orientation = 'horizontal',
  opts,
  setApi,
  plugins,
  variant = 'primary',
  autoPlay = false,
  autoPlayInterval = 3000,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return () => {
      api?.off('select', onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        variant,
        autoPlay,
        autoPlayInterval,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn('relative', className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<'div'>) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className,
        )}
        {...props}
      />
    </div>
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className,
      )}
      {...props}
    />
  );
}

function CarouselPrevious({
  className,
  variant,
  size = 'icon',
  ...props
}: React.ComponentProps<typeof Button> & { variant?: CarouselVariant }) {
  const {
    orientation,
    scrollPrev,
    canScrollPrev,
    variant: carouselVariant,
  } = useCarousel();
  const buttonVariant = 'outline';

  return (
    <Button
      data-slot="carousel-previous"
      variant={buttonVariant}
      size={size}
      className={cn(
        'absolute size-8 rounded-full',
        orientation === 'horizontal'
          ? 'top-1/2 -left-12 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        carouselVariant === 'accent' &&
          'bg-accent text-accent-foreground hover:bg-accent/90 border-accent',
        carouselVariant === 'secondary' &&
          'bg-secondary text-secondary-foreground hover:bg-secondary/90 border-secondary',
        carouselVariant === 'primary' &&
          'bg-primary text-primary-foreground hover:bg-primary/90 border-primary',
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

function CarouselNext({
  className,
  variant,
  size = 'icon',
  ...props
}: React.ComponentProps<typeof Button> & { variant?: CarouselVariant }) {
  const {
    orientation,
    scrollNext,
    canScrollNext,
    variant: carouselVariant,
  } = useCarousel();
  const buttonVariant = 'outline';

  return (
    <Button
      data-slot="carousel-next"
      variant={buttonVariant}
      size={size}
      className={cn(
        'absolute size-8 rounded-full',
        orientation === 'horizontal'
          ? 'top-1/2 -right-12 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}

function CarouselProgress({
  className,
  size = 40,
  strokeWidth = 2,
  ...props
}: React.ComponentProps<'div'> & {
  size?: number;
  strokeWidth?: number;
}) {
  const { api, scrollNext, autoPlay, autoPlayInterval, variant } =
    useCarousel();
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!api || !autoPlay) return;

    let startTime: number;
    let animationFrame: number;

    const startProgress = () => {
      setIsActive(true);
      startTime = Date.now();
      setProgress(0);

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const newProgress = Math.min(
          (elapsed / (autoPlayInterval || 3000)) * 100,
          100,
        );
        setProgress(newProgress);

        if (newProgress >= 100) {
          scrollNext();
          return;
        }

        animationFrame = requestAnimationFrame(animate);
      };

      animationFrame = requestAnimationFrame(animate);
    };

    const stopProgress = () => {
      setIsActive(false);
      setProgress(0);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };

    const onSelect = () => {
      stopProgress();
      if (autoPlay) {
        startProgress();
      }
    };

    const onInit = () => {
      if (autoPlay) {
        startProgress();
      }
    };

    onInit();
    api.on('select', onSelect);
    api.on('init', onInit);

    return () => {
      stopProgress();
      api.off('select', onSelect);
      api.off('init', onInit);
    };
  }, [api, autoPlay, autoPlayInterval, scrollNext]);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const getProgressColor = () => {
    switch (variant) {
      case 'accent':
        return 'stroke-accent';
      case 'secondary':
        return 'stroke-secondary';
      default:
        return 'stroke-primary';
    }
  };

  const getBackgroundColor = () => {
    switch (variant) {
      case 'accent':
        return 'stroke-accent/20';
      case 'secondary':
        return 'stroke-secondary/20';
      default:
        return 'stroke-primary/20';
    }
  };

  if (!autoPlay) return null;

  return (
    <div
      className={cn('relative flex items-center justify-center', className)}
      data-slot="carousel-progress"
      {...props}
    >
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          className={getBackgroundColor()}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          className={cn(
            getProgressColor(),
            'transition-all duration-100 ease-linear',
          )}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function CarouselIndicators({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const { api, canScrollPrev, canScrollNext, variant } = useCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };
    const onInit = () => {
      setScrollSnaps(api.scrollSnapList());
    };

    onSelect();
    onInit();
    api.on('select', onSelect);
    api.on('init', onInit);

    return () => {
      api.off('select', onSelect);
      api.off('init', onInit);
    };
  }, [api]);

  const onIndicatorClick = useCallback(
    (index: number) => {
      if (!api) return;
      api.scrollTo(index);
    },
    [api],
  );

  return (
    <div
      className={cn('flex gap-2 justify-center', className)}
      data-slot="carousel-indicators"
      {...props}
    >
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          className={cn(
            'w-1 h-1 rounded-full transition-all duration-200',
            selectedIndex === index
              ? variant === 'accent'
                ? 'bg-accent w-4'
                : variant === 'secondary'
                  ? 'bg-secondary w-4'
                  : 'bg-primary w-4'
              : variant === 'accent'
                ? 'bg-accent/30 hover:bg-accent/50'
                : variant === 'secondary'
                  ? 'bg-secondary/30 hover:bg-secondary/50'
                  : 'bg-primary/30 hover:bg-primary/50',
          )}
          onClick={() => onIndicatorClick(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselIndicators,
  CarouselProgress,
};
