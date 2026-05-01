import React from 'react';
import Container from '../layouts/container';


const WhatIsSafetyAudits = () => {
  return (
    <section className="bg-secondary/10">
      <Container>
        <div className="py-20 space-y-10 md:space-y-15">
          <header className="flex justify-center text-secondary text-[10px] md:text-base lg:text-sm capitalize tracking-wider gap-4">
            <h2 className="bg-secondary/10 rounded-full px-4 py-2">
              What is a Safety Audit
            </h2>
          </header>

          <section className="lg:columns-3 bg-white mx-auto max-w-[1300px] p-8 sm:p-10 md:p-15 gap-15 rounded-[40px]">
            <article className="text-sm md:text-base space-y-8 font-light leading-relaxed text-primary">
              <p>
                Most Nigerian schools and organisations discover their safety
                risks one of two ways: someone reports a concern, or something
                goes badly wrong. An audit gives you a third option. You find
                out first.
              </p>

              <p>
                A Peace Shapers Safety Audit examines your policies, your
                culture, your reporting structures, your leadership behaviour,
                and your physical environment identifying where risks exist
                before they become incidents.
              </p>

              <p>
                We are trained to find what institutions have normalised: the
                gaps that exist not because nobody cared, but because nobody had
                the framework to see them. If a gap exists in your safety
                system, we will find it.
              </p>
            </article>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default WhatIsSafetyAudits;
