import { HugeiconsIcon } from '@hugeicons/react';
import Container from '../layout/container';
import { Tick02Icon } from '@hugeicons/core-free-icons';

const WhoWeWorkWith = () => {
  return (
    <section className="bg-[#5c5b76]">
      <article className="text-center pt-10 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          <h3 className="font-medium text-[4rem] lg:text-[10rem] text-white/8  md:text-white/5 leading-tight inline-block px-4">
            who&nbsp;we&nbsp;work&nbsp;with
          </h3>
          <h3 className="font-medium text-[4rem] lg:text-[10rem] text-white/8  md:text-white/5 leading-tight inline-block px-4">
            who&nbsp;we&nbsp;work&nbsp;with
          </h3>
          <h3 className="font-medium text-[4rem] lg:text-[10rem] text-white/8  md:text-white/5 leading-tight inline-block px-4">
            who&nbsp;we&nbsp;work&nbsp;with
          </h3>
        </div>
      </article>

      <Container className="pb-20 md:pb-20 pt-10">
        <section className="grid gap-20 md:gap-30">
          <article className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] items-center gap-10">
            <figure className="hidden lg:block aspect-square md:aspect-4/3 rounded-[40px] md:rounded-[60px] overflow-hidden">
              <img
                src="who-we-work-with/1.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </figure>

            <div className="lg:p-10 space-y-4 text-white/70">
              <h4 className="text-4xl md:text-5xl lg:text-6xl text-white">
                Schools&nbsp;&nbsp;
              </h4>
              <div className="flex">
                <figure className="w-14 md:w-18 border-3 md:border-4 rounded-full">
                  <img
                    src="who-we-work-with/head-2.png"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </figure>
                <figure className="-ml-4 w-14 md:w-18 border-3 md:border-4 rounded-full">
                  <img
                    src="who-we-work-with/head-4.png"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </figure>
              </div>

              <ul className="space-y-2 sm:space-y-4 text-white/70 text-sm sm:text-base">
                <li className="flex gap-2 items-center">
                  <HugeiconsIcon icon={Tick02Icon} />
                  Primary
                </li>
                <li className="flex gap-2 items-center">
                  <HugeiconsIcon icon={Tick02Icon} />
                  Secondary
                </li>
                <li className="flex gap-2 items-center">
                  <HugeiconsIcon icon={Tick02Icon} />
                  Boarding
                </li>
                <li className="flex gap-2 items-center">
                  <HugeiconsIcon icon={Tick02Icon} />
                  International
                </li>
              </ul>
            </div>

            <figure className="block lg:hidden aspect-square md:aspect-video rounded-[40px] md:rounded-[60px] overflow-hidden">
              <img
                src="who-we-work-with/1.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </figure>
          </article>

          <article className="grid grid-cols-1 lg:grid-cols-[max-content_1fr] items-center gap-10">
            <div className="lg:p-10 space-y-4 relative z-10 text-white">
              <h4 className="text-4xl md:text-5xl lg:text-6xl">
                Organisations
              </h4>
              <div className="flex">
                <figure className="w-14 md:w-18 border-3 md:border-4 rounded-full">
                  <img
                    src="who-we-work-with/head-1.png"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </figure>
                <figure className="-ml-4 w-14 md:w-18 border-3 md:border-4 rounded-full">
                  <img
                    src="who-we-work-with/head-3.png"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </figure>
              </div>

              <ul className="space-y-2 sm:space-y-4 text-white/70 text-sm sm:text-base">
                <li className="flex gap-2 items-center">
                  <HugeiconsIcon icon={Tick02Icon} />
                  Private companies
                </li>
                <li className="flex gap-2 items-center">
                  <HugeiconsIcon icon={Tick02Icon} />
                  NGOs & development organisations
                </li>
                <li className="flex gap-2 items-center">
                  <HugeiconsIcon icon={Tick02Icon} />
                  Faith-based organisations & churches
                </li>
                <li className="flex gap-2 items-center">
                  <HugeiconsIcon icon={Tick02Icon} />
                  Hospitals & healthcare institutions
                </li>
                <li className="flex gap-2 items-center">
                  <HugeiconsIcon icon={Tick02Icon} />
                  Government agencies & MDAs
                </li>
              </ul>
            </div>

            <figure className="aspect-square md:aspect-4/3 rounded-[40px] md:rounded-[60px] overflow-hidden">
              <img
                src="who-we-work-with/2.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </figure>
          </article>
        </section>
      </Container>
    </section>
  );
};

export default WhoWeWorkWith;
