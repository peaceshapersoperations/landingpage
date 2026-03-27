import Container from '@/components/layout/container';
import { why } from '@/lib/constants';
import { cn } from '@/lib/utils';
import AnimateIn from '@/components/ui/animate-in';
import Reveal from '@/components/ui/reveal';

const WhyChoosePeaceShapers = () => {
  return (
    <section className="bg-[#f8f3f0] pb-20 md:pb-50 pt-20">
      <Container className="space-y-16 md:space-y-30">
        {/* Header */}
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 lg:gap-20 items-start">
          <AnimateIn animation="slideUp" delay={100}>
            <Reveal direction="up" delay={150}>
              <h2 className="relative z-10 text-5xl font-medium sm:text-6xl text-primary">
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

        {/* Content */}
        <section className="space-y-10 md:space-y-16">
          {why.map((w, index) => (
            <div
              key={w.heading}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-20 items-stretch"
            >
              {/* Image */}
              <AnimateIn
                animation="slideUp"
                className={cn(
                  'relative overflow-hidden rounded-[40px] md:rounded-[60px] aspect-[4/3]',
                  index % 2 !== 0 && 'lg:order-2'
                )}
              >
                <figure className="w-full h-full">
                  <img
                    src={w.image}
                    alt={w.heading}
                    className="w-full h-full object-cover"
                  />
                </figure>
              </AnimateIn>

              {/* Text */}
              <AnimateIn
                animation="slideUp"
                className={cn(
                  'h-full',
                  index % 2 !== 0 && 'lg:order-1'
                )}
              >
                <article className="flex flex-col items-start justify-center space-y-6 p-6 md:p-16 rounded-[30px] bg-white h-full">
                  <span
                    className={cn(
                      'w-14 h-14 inline-flex font-medium font-heading text-2xl md:text-4xl rounded-full text-white items-center justify-center',
                      w.iconColor
                    )}
                  >
                    {index + 1}
                  </span>

                  <h4 className="font-medium max-w-sm text-primary text-2xl md:text-3xl">
                    {w.heading}
                  </h4>

                  <div className="flex flex-col gap-6">
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
            </div>
          ))}
        </section>
      </Container>
    </section>
  );
};

export default WhyChoosePeaceShapers;