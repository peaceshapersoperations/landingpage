import Container from '../layouts/container';
import { Button } from '../ui/button';

const CallToAction = () => {
  return (
    <section className="bg-secondary/10">
      <Container>
        <div className="min-h-100 relative z-10 grid place-content-center rounded-[40px] mx-auto max-w-[1300px]">
          <article className="flex py-30 flex-col items-center space-y-6 text-primary text-center">
            <h4 className="text-2xl px-4 font-normal max-w-xs md:text-3xl lg:text-5xl lg:max-w-md leading-tight">
              <span className="block capitalize">Start wherever you are.</span>
            </h4>
            <p className="max-w-xl text-sm md:text-base font-light leading-relaxed">
              Every client begins somewhere different. Some need the full system
              built from scratch. Some need one thing done well. Some need to
              understand what they need before they can decide. All three are
              valid.
            </p>

            <div className="flex flex-wrap justify-center gap-4 px-15 md:mt-5">
              <Button
                colorScheme="secondary"
                size="default"
                className="w-full md:w-auto"
              >
                Work With Us
              </Button>
              <Button
                colorScheme="secondary"
                size="default"
                variant="outline"
                className="w-full md:w-auto"
              >
                Download Capability Statement
              </Button>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
