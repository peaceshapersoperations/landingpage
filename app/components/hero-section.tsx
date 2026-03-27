import Container from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { scopes } from '@/lib/constants';
import { useState } from 'react';
import Reveal from '@/components/ui/reveal';
import BlobImage from '@/components/blob-image';
import ScopeCarousel from '@/components/scope-carousel';

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container className="bg-white pt-15 pb-15 sm:pb-0 sm:pt-30 space-y-0 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1fr_1.5fr] gap-20 lg:gap-10 xl:gap-40 items-center text-primary">
      <section className="space-y-16">
        <article className="space-y-6">
          <Reveal delay={0} duration={400}>
            <h1 className="text-5xl font-medium sm:text-7xl">
              Safety is not a destination. It is a system.
            </h1>
          </Reveal>

          <ScopeCarousel onScopeChange={setActiveIndex} />

          <article className="space-y-4">
            <Reveal delay={0} duration={400}>
              <p className="text-sm sm:text-base leading-relaxed font-light text-gray-500">
                Peace Shapers Africa is building{' '}
                <strong className="text-primary">
                  Nigeria's first institutional safety enterprise
                </strong>{' '}
                &mdash; working with schools and organisations to design,
                install, and strengthen the{' '}
                <strong className="text-primary">
                  safety systems that protect the people
                </strong>{' '}
                inside them.
              </p>
            </Reveal>
          </article>
        </article>

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
          <Button variant="secondary" size="lg" className="w-full">
            <span className="flex items-center gap-2">For Schools</span>
          </Button>

          <Button variant="accent" size="lg" className="w-full">
            <span className="flex items-center gap-2">For Organizations</span>
          </Button>
        </div>
      </section>

      <section className="">
        <BlobImage activeIndex={activeIndex} scopes={scopes} />
      </section>
    </Container>
  );
};

export default HeroSection;
