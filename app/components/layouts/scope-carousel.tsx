import { scopes } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Reveal from '@/components/ui/reveal';
import { useScopeCarousel } from '@/hooks/use-scope-carousel';
import { useEffect } from 'react';
import CustomTooltip from '@/components/ui/custom-tooltip';

interface ScopeCarouselProps {
  onScopeChange?: (index: number) => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'light' | 'dark';
}

const ScopeCarousel = ({
  onScopeChange,
  variant = 'primary',
}: ScopeCarouselProps) => {
  const { activeIndex, handleScopeHover, handleMouseLeave } = useScopeCarousel(
    scopes.length,
  );

  const handleTouchStart = (index: number) => {
    handleScopeHover(index);
  };

  const handleTouchEnd = () => {
    handleMouseLeave();
  };

  useEffect(() => {
    onScopeChange?.(activeIndex);
  }, [activeIndex, onScopeChange]);

  // Define color schemes based on variant
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          border: 'border-white',
          tooltipBg: 'bg-primary',
          tooltipText: 'text-white',
          tooltipArrow: 'bg-primary',
        };
      case 'secondary':
        return {
          border: 'border-white',
          tooltipBg: 'bg-secondary',
          tooltipText: 'text-white',
          tooltipArrow: 'bg-secondary',
        };
      case 'accent':
        return {
          border: 'border-white',
          tooltipBg: 'bg-accent',
          tooltipText: 'text-white',
          tooltipArrow: 'bg-accent',
        };
      case 'light':
        return {
          border: 'border-white',
          tooltipBg: 'bg-white',
          tooltipText: 'text-gray-900',
          tooltipArrow: 'bg-white',
        };
      case 'dark':
        return {
          border: 'border-gray-900',
          tooltipBg: 'bg-gray-900',
          tooltipText: 'text-white',
          tooltipArrow: 'bg-gray-900',
        };
      default:
        return {
          border: 'border-primary',
          tooltipBg: 'bg-primary',
          tooltipText: 'text-white',
          tooltipArrow: 'bg-primary',
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <div className="flex items-center justify-start sm:justify-start pb-9">
      {scopes.map((scope, index) => (
        <Reveal
          key={scope.name}
          delay={(index + 1) * 100}
          duration={400}
          className="not-first:-ml-4"
        >
          <CustomTooltip
            content={`For ${scope.name}`}
            show={index === activeIndex}
            className={variantStyles.tooltipBg}
            textClassName={variantStyles.tooltipText}
            arrowClassName={variantStyles.tooltipArrow}
          >
            <figure
              className={cn(
                'relative w-17 md:w-19 lg:w-16 aspect-square rounded-full border-4 border-transparent overflow-hidden hover:scale-110 transition-all duration-300 cursor-pointer',
                index === activeIndex && `${variantStyles.border} z-10`,
              )}
              onMouseEnter={() => handleScopeHover(index)}
              onMouseLeave={handleMouseLeave}
              onTouchStart={() => handleTouchStart(index)}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={scope.head}
                className="w-full h-full object-cover"
                alt={scope.name}
              />
            </figure>
          </CustomTooltip>
        </Reveal>
      ))}
    </div>
  );
};

export default ScopeCarousel;
