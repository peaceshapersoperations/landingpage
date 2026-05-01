'use client';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import Container from '../layouts/container';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselIndicators,
  CarouselProgress,
} from '../ui/carousel';

const WhyChoosePeaceShapers = () => {
  const list = [
    {
      title: 'Systems, not awareness',
      description:
        'We focus on building the policies, protocols, and structures that prevent harm before it occurs.',
      src: '/others/1.jpg',
    },
    {
      title: 'Built for Nigerian context',
      description:
        'Our approach reflects the realities of authority, reporting culture, and institutional dynamics in Nigeria.',
      src: '/others/2.jpg',
    },
    {
      title: 'Practical implementation',
      description:
        'We work directly with schools and organisations to install systems that staff can actually use.',
      src: '/others/3.jpg',
    },
    {
      title: 'Long term institutional change',
      description:
        'Our goal is not temporary interventions but sustainable safeguarding systems.',
      src: '/others/4.jpg',
    },
  ];

  const autoplayPlugin = Autoplay({ delay: 5000, stopOnInteraction: false });
  const fadePlugin = Fade();

  return (
    <section className="bg-secondary/10 space-y-10 md:space-y-20">
      <header className="flex justify-center text-primary text-[10px] md:text-base lg:text-sm capitalize tracking-wider gap-4">
        <h2 className="bg-primary/5 rounded-full px-4 py-2">
          Why Peace Shapers
        </h2>
      </header>

      <Container className="text-white">
        <Carousel
          className="w-full"
          opts={{ loop: true }}
          autoPlay={true}
          plugins={[autoplayPlugin, fadePlugin]}
        >
          <CarouselContent>
            {list.map((item, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 bg-primary rounded-[40px] overflow-hidden mx-auto max-w-[1300px]">
                  <article className="h-full flex flex-col justify-center gap-20 sm:gap-60 p-10 md:p-10 lg:p-10 lg:py-20 text-white relative">
                    {/* Geometric pattern overlay */}
                    <div className="absolute inset-0 opacity-5">
                      <svg
                        className="w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <pattern
                            id="grid"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                          >
                            <path
                              d="M 40 0 L 0 0 0 40"
                              fill="none"
                              stroke="white"
                              strokeWidth="0.5"
                            />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                      </svg>
                    </div>

                    <h3 className="text-2xl md:text-3xl lg:text-5xl max-w-md leading-tight">
                      {item.title}
                    </h3>

                    <p className="self-end max-w-xs text-sm md:text-base lg:text-lg leading-relaxed font-light">
                      {item.description}
                    </p>
                  </article>

                  <figure className="relative overflow-hidden h-full">
                    <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-primary/60 to-transparent"></div>

                    <div className="absolute bottom-5 left-5">
                      <CarouselProgress />
                    </div>

                    <span className="absolute top-10 right-10 text-white text-2xl lg:text-4xl font-light">
                      {index + 1}/{list.length}
                    </span>

                    <img
                      src={item.src}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </figure>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselIndicators className="mt-10 md:mt-10" />
        </Carousel>
      </Container>
    </section>
  );
};

export default WhyChoosePeaceShapers;
