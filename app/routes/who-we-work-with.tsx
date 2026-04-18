import WhoWeWorkWith from '@/components/homepage/who-we-work-with';
import Container from '@/components/layout/container';
import AnimateIn from '@/components/ui/animate-in';

const WhoWeWorkWithPage = () => {
  return (
    <>
      <section className="bg-secondary py-20">
        <Container className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-5 md:gap-10 lg:gap-0 md:items-start lg:items-center">
          <header className="space-y-2">
            <AnimateIn animation="slideUp">
              <h1 className="text-3xl md:text-3xl md:leading-10 lg:text-4xl lg:leading-12 max-w-md leading-10 text-white font-medium">
                We work with institutions that value safety for all.
              </h1>
            </AnimateIn>
          </header>

          <article className="space-y-4">
            <AnimateIn animation="slideUp" delay={100}>
              <p className="text-base md:text-lg text-white/90 leading-relaxed font-light max-w-md">
                We work with schools, universities, and organisations across the
                UK and internationally.
              </p>
            </AnimateIn>
          </article>
        </Container>
      </section>

      <WhoWeWorkWith />
    </>
  );
};

export default WhoWeWorkWithPage;
