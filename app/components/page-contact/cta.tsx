import Container from '../layouts/container';
import { Button } from '../ui/button';

const CallToAction = () => {
  return (
    <section className="bg-secondary/10">
      <Container>
        <div className="min-h-100 relative z-10 grid place-content-center rounded-[40px] mx-auto max-w-[1300px]">
          <article className="flex py-30 flex-col items-center space-y-6 text-primary text-center">
            <h4 className="text-2xl px-4 font-normal  md:text-3xl lg:text-5xl max-w-xs lg:max-w-lg leading-tight">
              <span className="block capitalize">We do not send generic proposals.</span>
            </h4>
             <p className="max-w-xl text-sm md:text-base font-light leading-relaxed px-4">
              Every response is specific to what you have told us your
              institution, your context, your risks. If we are not the right fit
              for what you need, we will tell you that directly and point you
              toward what is
            </p>

            <div className="flex flex-wrap justify-center gap-4 px-15 md:mt-5">
              <Button
                colorScheme="secondary"
                size="default"
                className="w-full md:w-auto"
              >
                Work With Us
              </Button>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
