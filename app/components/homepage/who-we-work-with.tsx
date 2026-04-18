import { HugeiconsIcon } from '@hugeicons/react';
import Container from '../layout/container';
import { Tick02Icon } from '@hugeicons/core-free-icons';
import AnimateIn from '../ui/animate-in';

const WhoWeWorkWith = () => {
  return (
    <section className="bg-gray-200">
      <Container className="pb-20 pt-5 md:pt-20 md:pb-30">
        <section className="grid gap-10 md:gap-10">
          <AnimateIn animation="slideUp">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-y-10">
              <figure className="aspect-square md:aspect-4/3 rounded-[40px] md:rounded-[60px] overflow-hidden">
                <img
                  src="who-we-work-with/1.jpg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </figure>

              <div className="rounded-[40px] md:rounded-[60px] flex flex-col justify-center p-0 lg:px-30 lg:p-10 space-y-5 lg:space-y-10 text-primary">
                <h4 className="text-2xl md:text-3xl lg:text-4xl text-primary">
                  Schools&nbsp;&nbsp;
                </h4>

                <ul className="space-y-2 sm:space-y-4 text-base sm:text-base text-primary/90 font-light">
                  <li className="flex gap-2 items-center">
                    <HugeiconsIcon
                      icon={Tick02Icon}
                      size={20}
                      className="text-primary"
                    />
                    Primary
                  </li>
                  <li className="flex gap-2 items-center">
                    <HugeiconsIcon
                      icon={Tick02Icon}
                      size={20}
                      className="text-primary"
                    />
                    Secondary
                  </li>
                  <li className="flex gap-2 items-center">
                    <HugeiconsIcon
                      icon={Tick02Icon}
                      size={20}
                      className="text-primary"
                    />
                    Boarding
                  </li>
                  <li className="flex gap-2 items-center">
                    <HugeiconsIcon
                      icon={Tick02Icon}
                      size={20}
                      className="text-primary"
                    />
                    International
                  </li>
                </ul>
              </div>
            </article>
          </AnimateIn>

          <AnimateIn delay={200} animation="slideUp">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-y-10">
              <figure className="aspect-square md:aspect-4/3 rounded-[40px] md:rounded-[60px] overflow-hidden lg:order-last">
                <img
                  src="who-we-work-with/2.jpg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </figure>

              <div className="rounded-[40px] md:rounded-[60px] flex flex-col justify-center p-0 md:px-20 xl:px-40 lg:p-10 space-y-5 lg:space-y-10 text-primary">
                <h4 className="text-3xl md:text-3xl lg:text-4xl">
                  Organisations
                </h4>

                <ul className="space-y-2 sm:space-y-4 text-sm sm:text-base text-primary/90 font-light">
                  <li className="flex gap-2 items-center">
                    <HugeiconsIcon
                      icon={Tick02Icon}
                      size={20}
                      className="text-primary"
                    />
                    Private companies
                  </li>
                  <li className="flex gap-2 items-center">
                    <HugeiconsIcon
                      icon={Tick02Icon}
                      size={20}
                      className="text-primary"
                    />
                    NGOs & development organisations
                  </li>
                  <li className="flex gap-2 items-center">
                    <HugeiconsIcon
                      icon={Tick02Icon}
                      size={20}
                      className="text-primary"
                    />
                    Faith-based organisations & churches
                  </li>
                  <li className="flex gap-2 items-center">
                    <HugeiconsIcon
                      icon={Tick02Icon}
                      size={20}
                      className="text-primary"
                    />
                    Hospitals & healthcare institutions
                  </li>
                  <li className="flex gap-2 items-center">
                    <HugeiconsIcon
                      icon={Tick02Icon}
                      size={20}
                      className="text-primary"
                    />
                    Government agencies & MDAs
                  </li>
                </ul>
              </div>
            </article>
          </AnimateIn>
        </section>
      </Container>
    </section>
  );
};

export default WhoWeWorkWith;
