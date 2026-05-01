import { cn } from '@/lib/utils';
import Container from '../layouts/container';
import { Button } from '../ui/button';

const Hero = ({
  variant = 'core',
}: {
  variant?: 'core' | 'advisors' | 'education';
}) => {
  return (
    <header className="w-full relative">
      <div className="hidden md:block absolute z-10 inset-0 bg-linear-to-b from-primary/30 via-primary/40 to-primary/90"></div>
      <div className="block md:hidden absolute z-10 inset-0 bg-linear-to-b from-primary/10 via-primary/50 to-primary/80"></div>

      <img
        src={cn(
          variant === 'core' && 'team/hero.jpg',
          variant === 'advisors' && 'team/advisors.jpg',
          variant === 'education' && 'team/education.jpg',
        )}
        alt=""
        className="block absolute z-5 w-full h-full object-cover object-top"
      />

      <Container className="min-h-svh flex relative z-50 items-end pb-10 md:pb-20">
        <article className="flex flex-wrap gap-y-5 items-start justify-between z-20 bottom-10 left-10 w-full text-white">
          <div className="space-y-5 lg:space-y-10">
            <h1 className="text-4xl leading-10 md:text-4xl md:leading-10 max-w-md lg:text-4xl lg:max-w-md lg:leading-10 xl:text-5xl xl:max-w-xl xl:leading-14 font-normal">
              {variant === 'core'
                ? 'Our team has worked in the contexts our clients operate in.'
                : variant === 'advisors'
                  ? 'Board of Advisors: Meet the minds that guide our mission'
                  : 'Faculty of Education and Training: Shaping the next generation of peacebuilders'}
            </h1>
            <Button
              colorScheme="secondary"
              size="lg"
              className="hidden md:flex"
            >
              See team members
            </Button>

            <Button
              colorScheme="secondary"
              size="sm"
              className="flex md:hidden"
            >
              See team members
            </Button>
          </div>

          {/* <div className="space-y-6 text-sm max-w-xs lg:text-base lg:max-w-sm xl:max-w-sm xl:text-base">
            <article className="space-y-4 md:pt-0 lg:pt-6">
              <p className="leading-relaxed font-light">
                Peace Shapers Africa designs, installs, and strengthens the
                safety systems that schools and organisations across Nigeria
                currently lack. Safety is not a destination. It is a system
              </p>
            </article>
          </div> */}
        </article>
      </Container>
    </header>
  );
};

export default Hero;
