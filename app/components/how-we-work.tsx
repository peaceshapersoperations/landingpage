import Container from '@/components/layout/container';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons';
import AnimateIn from '@/components/ui/animate-in';

const HowWeWork = () => {
  return (
    <section className="bg-white pt-20 md:pt-0 md:-mt-10">
      <Container className="space-y-16 md:space-y-25">
        <div className="flex justify-center">
          <AnimateIn animation="slideUp" delay={50}>
            <h2 className="relative z-10 text-4xl sm:text-6xl font-medium text-primary">
              How we work
            </h2>
          </AnimateIn>
        </div>

        <div className="grid gap-10 grid-cols-1">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <AnimateIn animation="slideUp" delay={100} className="h-full">
              <article className="border border-gray-200 rounded-[40px] md:rounded-[50px] space-y-6 p-10 h-full">
                <img src="elements/whistle.png" className="w-20" alt="" />

                <h2 className="text-4xl text-primary font-normal">Training</h2>

                <p className="text-slate-600 text-sm">
                  Workshops for school staff, students, parents, and corporate
                  teams — built around Nigerian-specific dynamics, not imported
                  models.
                </p>

                <div className="flex gap-4">
                  <button className="flex group text-sm items-center gap-2 hover:gap-4 transition-all duration-200 text-accent">
                    <span className="relative">
                      <span>For Schools</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300 ease-out" />
                    </span>
                    <span className="rounded-full p-1 text-accent">
                      <HugeiconsIcon icon={ArrowUpRight01Icon} size={10} />
                    </span>
                  </button>
                  <button className="flex group text-sm items-center gap-2 hover:gap-4 transition-all duration-200 text-accent">
                    <span className="relative">
                      <span>For Organization</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300 ease-out" />
                    </span>
                    <span className="rounded-full p-1 text-accent">
                      <HugeiconsIcon icon={ArrowUpRight01Icon} size={10} />
                    </span>
                  </button>
                </div>
              </article>
            </AnimateIn>

            <AnimateIn animation="slideUp" delay={200} className="h-full">
              <article className="border border-gray-200 rounded-[40px] md:rounded-[50px] space-y-6 p-10 h-full">
                <img src="elements/cctv.png" className="w-20" alt="" />

                <h2 className="text-4xl text-primary font-normal">
                  Safety System Design
                </h2>

                <p className="text-slate-500 text-sm">
                  We assess, design, and install the safety systems your
                  institution currently lacks — working with your leadership
                  team to build something that lasts beyond the engagement.
                </p>

                <button className="flex group items-center text-sm gap-2 text-accent">
                  <span className="relative">
                    <span>Learn more</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300 ease-out" />
                  </span>
                  <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} />
                </button>
              </article>
            </AnimateIn>

            <AnimateIn animation="slideUp" delay={300} className="h-full">
              <article className="border border-gray-200 rounded-[40px] md:rounded-[50px] space-y-6 p-10 h-full">
                <img src="elements/check-list.png" className="w-20" alt="" />

                <h2 className="text-4xl text-primary font-normal">
                  Safety Audits{' '}
                </h2>

                <p className="text-slate-500 text-sm">
                  We find your safety risks before they find you — a root and
                  branch assessment of your institution's safety architecture,
                  with a prioritised action plan.
                </p>

                <button className="flex group items-center text-sm gap-2 text-accent">
                  <span className="relative">
                    <span>Safety Audits</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300 ease-out" />
                  </span>
                  <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} />
                </button>
              </article>
            </AnimateIn>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default HowWeWork;
