import { scopes } from '@/lib/constants';
import Container from '../layouts/container';
import ScopeCarousel from '../layouts/scope-carousel';
import { Button } from '../ui/button';
import { useState } from 'react';
import { FlipWords } from '../ui/flip-words';

const Hero = () => {
  const [currentScope, setCurrentScope] = useState(0);
  const words = ['Schools', 'Hospitals', 'NGOs', 'Churches'];

  return (
    <header className="w-full relative">
      <div className="hidden md:block absolute z-10 inset-0 bg-linear-to-b from-primary/30 via-primary/40 to-primary/70"></div>
      <div className="block md:hidden absolute z-10 inset-0 bg-linear-to-b from-primary/10 via-primary/50 to-primary/80"></div>

      <img
        src={scopes[currentScope].image}
        alt=""
        className="block absolute z-5 w-full h-full object-cover object-top"
      />

      <Container className="min-h-svh flex relative z-50 items-end pb-10 md:pb-20">
        <article className="flex flex-wrap gap-y-5 items-start justify-between z-20 bottom-10 left-10 w-full text-white">
          <div className="space-y-5 lg:space-y-10">
            <h1 className="text-4xl leading-12 md:text-4xl md:leading-12 max-w-md lg:text-6xl lg:max-w-xl lg:leading-15 xl:text-7xl xl:max-w-2xl xl:leading-22 font-normal">
              Safety Systems Built for
              <FlipWords words={words} duration={2000} />
            </h1>
            <Button
              colorScheme="secondary"
              size="lg"
              className="hidden md:flex"
            >
              Yes, I Lead an Institution
            </Button>

            <Button
              colorScheme="secondary"
              size="sm"
              className="flex md:hidden"
            >
              Yes, I Lead an Institution
            </Button>
          </div>

          <div className="space-y-6 text-sm max-w-xs lg:text-base lg:max-w-sm xl:max-w-sm xl:text-base">
            <article className="space-y-4 md:pt-0 lg:pt-6">
              <p className="leading-relaxed font-light">
                Peace Shapers Africa designs, installs, and strengthens the
                safety systems that schools and organisations across Nigeria
                currently lack. Safety is not a destination. It is a system
              </p>
            </article>

            <div className="flex items-center gap-4">
              <ScopeCarousel variant="light" onScopeChange={setCurrentScope} />
            </div>
          </div>
        </article>
      </Container>
    </header>
  );
};

export default Hero;
