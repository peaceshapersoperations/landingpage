import Container from '../layouts/container';

const AfterAudit = () => {
  return (
    <section className="bg-secondary/10">
      <Container>
        <div className="pt-20 md:py-20 space-y-10 md:space-y-15">
          <header className="flex justify-center text-primary text-[10px] md:text-base lg:text-sm capitalize tracking-wider gap-4">
            <h2 className="bg-primary/10 rounded-full px-4 py-2">
              After the Audit
            </h2>
          </header>

          <section className="lg:columns-3 bg-white mx-auto max-w-[1300px] p-8 sm:p-10 md:p-15 gap-10 rounded-[40px]">
            <article className="text-sm md:text-base space-y-8 font-light leading-relaxed text-primary">
              <p className="text-3xl">
                The report is a working document, not a filing exercise.
              </p>

              <p>
                Peace Shapers offers post-audit implementation support helping
                your leadership team action the findings, build the missing
                systems, and track progress at 30, 60, and 90 days.
              </p>

              <p>
                For institutions ready to go further, the audit is the natural
                entry point into a full system installation
              </p>
            </article>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default AfterAudit;
