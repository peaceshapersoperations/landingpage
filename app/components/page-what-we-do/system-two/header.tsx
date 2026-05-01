import Container from '../../layouts/container';

const Header = () => {
  return (
    <section className="relative bg-secondary/10 py-20">
      {/* Diagonal line pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="diagonal"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="30"
                stroke="black"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal)" />
        </svg>
      </div>

      <Container className="space-y-4">
        <div className="flex justify-center text-primary text-[10px] md:text-sm lg:text-sm capitalize tracking-wider gap-4">
          <h2 className="bg-primary/10 rounded-full px-4 py-2">System two</h2>
        </div>

        <article className="flex flex-col items-center gap-10">
          <h2 className="text-4xl md:text-5xl max-w-xl text-center leading-tight font-normal text-primary">
            Violence Prevention & De-Escalation
          </h2>

          <div className="space-y-4 text-sm md:text-base text-center max-w-2xl text-primary leading-relaxed font-light">
            <p>
              A Violence Prevention & De-escalation System is the trained
              capacity, documented protocols, and institutional culture that
              allows a school or organisation to recognise conflict early,
              respond without causing further harm, and resolve it before it
              becomes violence.
            </p>

            <p>
              Most Nigerian institutions manage the aftermath of conflict. This
              system addresses what happens before and during in the sixty
              seconds that determine whether a situation escalates or resolves
            </p>
          </div>
        </article>
      </Container>
    </section>
  );
};

export default Header;
