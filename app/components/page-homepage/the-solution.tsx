import { cn } from '@/lib/utils';
import Container from '../layouts/container';
import Fade from 'embla-carousel-fade';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselIndicators,
  CarouselProgress,
} from '../ui/carousel';
import OurImpact from './our-impact';

const list = [
  {
    id: 1,
    image: 'others/1.jpg',
    heading: 'Safeguarding System',
    paragraph:
      'The complete architecture that protects children and vulnerable people from harm policy, trained people, reporting pathways, risk assessment, and the ongoing support to make it last.',
  },
  {
    id: 2,
    image: 'others/2.jpg',
    heading: 'Violence Prevention & De-escalation System',
    paragraph:
      'The trained capacity and institutional culture that stops conflict before it becomes violence for schools managing student behaviour, and for organisations managing workplace tension.',
  },
];

const TheSolution = () => {
  const fadePlugin = Fade();

  return (
    <section
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.3' stroke-opacity='0.05'%3E%3Cpath d='M0 10Q25 0 50 10T100 10'/%3E%3Cpath d='M0 15Q25 5 50 15T100 15'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
      className="bg-secondary/10 space-y-10 md:space-y-20 py-20 md:py-30"
    >
      <header className="flex justify-center text-secondary text-[10px] md:text-base lg:text-sm capitalize tracking-wider gap-4">
        <h2 className="bg-secondary/5 rounded-full px-4 py-2">The Solution</h2>
      </header>

      <Container className="text-primary">
        <Carousel
          variant="secondary"
          className="w-full"
          opts={{ loop: true }}
          plugins={[fadePlugin]}
          autoPlay={true}
          autoPlayInterval={5000}
        >
          <CarouselContent>
            {list.map((item) => (
              <CarouselItem key={item.id}>
                <div className="grid grid-cols-1 rounded-[40px] bg-secondary overflow-hidden md:grid-cols-2 items-center gap-5 mx-auto max-w-[1300px] aspect-auto lg:aspect-4/2">
                  <figure className="relative h-full overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent to-primary/70"></div>

                    <img
                      src={item.image}
                      className="w-full h-full object-cover"
                      alt=""
                    />

                    <div className="absolute z-20 top-5 left-5">
                      <CarouselProgress />
                    </div>
                  </figure>

                  <article className="relative max-w-xl pb-10 px-10 pt-5 md:p-6 lg:p-15 space-y-8 lg:space-y-6 text-primary">
                    {/* Diagonal line pattern overlay */}
                    <div className="absolute inset-0 opacity-20">
                      <svg
                        className="w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <pattern
                            id="diagonal"
                            width="10"
                            height="10"
                            patternUnits="userSpaceOnUse"
                            patternTransform="rotate(45)"
                          >
                            <line
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="30"
                              stroke="white"
                              strokeWidth="0.5"
                            />
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          fill="url(#diagonal)"
                        />
                      </svg>
                    </div>

                    <h3 className="text-2xl md:text-3xl xl:text-5xl leading-tight  text-white">
                      {item.heading}
                    </h3>
                    <p className="text-sm md:text-base font-light leading-relaxed text-white/80">
                      {item.paragraph}
                    </p>
                  </article>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselIndicators className="mt-10 md:mt-10" />
        </Carousel>
      </Container>

      <OurImpact />
    </section>
  );
};

export default TheSolution;
