import Container from '../layout/container';
import AnimateIn from '../ui/animate-in';
import VideoPlayer from '../ui/video-player';
import Reveal from '../ui/reveal';

const TheProblem = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="-mt-20 sm:-mt-20 md:-mt-20 lg:-mt-50 xl:-mt-70 bg-[#333254]"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#5c5b76"
          fill-opacity="1"
          d="M0,288L120,277.3C240,267,480,245,720,245.3C960,245,1200,267,1320,277.3L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>

      <section className="relative isolate bg-[#5c5b76] overflow-hidden">
        <Container className="pt-10 pb-0 md:py-20 lg:pt-25 lg:pb-20 space-y-10 md:space-y-10 grid place-content-center">
          <div className="grid grid-cols-1 items-start lg:grid-cols-[1fr_1fr] gap-10 lg:gap-10 xl:gap-20">
            <Reveal delay={300}>
              <VideoPlayer src="/video/solve.mp4" />
            </Reveal>

            <section className="grid gap-8 md:gap-10 text-sm md:text-base lg:text-lg text-white/80 leading-relaxed font-light">
              <AnimateIn animation="slideUp">
                <header className="text-3xl leading-11 md:text-3xl lg:text-5xl lg:leading-14 font-medium md:text-white">
                  <h3>The Problem</h3>
                </header>
              </AnimateIn>

              <article className="hover:text-white">
                <AnimateIn animation="slideUp">
                  <p>
                    Every school in Nigeria has teachers who care about their
                    students. Every organisation has HR staff who want things to
                    work.
                  </p>
                </AnimateIn>
              </article>

              <article className="hover:text-white">
                <AnimateIn animation="slideUp" delay={100}>
                  <p>
                    And yet children are being harmed in schools where adults
                    saw the signs and didn’t know what to do.
                  </p>
                </AnimateIn>
              </article>

              <article className="hover:text-white">
                <AnimateIn animation="slideUp" delay={200}>
                  <p>
                    Staff are being bullied by managers in organisations that
                    have a harassment policy nobody has read. Conflicts are
                    escalating into crises that could have been stopped in the
                    first sixty seconds.
                  </p>
                </AnimateIn>
              </article>

              <article className="text-white font-medium">
                <AnimateIn animation="slideUp" delay={300}>
                  <p>
                    The problem is almost never the people. It is the absence of
                    a system the policies, the training, the protocols, the
                    accountability structures that tells people exactly what to
                    do, who to tell, and what happens next.
                  </p>
                </AnimateIn>
              </article>

              <article className="text-white font-medium">
                <AnimateIn animation="slideUp" delay={400}>
                  <p>This is what Peace Shapers builds</p>
                </AnimateIn>
              </article>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TheProblem;
