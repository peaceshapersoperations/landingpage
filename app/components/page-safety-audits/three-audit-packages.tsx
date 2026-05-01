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

const list = [
  {
    id: 1,
    title: 'The Focused Safety Audit',
    sub: 'Any institution — schools or organisations',
    receive:
      'A written Focused Safety Report — findings, risk ratings, and a prioritised action plan',
    timeframe: '5–7 working days from assessment to report.',
    texts: [
      'A targeted assessment of one specific area — safeguarding practice, school violence prevention, harassment and power abuse, psychological safety, emergency response, or conflict and de-escalation.',
      'Ideal for institutions that have experienced a specific incident, identified a specific concern, or want to assess one area before deciding whether to go further.',
    ],
  },
  {
    id: 2,
    title: 'The School Safety Audit',
    sub: 'Primary and secondary schools',
    receive:
      'A School Safety Report — findings across every dimension, a safety rating using the Peace Shapers School Safety Scorecard, a prioritised action plan, and a recommended programme sequence',
    timeframe: '7–10 working days from assessment to report.',
    texts: [
      'A comprehensive audit built entirely around one question: is this school genuinely safe for children?',
      'This goes beyond policy — examining child protection systems, student-to-student safety, teacher-to-student dynamics, physical environment, and leadership accountability.',
      'Schools can book this audit independently, with no prior relationship required. Many schools find this is where every safeguarding conversation should begin.',
    ],
  },
  {
    id: 3,
    title: 'The Full Institutional Safety Audit',
    sub: 'Organisations, NGOs, hospitals, and government bodies',
    receive:
      'A full Institutional Safety Report with findings, risk ratings by area, a prioritised action plan, and a 90-day implementation roadmap',
    timeframe: '10–15 working days from assessment to report.',
    texts: [
      'A root and branch review of your entire safety system — nothing is assumed to be working until it is examined.',
      'Covers policy and procedure, culture and leadership behaviour, reporting structures, staff capacity, and physical environment.',
      'Produces clear findings, risk ratings, and a structured 90-day implementation roadmap.',
    ],
  },
];

const ThreeAuditPackages = () => {
  return (
    <section className="bg-secondary/10">
      <Container>
        <div className="py-0 md:py-20 space-y-10 md:space-y-15 mx-auto max-w-[1300px]">
          <header className="flex justify-center text-accent text-[10px] md:text-base lg:text-sm capitalize tracking-wider gap-4">
            <h2 className="bg-accent/10 rounded-full px-4 py-2">
              Three Audit Packages
            </h2>
          </header>

          <Carousel
            className="w-full"
            variant="accent"
            plugins={[
              Fade(),
              Autoplay({
                delay: 5000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            autoPlay={true}
          >
            <CarouselContent>
              {list.map((item) => (
                <CarouselItem key={item.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[40px] aspect-auto bg-white">
                    <figure className="relative w-full h-full aspect-4/3 md:aspect-auto">
                      <img
                        src={`others/${item.id}.jpg`}
                        alt=""
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute z-10 top-5 left-5">
                        <CarouselProgress />
                      </div>

                      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-primary/80 to-primary text-white flex flex-col items-start justify-end py-6 px-6 lg:py-10 lg:px-10 gap-4 md:gap-6">
                        <span className="bg-white/10 text-xs md:text-base text-white py-1 px-3 rounded-full inline capitalize">
                          {item.sub}
                        </span>
                        <h3 className="text-xl leading-tight md:text-5xl max-w-md md:leading-14">
                          {item.title}
                        </h3>
                      </div>
                    </figure>

                    <article className="self-center text-sm md:text-base font-light text-primary leading-relaxed p-6 sm:p-10 lg:p-20 space-y-6">
                      {item.texts.map((text, index) => (
                        <p key={index}>{text}</p>
                      ))}

                      <div>
                        <span className="font-bold">What you receive</span>
                        <p>{item.receive}</p>
                      </div>

                      <div>
                        <span className="font-bold">Timeframe</span>
                        <p>{item.timeframe}</p>
                      </div>

                      <Button colorScheme="accent">
                        Request a {item.title.split(' ')[1]} Audit
                      </Button>
                    </article>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselIndicators className="mt-6" />
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default ThreeAuditPackages;
