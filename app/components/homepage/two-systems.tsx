import { ArrowRight02FreeIcons } from '@hugeicons/core-free-icons';
import Container from '../layout/container';
import { Button } from '../ui/button';
import Reveal from '../ui/reveal';

const TwoSystems = () => {
  return (
    <section className="relative overflow-hidden isolate">
      <article className="text-center pt-8 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          <h3 className="font-medium text-[3rem] lg:text-[3rem] text-white/8  md:text-white/8 leading-tight inline-block px-4">
            two&nbsp;systems&nbsp;
          </h3>
          <h3 className="font-medium text-[3rem] lg:text-[3rem] text-white/8  md:text-white/8 leading-tight inline-block px-4">
            two&nbsp;systems&nbsp;
          </h3>
          <h3 className="font-medium text-[3rem] lg:text-[3rem] text-white/8  md:text-white/8 leading-tight inline-block px-4">
            two&nbsp;systems&nbsp;
          </h3>
          <h3 className="font-medium text-[3rem] lg:text-[3rem] text-white/8  md:text-white/8 leading-tight inline-block px-4">
            two&nbsp;systems&nbsp;
          </h3>
          <h3 className="font-medium text-[3rem] lg:text-[3rem] text-white/8  md:text-white/8 leading-tight inline-block px-4">
            two&nbsp;systems&nbsp;
          </h3>
          <h3 className="font-medium text-[3rem] lg:text-[3rem] text-white/8  md:text-white/8 leading-tight inline-block px-4">
            two&nbsp;systems&nbsp;
          </h3>
          <h3 className="font-medium text-[3rem] lg:text-[3rem] text-white/8  md:text-white/8 leading-tight inline-block px-4">
            two&nbsp;systems&nbsp;
          </h3>
          <h3 className="font-medium text-[3rem] lg:text-[3rem] text-white/8  md:text-white/8 leading-tight inline-block px-4">
            two&nbsp;systems&nbsp;
          </h3>
        </div>
      </article>

      <Container className="max-w-6xl space-y-15 md:space-y-15 lg:space-y-20 py-10 pb-20 md:pt-20 md:pb-30">
        <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 lg:gap-10 xl:gap-20">
          <Reveal repeat className="">
            <article className="gap-10 grid place-items-center">
              <figure className="w-full h-90 md:h-120 rounded-[40px] bg-accent/50 mb-10 md:mb-10  transition-all duration-300 overflow-hidden">
                <img
                  src="two-systems/1.jpg"
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                  alt=""
                />
              </figure>

              <div className="relative space-y-6 bg-primary backdrop-blur-3xl text-white rounded-b-[40px] p-6 md:p-8 lg:p-12 -mt-40 md:-mt-30 z-10">
                <h3 className="text-2xl md:text-3xl lg:text-3xl font-medium md:font-medium">
                  Safeguarding System
                </h3>

                <p className="text-white/80 text-sm font-light">
                  The complete architecture that protects children and
                  vulnerable people from harm policy, trained people, reporting
                  pathways, risk assessment, and the ongoing support to make it
                  last.
                </p>

                <div className="">
                  <Button
                    variant="white"
                    size="sm"
                    icon={ArrowRight02FreeIcons}
                  >
                    See what’s included
                  </Button>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal repeat delay={100} className="">
            <article className="grid gap-10 place-items-center">
              <figure className="w-full h-90  md:h-120 rounded-[40px] bg-accent/50 mb-10 md:mb-10 transition-all duration-300 overflow-hidden">
                <img
                  src="two-systems/2.jpg"
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                  alt=""
                />
              </figure>

              <div className="relative space-y-6 bg-primary backdrop-blur-3xl text-white rounded-b-[40px] p-6 md:p-8 lg:p-12 -mt-40 md:-mt-30 z-10">
                <h3 className="text-2xl md:text-3xl lg:text-3xl font-medium">
                  Violence Prevention <span>&</span> De
                  <span>-</span>
                  escalation System
                </h3>

                <p className="text-white/80 text-sm font-light">
                  The trained capacity and institutional culture that stops
                  conflict before it becomes violence for schools managing
                  student behaviour, and for organisations managing workplace
                  tension.
                </p>

                <div className="">
                  <Button
                    variant="white"
                    size="sm"
                    icon={ArrowRight02FreeIcons}
                  >
                    See what’s included
                  </Button>
                </div>
              </div>
            </article>
          </Reveal>
        </section>
      </Container>
    </section>
  );
};

export default TwoSystems;
