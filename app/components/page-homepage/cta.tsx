import Container from '../layouts/container';
import { Button } from '../ui/button';

const CallToAction = () => {
  return (
    <section className="bg-secondary/10 lg:py-10">
      <Container>
        <div className="min-h-100 relative z-10 grid place-content-center  rounded-[40px] mx-auto max-w-[1300px]">
          <article className="py-20 flex flex-col items-center space-y-10 text-primary text-center">
            <h4 className="text-2xl px-4 font-normal max-w-md md:text-3xl lg:text-5xl lg:max-w-2xl leading-tight">
              <span className="block capitalize">
                Your institution has people worth protecting.
              </span>
            </h4>

            <div className="flex flex-wrap justify-center gap-4 px-15 md:p-0">
              <Button
                colorScheme="secondary"
                size="default"
                className="w-full md:w-auto"
              >
                Request a Safety Audit
              </Button>
              <Button
                colorScheme="secondary"
                size="default"
                variant="outline"
                className="w-full md:w-auto"
              >
                Download our Capability Statement
              </Button>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
