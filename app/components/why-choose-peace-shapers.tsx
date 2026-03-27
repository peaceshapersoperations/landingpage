import Container from '@/components/layout/container';
import { why } from '@/lib/constants';
import { cn } from '@/lib/utils';
import AnimateIn from '@/components/ui/animate-in';
import Reveal from '@/components/ui/reveal';

const WhyChoosePeaceShapers = () => {
  return (
    <section className="bg-[#f8f3f0] pb-20 md:pb-50 pt-20">
      <Container className="space-y-16 md:space-y-30">
        <article className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center">
          <AnimateIn animation="slideUp" delay={100}>
            <Reveal direction="up" delay={150}>
              <h2 className="relative z-10 text-4xl font-medium sm:text-5xl text-primary">
                Why choose peace shapers
              </h2>
            </Reveal>
          </AnimateIn>

          <AnimateIn animation="slideUp" delay={200}>
            <p className="leading-relaxed">
              There are trainers. There are consultants. There are campaigns.
              Peace Shapers is none of these things — and that distinction
              matters.
            </p>
          </AnimateIn>
        </article>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {why.map((w, index) => (
            <>
              <AnimateIn
                animation="slideUp"
                // delay={}
                className={cn(
                  'relative overflow-hidden h-full rounded-[40px] md:rounded-[60px]',
                  Boolean(index % 2 == 0) ? 'block' : 'block md:hidden',
                )}
              >
                <figure>
                  <img
                    src={w.image}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    alt=""
                  />
                </figure>
              </AnimateIn>

              <AnimateIn
                animation="slideUp"
                // delay={400 + index * 200}
                className="h-full"
              >
                <article
                  key={w.heading}
                  className="flex flex-col items-start justify-center space-y-6 p-6 md:p-16 rounded-[30px] bg-white h-full"
                >
                  <span
                    className={cn(
                      'w-14 h-14 inline-flex font-medium font-heading text-2xl md:text-4xl rounded-full text-white items-center justify-center',
                      w.iconColor,
                    )}
                  >
                    {index + 1}
                  </span>

                  <h4 className="font-medium max-w-sm text-primary text-2xl md:text-3xl">
                    {w.heading}
                  </h4>

                  <div className="flex flex-col gap-6 text-sm">
                    {w.paragraph.map((p, pIndex) => (
                      <p
                        key={pIndex}
                        className="leading-relaxed text-sm md:text-base text-gray-500"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </article>
              </AnimateIn>

              <AnimateIn
                animation="slideUp"
                // delay={500 + index * 200}
                className={cn(
                  'relative overflow-hidden h-full rounded-[40px] md:rounded-[60px]',
                  Boolean(index % 2 != 0) ? 'hidden md:block' : 'hidden',
                )}
              >
                <figure>
                  <img
                    src="who-we-work-for.jpg"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    alt=""
                  />
                </figure>
              </AnimateIn>
            </>
          ))}
        </section>
      </Container>
    </section>
  );
};

export default WhyChoosePeaceShapers;
