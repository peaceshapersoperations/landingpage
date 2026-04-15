import Container from '../layout/container';
import AnimateIn from '../ui/animate-in';
import Reveal from '../ui/reveal';

const WhyChoosePeaceShapers = () => {
  return (
    <section className="">
      <article className="text-center pt-0 md:pt-10 pb-6 md:pb-5 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee capitalize">
          <h3 className="font-medium text-[3rem] lg:text-[3rem] text-white/8  md:text-white/8 leading-tight inline-block px-4">
            why&nbsp;peace&nbsp;shapers&nbsp;
          </h3>
          <h3 className="font-medium text-[3rem] lg:text-[3rem] text-white/8  md:text-white/8 leading-tight inline-block px-4">
            why&nbsp;peace&nbsp;shapers&nbsp;
          </h3>
          <h3 className="font-medium text-[3rem] lg:text-[3rem] text-white/8  md:text-white/8 leading-tight inline-block px-4">
            why&nbsp;peace&nbsp;shapers&nbsp;
          </h3>
          <h3 className="font-medium text-[3rem] lg:text-[3rem] text-white/8  md:text-white/8 leading-tight inline-block px-4">
            why&nbsp;peace&nbsp;shapers&nbsp;
          </h3>
          <h3 className="font-medium text-[3rem] lg:text-[3rem] text-white/8  md:text-white/8 leading-tight inline-block px-4">
            why&nbsp;peace&nbsp;shapers&nbsp;
          </h3>
          <h3 className="font-medium text-[3rem] lg:text-[3rem] text-white/8  md:text-white/8 leading-tight inline-block px-4">
            why&nbsp;peace&nbsp;shapers&nbsp;
          </h3>
        </div>
      </article>

      <Container className="py-15 md:py-30 md:pt-20">
        <section className="grid grid-cols-1 md:grid-cols-[max-content_max-content] gap-8 md:gap-y-8 place-content-center text-white">
          <article className="border border-white/10 space-y-5 p-6 md:p-10 rounded-[40px] flex flex-col items-start">
            <Reveal>
              <figure className="max-w-40">
                <img
                  src="elements/nigeria.png"
                  className="w-full h-full object-contain"
                  alt=""
                />
              </figure>
            </Reveal>
            <AnimateIn animation="slideUp">
              <p className="text-lg md:text-2xl max-w-xs">
                We built this for Nigeria not for export.
              </p>
            </AnimateIn>
            <AnimateIn delay={200} animation="slideUp">
              <p className="text-white/70 font-light text-sm md:text-base leading-relaxed max-w-md">
                The dynamics that shape safety in Nigerian schools and
                workplaces are specific. Power distance. Ethnic and regional
                complexity. Economic pressure. The specific ways authority
                operates here. The cultural norms around conflict and
                discipline. Generic models from elsewhere miss all of it. Our
                frameworks are built around it.
              </p>
            </AnimateIn>
          </article>

          <article className="border border-white/10 space-y-5 p-6 md:p-10 rounded-[40px] flex flex-col items-start">
            <Reveal>
              <figure className="max-w-40">
                <img
                  src="elements/bullseye.png"
                  className="w-full h-full object-contain"
                  alt=""
                />
              </figure>
            </Reveal>

            <AnimateIn animation="slideUp">
              <p className="text-lg md:text-2xl max-w-sm">
                We work on what produces the problem, not just what the problem
                produces.
              </p>
            </AnimateIn>

            <AnimateIn delay={200} animation="slideUp">
              <p className="text-white/70 font-light text-sm md:text-base leading-relaxed  max-w-md">
                Most institutions respond to incidents. We work on the
                conditions that create them the culture, the leadership
                behaviour, the reporting structures, the skills gap before the
                incident arrives.
              </p>
            </AnimateIn>
          </article>

          <article className="border border-white/10 space-y-5 p-6 md:p-10 rounded-[40px] flex flex-col items-start">
            <Reveal>
              <figure className="max-w-40">
                <img
                  src="elements/love.png"
                  className="w-full h-full object-contain"
                  alt=""
                />
              </figure>
            </Reveal>
            <AnimateIn animation="slideUp">
              <p className="text-lg md:text-2xl max-w-sm">
                We do not leave after the workshop.
              </p>
            </AnimateIn>
            <AnimateIn delay={200} animation="slideUp">
              <p className="text-white/70 font-light text-sm md:text-base leading-relaxed max-w-md">
                Every engagement includes post-installation support, written
                reports, and follow-up. A workshop without follow-through is an
                expensive good day. We design every engagement with what happens
                after the day in mind.
              </p>
            </AnimateIn>
          </article>

          <article className="border border-white/10 space-y-5  p-6 md:p-10 rounded-[40px] flex flex-col items-start">
            <Reveal>
              <figure className="max-w-42">
                <img
                  src="elements/audit.png"
                  className="w-full h-full object-contain"
                  alt=""
                />
              </figure>
            </Reveal>
            <AnimateIn animation="slideUp">
              <p className="text-lg md:text-2xl max-w-sm">
                We tell you what we find not what you want to hear.
              </p>
            </AnimateIn>
            <AnimateIn delay={200} animation="slideUp">
              <p className="text-white/70 font-light text-sm md:text-base leading-relaxed  max-w-md">
                Our audit reports name every gap, rated by risk level. Our
                facilitator debrief reports are intelligence documents, not
                celebrations. Institutions that work with us know exactly where
                they stand.
              </p>
            </AnimateIn>
          </article>
        </section>
      </Container>
    </section>
  );
};

export default WhyChoosePeaceShapers;
