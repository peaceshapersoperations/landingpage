import { cn } from '@/lib/utils';
import Container from '../layouts/container';
import { Button } from '../ui/button';
import { useState, useEffect } from 'react';
import SquigglyArrow from '../ui/squiggle-arrow';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselIndicators,
  CarouselProgress,
} from '../ui/carousel';
import Fade from 'embla-carousel-fade';

const TheProblem = () => {
  const images = [1, 2];
  const autoplayPlugin = Autoplay({ delay: 3000, stopOnInteraction: false });
  const fadePlugin = Fade();
  return (
    <>
      <section
        className="bg-secondary/10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.3' stroke-opacity='0.05'%3E%3Cpath d='M0 10Q25 0 50 10T100 10'/%3E%3Cpath d='M0 15Q25 5 50 15T100 15'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <Container className="flex flex-col items-center gap-y-20 py-20 md:py-40 text-primary overflow-hidden">
          <div className="space-y-10">
            <header className="flex justify-center text-secondary text-[10px] md:text-base lg:text-sm capitalize tracking-wider gap-4">
              <h2 className="bg-secondary/5 rounded-full px-4 py-2">
                The Problem
              </h2>
            </header>

            <article className="max-w-md lg:max-w-2xl self-center">
              <h5 className="space-y-6 text-primary leading-relaxed md:leading-snug font-normal text-lg md:text-xl lg:text-2xl lg:leading-relaxed text-center">
                Incidents of <strong className="font-medium">bullying</strong>,{' '}
                <strong className="font-medium">harassment</strong>,{' '}
                <strong className="font-medium">abuse</strong> and{' '}
                <strong className="font-medium">unresolved</strong> conflicts
                still occur within institutions that genuinely want to protect
                those they serve.
              </h5>
            </article>
          </div>

          <div className="w-full max-w-[1300px]">
            <Carousel
              variant="secondary"
              className="w-full"
              opts={{ loop: true }}
              autoPlay={true}
              plugins={[autoplayPlugin, fadePlugin]}
            >
              <CarouselContent>
                {images.map((imageNum) => (
                  <CarouselItem key={imageNum}>
                    <figure className="relative overflow-hidden inverted-radius aspect-square lg:aspect-video h-70 lg:h-160 w-full rounded-[40px] md:rounded-[60px] bg-secondary/10">
                      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent to-secondary/10"></div>

                      <div className="absolute top-8 right-8">
                        <CarouselProgress />
                      </div>

                      <img
                        src={`/homepage/the-problem/${imageNum}.jpg`}
                        className={cn(
                          'w-full h-full object-cover object-top transition-opacity duration-300 rounded-[50px] md:rounded-[40px] ',
                        )}
                        alt=""
                      />
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselIndicators className="mt-6" />
            </Carousel>
          </div>

          <SquigglyArrow
            direction="down"
            variant="bouncy"
            className="hidden md:block text-secondary/60 lg:-mb-15"
          />
          <SquigglyArrow
            direction="down"
            variant="bouncy"
            width={140}
            height={50}
            className="block lg:hidden text-secondary/60 lg:-mb-15"
          />
        </Container>
      </section>

      <section
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.5' stroke-opacity='0.1'%3E%3Cpath d='M0 10Q25 0 50 10T100 10'/%3E%3Cpath d='M0 15Q25 5 50 15T100 15'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
        className="bg-primary pt-15 pb-15 md:pt-20 md:pb-20 relative overflow-hidden"
      >
        <Container className="space-y-5 md:space-y-10 text-white">
          <section className="flex flex-col items-center md:items-stretch lg:flex-row gap-5 md:gap-10 lg:gap-14 lg:justify-center">
            <h3 className="max-w-xs text-white leading-10 text-3xl md:max-w-sm md:text-5xl lg:max-w-md md:leading-12 lg:text-5xl lg:leading-13">
              This is where Peace Shapers comes in
            </h3>

            <div className="grid items-center gap-5 md:self-end lg:self-start">
              <p className="text-xs md:text-base max-w-xs lg:max-w-md leading-relaxed font-light">
                We work with institutions to design and install safeguarding
                systems that help prevent harm and ensure that when issues arise
                they are handled clearly, consistently and responsibly.
              </p>

              <div className="w-full mt-6">
                <Button
                  colorScheme="secondary"
                  size="sm"
                  // variant={"outline"}
                  className="hidden md:flex w-full"
                >
                  See how the system works
                </Button>

                <Button
                  colorScheme="secondary"
                  size="sm"
                  className="flex md:hidden w-full"
                >
                  See how the system works
                </Button>
              </div>
            </div>
          </section>
        </Container>
      </section>
    </>
  );
};

export default TheProblem;
