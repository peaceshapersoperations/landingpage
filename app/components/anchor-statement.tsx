import Container from '@/components/layout/container';
import Reveal from '@/components/ui/reveal';
import AnimateIn from '@/components/ui/animate-in';

const AnchorStatement = () => {
  return (
    <section className="bg-gray-100 pb-10 md:pb-0 pt-10 md:pt-10 -mt-1">
      <Container className="space-y-16 md:space-y-30">
        <div className="flex justify-center">
          <AnimateIn animation="slideUp" delay={50}>
            <h2 className="relative z-10 text-4xl font-medium sm:text-5xl text-primary">
              Anchor Statement
            </h2>
          </AnimateIn>
        </div>

        <div className="space-y-10 lg:space-y-16">
          <div className="grid grid-cols-1 gap-10 lg:gap-16 md:grid-cols-2 font-normal">
            <AnimateIn animation="slideRight" delay={100} className="h-full">
              <article className="flex flex-col h-full justify-center p-6 md:p-16 rounded-[30px] md:rounded-[50px] space-y-4 bg-white">
                <Reveal direction="up" delay={150}>
                  <h3 className="text-4xl md:text-3xl text-accent">
                    We are not a training provider.
                  </h3>
                </Reveal>

                <p className="text-slate-600 text-sm md:text-base font-normal">
                  We are institutional safety specialists — bringing together
                  professionals from across education, health, organisational
                  development, and child protection
                </p>
              </article>
            </AnimateIn>

            <AnimateIn animation="slideLeft" delay={150}>
              <div className="flex flex-col md:flex-row rounded-[40px] md:rounded-[50px] overflow-hidden bg-white">
                <figure className="pt-10 w-full bg-[#3483ad2d] h-70 md:h-70 overflow-hidden">
                  <img
                    src="/elements/1.png"
                    className="w-full h-full object-contain -mb-10 scale-130"
                    alt=""
                  />
                </figure>

                <div className="flex items-center">
                  <p className="text-base md:text-base text-slate-600 leading-relaxed p-6 md:p-10">
                    What does not yet exist in Nigeria as a defined professional
                    field — with a standard, a faculty, and a replicable system
                    — <strong>is behavioural institutional safety</strong>
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn animation="scaleIn" delay={200}>
            <div className="bg-white rounded-[40px] md:rounded-[80px] overflow-hidden grid gap-cols-1 md:grid-cols-2 gap-0 md:gap-10 lg:gap-10">
              <figure className="aspect-4/3 bg-slate-100 h-full overflow-hidden">
                <img
                  src="anchor-statement.jpeg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </figure>

              <article className="flex flex-col justify-center gap-4 md:gap-10 p-8 md:p-10">
                <p className="text-slate-600 font-normal max-w-xs text-sm">
                  HSE safety. School discipline policies. HR handbooks. Nigeria
                  has all of these.
                </p>
                <Reveal direction="up" delay={350}>
                  <h3 className="text-4xl md:text-6xl text-accent">
                    Peace Shapers Africa is Building more.
                  </h3>
                </Reveal>
              </article>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-10 lg:gap-16">
            <AnimateIn animation="slideRight" delay={250}>
              <div className="flex flex-col md:flex-row rounded-[40px] md:rounded-[50px] overflow-hidden bg-white">
                <figure className="pt-10 w-full bg-[#3483ad2d] h-80 md:h-70 overflow-hidden">
                  <img
                    src="/elements/2.png"
                    className="w-full h-full object-contain -mb-10 scale-130"
                    alt=""
                  />
                </figure>

                <div className="flex items-center">
                  <p className="text-base md:text-base text-slate-600 leading-relaxed p-6 md:p-10">
                    the work of building the cultures, systems, and leadership
                    capacities that determine whether schools and organisations
                    are genuinely safe for the people inside them.
                  </p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="slideLeft" delay={300}>
              <article className="flex flex-col h-full justify-center p-6 md:p-16 gap-4 rounded-[30px] md:rounded-[50px] bg-white">
                <Reveal direction="up" delay={450}>
                  <h3 className="text-4xl md:text-3xl text-accent">
                    We are not a campaign.
                  </h3>
                </Reveal>

                <p className="text-slate-600 text-sm md:text-base font-normal">
                  We work with Nigerian schools and organisations on the
                  specific systems, cultures, and capacities that protect the
                  people inside them.
                </p>
              </article>
            </AnimateIn>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AnchorStatement;
