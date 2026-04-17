import Container from '../layout/container';
import AnimateIn from '../ui/animate-in';
import Reveal from '../ui/reveal';
import { Button } from '../ui/button';
import { ArrowRight02FreeIcons } from '@hugeicons/core-free-icons';

const TheProblem = () => {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <Container className="pt-10 pb-0 md:py-20 lg:py-30 space-y-10 md:space-y-15 grid place-content-center">
          <AnimateIn animation="slideUp">
            <header className="text-center text-3xl leading-11 md:text-3xl lg:text-4xl lg:leading-14 font-bold text-primary">
              <h3>The Problem</h3>
            </header>
          </AnimateIn>

          <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-10">
            <Reveal delay={300} className="relative z-10 h-full">
              <figure className="relative aspect-square rounded-[40px] md:rounded-[60px] overflow-hidden h-full">
                <img
                  src="others/the-problem.jpg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </figure>
            </Reveal>

            <section className="grid gap-8 md:gap-6 text-start md:text-start text-sm md:text-base lg:text-base text-primary/80 leading-relaxed font-light max-w-xl">
              <article className="hover:text-primary">
                <AnimateIn animation="slideUp">
                  <p>
                    Schools and organisations across Nigeria care deeply about
                    the safety of the children and people in their care.
                  </p>
                </AnimateIn>
              </article>

              <article className="hover:text-primary">
                <AnimateIn animation="slideUp" delay={100}>
                  <p>
                    Yet incidents of bullying, harassment, abuse and unresolved
                    conflicts still occur within institutions that genuinely
                    want to protect those they serve.
                  </p>
                </AnimateIn>
              </article>

              <article className="text-primary text-2xl font-medium">
                <AnimateIn animation="slideUp" delay={100}>
                  <h3>
                    The challenge is rarely a lack of concern. More often, it is
                    the absence of clear systems,
                  </h3>
                </AnimateIn>
              </article>

              <article className="hover:text-primary">
                <AnimateIn animation="slideUp" delay={200}>
                  <p>
                    Without these systems, even well-meaning institutions
                    struggle to prevent harm or respond effectively when
                    incidents occur.
                  </p>
                </AnimateIn>
              </article>

              <article className="text-primary text-2xl font-medium">
                <AnimateIn animation="slideUp" delay={400}>
                  <h3>This is where Peace Shapers comes in.</h3>
                </AnimateIn>
              </article>

              <article className="hover:text-primary">
                <AnimateIn animation="slideUp" delay={300}>
                  <p>
                    We work with institutions to design and install safeguarding
                    systems that help prevent harm and ensure that when issues
                    arise they are handled clearly, consistently and
                    responsibly.
                  </p>
                </AnimateIn>
              </article>
              <AnimateIn animation="slideUp" delay={400} className="mt-8">
                <Button variant="secondary" icon={ArrowRight02FreeIcons}>
                  See how the system works
                </Button>
              </AnimateIn>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TheProblem;
