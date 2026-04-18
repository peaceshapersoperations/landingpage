import Container from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import AnimateIn from '@/components/ui/animate-in';
import Reveal from '@/components/ui/reveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  organisationalSafeguardingServices,
  safeguardingServices,
  schoolViolencePreventionServices,
  workplaceViolencePreventionServices,
} from '@/lib/constants';

const WhatWeDo = () => {
  return (
    <>
      {/* Hero */}
      {/* <Container className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-5 md:gap-10 lg:gap-0 md:items-start lg:items-start pt-5 md:pt-20 pb-15 md:pb-20">
        <header className="space-y-2">
          <AnimateIn animation="slideUp">
            <h1 className="text-3xl md:text-3xl md:leading-10 lg:text-4xl lg:leading-12 max-w-md leading-10 text-primary font-medium">
              Two systems. Every institution needs both.
            </h1>
          </AnimateIn>
          <AnimateIn animation="slideUp" delay={200}>
            <div className="pt-4">
              <Button size="sm" variant="secondary" className="mx-auto">
                Download Capability Statement
              </Button>
            </div>
          </AnimateIn>
        </header>

        <article className="space-y-4">
          <AnimateIn animation="slideUp" delay={100}>
            <p className="text-base md:text-base text-primary/80 leading-relaxed font-light">
              A Safeguarding System and a Violence Prevention & De-escalation
              System for schools and organisations.
            </p>
          </AnimateIn>
          <AnimateIn animation="slideUp" delay={100}>
            <p className="text-base md:text-base text-primary/80 leading-relaxed font-light">
              Book the full system, a single service, or start with an audit.
            </p>
          </AnimateIn>
        </article>
      </Container> */}

      {/* System 1 */}
      <header className="bg-primary space-y-20 text-white">
        <Container className="py-20 md:py-30">
          <article className="space-y-10 md:space-y-15">
            <AnimateIn animation="slideUp">
              <h3 className="text-white font-medium text-4xl md:text-5xl">
                SYSTEM 1 — Safe Guarding
              </h3>
            </AnimateIn>

            <article className="grid grid-cols-1 md:grid-cols-2 gap-x-20 leading-relaxed space-y-4 text-white/90 font-light text-sm md:text-base">
              <AnimateIn animation="slideUp" delay={100}>
                <p className="max-w-lg">
                  A Safeguarding System is the complete set of policies,
                  procedures, trained people, and accountability structures that
                  protect children and vulnerable people from harm. Not a
                  document. A living architecture.
                </p>
              </AnimateIn>

              <AnimateIn animation="slideUp" delay={100}>
                <p className="max-w-lg">
                  Most Nigerian institutions have a discipline policy. Very few
                  have a safeguarding system. The gap between the two is where
                  people are most at risk.
                </p>
              </AnimateIn>
            </article>
          </article>
        </Container>
      </header>

      <section className="border-t border-primary/8 pt-15 pb-20 md:py-20">
        <Container className="space-y-20">
          <article className="flex flex-col text-center gap-5 items-center justify-center">
            <h3 className="font-medium text-3xl mb-4 md:text-5xl max-w-md text-primary">
              For School
            </h3>

            <p className="text-base font-light leading-relaxed max-w-lg text-primary">
              The Full Safeguarding System everything below, designed and
              installed as one integrated whole.{' '}
            </p>

            <AnimateIn animation="slideUp" delay={200}>
              <div className="pt-0 md:pt-4">
                <Button size="default" variant="primary" className="mx-auto">
                  Book the full system
                </Button>
              </div>
            </AnimateIn>
          </article>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
            <Reveal>
              <figure className="relative rounded-[40px] md:rounded-[60px] aspect-video lg:aspect-square overflow-hidden">
                <img
                  src="others/1.jpg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </figure>
            </Reveal>

            <Accordion
              type="single"
              defaultValue="item-0"
              className="space-y-4"
            >
              {safeguardingServices.map((service, index) => (
                <AnimateIn animation="slideUp" delay={index * 100}>
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-primary/10 rounded-[20px] bg-white backdrop-blur-sm overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                      <h6 className="text-base md:text-lg font-medium text-primary group-hover:text-primary/80 transition-colors">
                        {service.title}
                      </h6>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-primary/80 leading-relaxed font-light text-base">
                        {service.content}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </AnimateIn>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      <section className="border-t border-primary/8 pt-15 pb-20 md:py-20">
        <Container className="space-y-20">
          <article className="flex flex-col text-center gap-5 items-center justify-center">
            <h3 className="font-medium text-3xl md:text-5xl mb-4 text-primary">
              For Organisations
            </h3>

            <p className="text-base font-light leading-relaxed max-w-lg text-primary">
              The Full Safeguarding System everything below, designed and
              installed as one integrated whole
            </p>

            <AnimateIn animation="slideUp" delay={200}>
              <div className="pt-0 md:pt-4">
                <Button size="default" variant="primary" className="mx-auto">
                  Book the full system
                </Button>
              </div>
            </AnimateIn>
          </article>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
            <Reveal>
              <figure className="relative rounded-[40px] md:rounded-[60px] aspect-video lg:aspect-square overflow-hidden">
                <img
                  src="others/2.jpg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </figure>
            </Reveal>

            <Accordion
              type="single"
              defaultValue="item-0"
              className="space-y-4"
            >
              {organisationalSafeguardingServices.map((service, index) => (
                <AnimateIn animation="slideUp" delay={index * 100}>
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-primary/10 rounded-[20px] bg-white backdrop-blur-sm overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                      <h6 className="text-base md:text-lg font-medium text-primary group-hover:text-primary/80 transition-colors">
                        {service.title}
                      </h6>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-primary/80 leading-relaxed font-light text-base">
                        {service.content}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </AnimateIn>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      {/* System 2 */}
      <header className="bg-accent space-y-20 text-white">
        <Container className="py-20 md:py-30">
          <article className="space-y-10 md:space-y-15">
            <AnimateIn animation="slideUp">
              <h3 className="text-white font-medium text-4xl md:text-5xl">
                SYSTEM 2 — Violence Prevention <span>&</span> De<span>-</span>
                escalation
              </h3>
            </AnimateIn>

            <article className="grid grid-cols-1 md:grid-cols-2 gap-x-20 leading-relaxed space-y-4 text-white/90 font-light text-sm md:text-base">
              <AnimateIn animation="slideUp" delay={100}>
                <p className="max-w-lg">
                  A Violence Prevention & De-escalation System is the trained
                  capacity, documented protocols, and institutional culture that
                  allows a school or organisation to recognise conflict early,
                  respond without causing further harm, and resolve it before it
                  becomes violence
                </p>
              </AnimateIn>

              <AnimateIn animation="slideUp" delay={100}>
                <p className="max-w-lg">
                  Most Nigerian institutions manage the aftermath of conflict.
                  This system addresses what happens before and during — in the
                  sixty seconds that determine whether a situation escalates or
                  resolves.
                </p>
              </AnimateIn>
            </article>
          </article>
        </Container>
      </header>

      <section className="border-t border-primary/8 pt-15 pb-20 md:py-20">
        <Container className="space-y-20">
          <article className="flex flex-col text-center gap-5 items-center justify-center">
            <h3 className="font-medium text-3xl mb-4 md:text-5xl max-w-md text-primary">
              For School
            </h3>

            <p className="text-base font-light leading-relaxed max-w-lg text-primary">
              The Full Safeguarding System everything below, designed and
              installed as one integrated whole.{' '}
            </p>

            <AnimateIn animation="slideUp" delay={200}>
              <div className="pt-0 md:pt-4">
                <Button size="default" variant="accent" className="mx-auto">
                  Book the full system
                </Button>
              </div>
            </AnimateIn>
          </article>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
            <Reveal>
              <figure className="relative rounded-[40px] md:rounded-[60px] aspect-video lg:aspect-square overflow-hidden">
                <img
                  src="others/7.jpg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </figure>
            </Reveal>

            <Accordion
              type="single"
              defaultValue="item-0"
              className="space-y-4"
            >
              {schoolViolencePreventionServices.map((service, index) => (
                <AnimateIn animation="slideUp" delay={index * 100}>
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-primary/10 rounded-[20px] bg-white backdrop-blur-sm overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                      <h6 className="text-base md:text-lg font-medium text-primary group-hover:text-primary/80 transition-colors">
                        {service.title}
                      </h6>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-primary/80 leading-relaxed font-light text-base">
                        {service.content}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </AnimateIn>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      <section className="border-t border-primary/8 pt-15 pb-20 md:py-20">
        <Container className="space-y-20">
          <article className="flex flex-col text-center gap-5 items-center justify-center">
            <h3 className="font-medium text-3xl md:text-5xl mb-4 text-primary">
              For Organisations
            </h3>

            <p className="text-base font-light leading-relaxed max-w-lg text-primary">
              The Full Safeguarding System everything below, designed and
              installed as one integrated whole
            </p>

            <AnimateIn animation="slideUp" delay={200}>
              <div className="pt-0 md:pt-4">
                <Button size="default" variant="accent" className="mx-auto">
                  Book the full system
                </Button>
              </div>
            </AnimateIn>
          </article>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
            <Reveal>
              <figure className="relative rounded-[40px] md:rounded-[60px] aspect-video lg:aspect-square overflow-hidden">
                <img
                  src="others/3.jpg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </figure>
            </Reveal>

            <Accordion
              type="single"
              defaultValue="item-0"
              className="space-y-4"
            >
              {workplaceViolencePreventionServices.map((service, index) => (
                <AnimateIn animation="slideUp" delay={index * 100}>
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-primary/10 rounded-[20px] bg-white backdrop-blur-sm overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                      <h6 className="text-base md:text-lg font-medium text-primary group-hover:text-primary/80 transition-colors">
                        {service.title}
                      </h6>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-primary/80 leading-relaxed font-light text-base">
                        {service.content}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </AnimateIn>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>
    </>
  );
};

export default WhatWeDo;
