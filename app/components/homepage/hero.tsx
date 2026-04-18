import { ArrowRight02FreeIcons } from '@hugeicons/core-free-icons';
import Container from '../layout/container';
import { Button } from '../ui/button';
import { useState } from 'react';
import ScopeCarousel from './scope-carousel';
import { scopes } from '@/lib/constants';
import AnimateIn from '../ui/animate-in';
import Reveal from '../ui/reveal';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <header className="bg-gray-200 pt-5 pb-20 md:pt-20 md:pb-30">
      <Container className="space-y-10 md:space-y-20">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr] gap-0 md:gap-20 lg:gap-40 justify-between space-y-5 md:space-y-10">
          <article className="flex flex-col gap-5 lg:gap-6 text-3xl leading-9 md:text-3xl lg:text-4xl lg:leading-12 text-primary font-medium">
            <AnimateIn animation="slideUp">
              <h1 className="max-w-xl text-primary md:text-primary font-medium">
                African institutions are not unsafe because nobody cares.{' '}
              </h1>
            </AnimateIn>

            <AnimateIn animation="slideUp" delay={200}>
              <h1 className="max-w-xl">
                They are unsafe because nobody has built the system.
              </h1>
            </AnimateIn>
          </article>

          <div className="space-y-15 md:space-y-8 pt-3">
            <AnimateIn animation="slideUp" delay={200}>
              <article className="space-y-4 text-base md:text-base lg:text-base text-primary/90 md:text-primary/80 leading-relaxed font-light max-w-xl">
                <p>
                  Peace Shapers Africa{' '}
                  <strong className="font-light text-primary">
                    designs, installs, and strengthens the safety systems
                  </strong>{' '}
                  that schools and organisations across Nigeria currently lack.
                </p>
                <p>Safety is not a destination. It is a system.</p>
              </article>
            </AnimateIn>

            <div className="flex gap-4 items-start">
              <ScopeCarousel onScopeChange={setActiveIndex} />

              <AnimateIn animation="slideUp" delay={400}>
                <Button
                  size="lg"
                  variant="accent"
                  className="mt-4 md:mt-4 lg:mt-6 px-10"
                  // icon={ArrowRight02FreeIcons}
                >
                  Learn more
                </Button>
              </AnimateIn>
            </div>
          </div>
        </section>

        <div className="">
          <Reveal>
            <figure className="aspect-square md:aspect-4/2 rounded-[30px] md:rounded-[60px] overflow-hidden relative">
              <img
                key={scopes[activeIndex].image}
                src={scopes[activeIndex].image}
                className="w-full h-full object-cover object-top animate-image-fade-in"
                alt=""
              />
            </figure>
          </Reveal>
        </div>
      </Container>
    </header>
  );
};

export default Hero;
