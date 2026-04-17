import { scopes } from '@/lib/constants';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import Reveal from '@/components/ui/reveal';
import { useScopeCarousel } from '@/hooks/use-scope-carousel';
import { useEffect } from 'react';

interface ScopeCarouselProps {
  onScopeChange?: (index: number) => void;
}

const ScopeCarousel = ({ onScopeChange }: ScopeCarouselProps) => {
  const { activeIndex, handleScopeHover, handleMouseLeave } = useScopeCarousel(
    scopes.length,
  );

  useEffect(() => {
    onScopeChange?.(activeIndex);
  }, [activeIndex, onScopeChange]);

  return (
    <TooltipProvider>
      <div className="flex items-center justify-start sm:justify-start pb-9">
        {scopes.map((scope, index) => (
          <Reveal
            key={scope.name}
            delay={(index + 1) * 100}
            duration={400}
            className="not-first:-ml-4"
          >
            <Tooltip open={index === activeIndex}>
              <TooltipTrigger asChild>
                <figure
                  className={cn(
                    'relative w-17 md:w-19 lg:w-22 aspect-square rounded-full border-4 border-white overflow-hidden hover:scale-110 transition-all duration-300 cursor-pointer',
                    index === activeIndex && 'border-white z-10',
                  )}
                  onMouseEnter={() => handleScopeHover(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={scope.head}
                    className="w-full h-full object-cover"
                    alt={scope.name}
                  />
                </figure>
              </TooltipTrigger>

              <TooltipContent
                side="bottom"
                arrowClassName="fill-primary bg-primary"
                className="bg-primary text-white rounded-full text-[10px]"
              >
                <p>For {scope.name}</p>
              </TooltipContent>
            </Tooltip>
          </Reveal>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default ScopeCarousel;
