import { ArrowDownRight01Icon } from '@hugeicons/core-free-icons';
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
    <header className="bg-primary pt-5 pb-20 md:pt-20 md:pb-30">
      <Container className="space-y-10 md:space-y-20">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr] gap-0 md:gap-20 lg:gap-40 justify-between space-y-5 md:space-y-10">
          <article className="flex flex-col gap-5 lg:gap-10 text-3xl leading-9 md:text-3xl lg:text-5xl lg:leading-14 text-white font-normal">
            <AnimateIn animation="slideUp">
              <h1 className="max-w-3xl text-white/60">
                Nigerian institutions are not unsafe because nobody cares.{' '}
              </h1>
            </AnimateIn>

            <AnimateIn animation="slideUp" delay={200}>
              <h1 className="max-w-2xl">
                They are unsafe because nobody has built the system.
              </h1>
            </AnimateIn>
          </article>

          <div className="space-y-8 pt-3">
            <AnimateIn animation="slideUp" delay={200}>
              <article className="space-y-4 text-sm md:text-base lg:text-base text-white/70 leading-relaxed font-light max-w-xl">
                <p>
                  Peace Shapers Africa designs, installs, and strengthens the
                  safety systems that schools and organisations across Nigeria
                  currently lack.
                </p>
                <p>Safety is not a destination. It is a system</p>
              </article>
            </AnimateIn>

            <div className="flex gap-4 items-start">
              <AnimateIn animation="slideUp" delay={400}>
                <Button
                  size="lg"
                  variant="white"
                  className="mt-1 md:mt-2 lg:mt-3"
                  icon={ArrowDownRight01Icon}
                >
                  Learn more
                </Button>
              </AnimateIn>
              <ScopeCarousel onScopeChange={setActiveIndex} />
            </div>
          </div>
        </section>

        <div className="">
          <Reveal>
            <figure className="aspect-square md:aspect-video rounded-[30px] md:rounded-[60px] overflow-hidden">
              <img
                src={scopes[activeIndex].image}
                className="w-full h-full object-cover object-top translate-all duration-700"
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
