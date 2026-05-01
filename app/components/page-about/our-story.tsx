import React from 'react';
import Container from '../layouts/container';

const OurStory = () => {
  return (
    <section
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.3' stroke-opacity='0.05'%3E%3Cpath d='M0 10Q25 0 50 10T100 10'/%3E%3Cpath d='M0 15Q25 5 50 15T100 15'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
      className="bg-secondary/10"
    >
      <Container>
        <div className="py-20 space-y-10 md:space-y-15">
          <header className="flex justify-center text-secondary text-[10px] md:text-base lg:text-sm capitalize tracking-wider gap-4">
            <h2 className="bg-secondary/10 rounded-full px-4 py-2">Our Story</h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-[1300px]">
            <figure className="relative rounded-[40px] overflow-hidden aspect-4/3 md:aspect-auto">
              <img
                src="about/about-1.jpg"
                className="w-full h-full object-cover"
                alt=""
              />

              <div className="absolute bottom-0 left-0 flex w-full p-10 min-h-[40%] bg-linear-to-t from-primary via-primary/90 to-transparent">
                <h5 className="max-w-sm text-white text-base md:text-2xl font-normal self-end">
                  We built the framework. And then we built Peace Shapers Africa
                  to install it.
                </h5>
              </div>
            </figure>

            <div className="flex flex-col gap-4 text-primary text-sm md:text-base">
              <article className="rounded-[40px] bg-white p-8 md:p-10">
                <p className="font-light leading-relaxed">
                  Peace Shapers Africa was built from a conviction that Nigerian
                  schools and organisations deserved safety systems as rigorous,
                  as intentional, and as institution-specific as the best
                  practice available anywhere in the world.
                </p>
              </article>

              <article className="rounded-[40px] bg-white p-8 md:p-10">
                <p className="font-light leading-relaxed">
                  Not adapted from a UK model. Not imported from a USAID
                  framework. Built in Nigeria, for the specific cultural
                  dynamics, power structures, institutional histories, and
                  safety realities that determine what safety actually looks
                  like here.
                </p>
              </article>
              <article className="rounded-[40px] bg-white p-8 md:p-10">
                <p className="font-light leading-relaxed">
                  We started in schools working on violence prevention,
                  student leadership, and child protection. We saw the same
                  pattern everywhere: people who cared, institutions that lacked
                  the system. Teachers who wanted to help students they could
                  see were struggling, but had no protocol, no training, no
                  pathway. School leaders who wanted their schools to be safer,
                  but had no framework for what a safety system actually looked
                  like
                </p>
              </article>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurStory;
