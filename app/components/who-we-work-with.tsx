import Container from '@/components/layout/container';
import { useCountUp } from '@/hooks/use-count-up';
import Reveal from '@/components/ui/reveal';
import AnimateIn from '@/components/ui/animate-in';

const WhoWeWorkWith = () => {
  const yearsCount = useCountUp({ end: 7, duration: 2000 });
  const educatorsCount = useCountUp({ end: 500, duration: 2500 });
  const workshopsCount = useCountUp({ end: 5, duration: 1500 });
  const auditsCount = useCountUp({ end: 2, duration: 1000 });
  return (
    <section className="bg-white relative pt-30 pb-5 md:pb-50 md:pt-50">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <AnimateIn animation="slideRight" delay={100}>
          <figure className="relative overflow-hidden w-full rounded-2xl">
            <img
              src="who-we-work-for.jpg"
              className="w-full h-full aspect-square object-cover rounded-[40px] md:rounded-[60px]"
              alt=""
            />
          </figure>
        </AnimateIn>

        <section className="grid gap-20">
          <div className="flex flex-col text-start gap-6 items-start justify-center">
            <Reveal direction="up" delay={200}>
              <h2 className="relative z-10 text-4xl font-medium sm:text-5xl text-primary">
                Who we work with
              </h2>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <p className="text-slate-500 max-w-xl text-sm md:text-base">
                We work with primary and secondary schools, hospital systems,
                financial institutions, NGOs, corporate organisations, and
                government bodies across Nigeria.
              </p>
            </Reveal>
          </div>

          <div className="-mt-8 relative z-10 gap-5 md:gap-8 grid grid-cols-1 md:grid-cols-2">
            <AnimateIn animation="slideUp" delay={400}>
              <article
                ref={yearsCount.elementRef}
                className="rounded-[30px] flex flex-col justify-center gap-4 bg-green-100 p-10"
              >
                <Reveal direction="up" delay={500}>
                  <h4 className="text-5xl font-semibold md:text-6xl text-primary">
                    {yearsCount.count}+
                  </h4>
                </Reveal>
                <h3 className="text-base text-primary leading-relaxed">
                  Years working in school safety and violence prevention across
                  Nigeria
                </h3>
              </article>
            </AnimateIn>

            <AnimateIn animation="slideUp" delay={500}>
              <article
                ref={educatorsCount.elementRef}
                className="rounded-[30px] flex flex-col justify-center gap-4 bg-orange-100 p-10"
              >
                <Reveal direction="up" delay={600}>
                  <h3 className="text-5xl font-semibold md:text-6xl text-primary">
                    {educatorsCount.count}+
                  </h3>
                </Reveal>
                <p className="text-sm text-primary leading-relaxed">
                  Educators, leaders, and practitioners trained
                </p>
              </article>
            </AnimateIn>

            <AnimateIn animation="slideUp" delay={600}>
              <article
                ref={workshopsCount.elementRef}
                className="rounded-[30px] flex flex-col justify-center gap-4 bg-cyan-100 p-10"
              >
                <Reveal direction="up" delay={700}>
                  <h3 className="text-5xl font-semibold md:text-6xl text-primary">
                    {workshopsCount.count}+
                  </h3>
                </Reveal>
                <p className="text-sm text-primary leading-relaxed">
                  Corporate workshop programmes in the institutional safety
                  suite
                </p>
              </article>
            </AnimateIn>

            <AnimateIn animation="slideUp" delay={700}>
              <article
                ref={auditsCount.elementRef}
                className="rounded-[30px] flex flex-col gap-4 justify-center bg-pink-100 p-10"
              >
                <Reveal direction="up" delay={800}>
                  <h3 className="text-5xl font-semibold md:text-6xl text-primary">
                    {auditsCount.count}+
                  </h3>
                </Reveal>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Audit packages — for schools and for organisations
                </p>
              </article>
            </AnimateIn>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default WhoWeWorkWith;
