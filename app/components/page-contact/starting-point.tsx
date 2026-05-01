import { ArrowRight01Icon } from '@hugeicons/core-free-icons';
import Container from '../layouts/container';
import { Button } from '../ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselIndicators,
  CarouselProgress,
} from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

const StartingPoint = () => {
  const list = [
    {
      id: 1,
      title: 'I lead a school or work in education.',
      image: 'others/1.jpg',
      paragraph: `I want to explore how Peace Shapers can work with my school teacher training, student programmes, safeguarding, or a full safety system.`,
    },
    {
      id: 2,
      title: 'I lead an organisation or work in HR',
      image: 'others/2.jpg',
      paragraph: `I want to explore what Peace Shapers can build for my de-escalation, harassment prevention, leadership training, or a full safety system`,
    },
    {
      id: 3,
      title: 'I want to understand my risks first',
      image: 'others/3.jpg',
      paragraph: `I want a Safety Audit an honest assessment of where my institution stands before I decide what to build.`,
    },
  ];

  const autoplayPlugin = Autoplay({ delay: 3000, stopOnInteraction: false });
  const fadePlugin = Fade();

  return (
    <section className="bg-secondary/10 ">
      <Container>
        <div className="py-20 space-y-10 md:space-y-15">
          <header className="flex justify-center text-secondary text-[10px] md:text-base lg:text-sm capitalize tracking-wider gap-4">
            <h2 className="bg-secondary/10 rounded-full px-4 py-2">
              Find your starting point
            </h2>
          </header>

          <Carousel
            className="w-full"
            opts={{ loop: true }}
            plugins={[autoplayPlugin, fadePlugin]}
            autoPlay={true}
          >
            <CarouselContent>
              {list.map((item) => (
                <CarouselItem key={item.id}>
                  <article className="relative bg-white p-4 md:p-10 mx-auto max-w-[1300px] rounded-[40px] overflow-hidden">
                    <figure className="relative rounded-[30px] overflow-hidden  aspect-square lg:aspect-4/2">
                      <img
                        src={item.image}
                        className="w-full h-full object-cover object-bottom"
                        alt=""
                      />
                      <div className="absolute z-10 top-5 right-5">
                        <CarouselProgress />
                      </div>

                      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-primary md:via-primary/80 to-primary">
                        <article className="absolute space-y-5 bottom-0 left-0 px-5 sm:px-10 md:px-15 py-5 sm:py-10 md:py-10  text-white">
                          <h3 className="text-2xl max-w-60 lg:text-4xl leading-tight lg:max-w-md">
                            {item.title}
                          </h3>
                          <p className="font-light text-xs max-w-xs md:text-base lg:max-w-lg leading-relaxed">
                            {item.paragraph}
                          </p>

                          <Button
                            colorScheme="secondary"
                            size="default"
                            iconPosition="right"
                            className="w-full md:w-auto hidden md:flex"
                          >
                            Start here
                          </Button>
                          <Button
                            colorScheme="secondary"
                            size="sm"
                            className="w-full md:w-auto flex md:hidden"
                          >
                            Start here
                          </Button>
                        </article>
                      </div>
                    </figure>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselIndicators className="mt-10" />
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default StartingPoint;
