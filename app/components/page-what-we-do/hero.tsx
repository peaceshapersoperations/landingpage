import Container from '../layouts/container';
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <header className="w-full relative">
      <div className="hidden md:block absolute z-10 inset-0 bg-linear-to-b from-primary/30 via-primary/40 to-primary/90"></div>
      <div className="block md:hidden absolute z-10 inset-0 bg-linear-to-b from-primary/10 via-primary/70 to-primary"></div>

      <img
        src={'what-we-do/hero.jpg'}
        alt=""
        className="block absolute z-5 w-full h-full object-cover object-top"
      />

      <Container className="min-h-svh flex relative z-50 items-end pb-10 md:pb-20">
        <article className="flex flex-wrap gap-y-5 items-start justify-between z-20 bottom-10 left-10 w-full text-white">
          <div className="space-y-5 lg:space-y-10">
            <h1 className="text-3xl leading-10 md:text-4xl md:leading-12 max-w-md lg:text-6xl lg:max-w-xl lg:leading-15 xl:text-6xl xl:max-w-2xl xl:leading-18 font-normal">
              Two systems. Every institution needs both
            </h1>
            <Button
              colorScheme="secondary"
              size="lg"
              className="hidden md:flex"
            >
              Download Capability Statement
            </Button>

            <Button
              colorScheme="secondary"
              size="sm"
              className="flex md:hidden"
            >
              Download Capability Statement
            </Button>
          </div>

          <div className="space-y-6 text-sm max-w-xs lg:text-base lg:max-w-sm xl:max-w-sm xl:text-base">
            <article className="space-y-4 md:pt-0 lg:pt-6">
              <p className="leading-relaxed text-sm md:text-base font-light">
                A Safeguarding System and a Violence Prevention & De-escalation
                System for schools and organisations. Book the full system, a
                single service, or start with an audit.
              </p>
            </article>
          </div>
        </article>
      </Container>
    </header>
  );
};

export default Hero;
