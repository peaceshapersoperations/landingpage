import { Form, Link } from 'react-router';
import { footer } from '../../lib/constants';
import { Button } from '../ui/button';
import Container from './container';
import { HugeiconsIcon } from '@hugeicons/react';
import { cn } from '@/lib/utils';
import Reveal from '../ui/reveal';
import AnimateIn from '../ui/animate-in';

const Footer = () => {
  const { sectionOne, sectionTwo, sectionThree, sectionFour } = footer;

  return (
    <footer>
      <section className="relative overflow-hidden w-full h-100 sm:h-150">
        <img src="footer.jpeg" className="w-full h-full object-cover" alt="" />

        <div className="absolute bottom-0 left-0 right-0 h-full bg-linear-to-t from-primary via-[#333254d2] sm:via-[#333254a8] to-[#333254a8]"></div>

        <Container>
          <AnimateIn>
            <article className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full flex flex-col items-center justify-center text-white px-15 sm:px-0 before:absolute before:inset-0 before:bg-linear-to-b before:from-transparent before:to-primary before:opacity-100 before:z-10 space-y-6">
              <h3 className="relative z-20 text-2xl sm:text-4xl font-medium max-w-100 text-center">
                {sectionOne.article.heading}
              </h3>
              <p className="relative z-20 text-sm mb-8 font-light text-center max-w-110">
                {sectionOne.article.paragraph}
              </p>
              <Button
                icon={sectionOne.article.button.icon}
                variant={sectionOne.article.button.variant as any}
                size="lg"
                className="relative z-20"
              >
                {sectionOne.article.button.label}
              </Button>
            </article>
          </AnimateIn>
        </Container>
      </section>

      <section className="border-t border-[#38385d] bg-primary  text-center py-6 sm:pb-10 relative overflow-hidden grid place-items-center">
        <AnimateIn animation='slideUp'>
          <h3
            className={cn(
              'font-semibold text-8xl leading-24 sm:text-[6rem] sm:leading-20 md:text-[7rem] md:leading-24 lg:text-[10rem] lg:leading-40 xl:text-[10rem] xl:leading-40 relative z-10 py-10 tracking-tight',
              sectionTwo.article.color,
            )}
          >
            Peace Shapers <br /> Africa
          </h3>
        </AnimateIn>
      </section>

      <section className="bg-primary px-4 sm:px-0">
        <Container>
          <div className="border-t border-[#38385d] py-14 grid gap-20 grid-cols-1 xl:grid-cols-[max-content_1fr]">
            {/* Newsletter */}
            <section className="space-y-6">
              <article className="space-y-2 font-bold text-white text-center sm:text-left flex flex-col items-center sm:items-start">
                <h3 className="text-lg">{sectionThree.newsletter.heading}</h3>
                <p className="text-xs leading-relaxed font-light text-gray-300 max-w-100">
                  {sectionThree.newsletter.paragraph}
                </p>
              </article>

              <Form
                action=""
                className={cn(
                  'grid grid-cols-[1fr_auto] px-2 py-2 rounded-full border border-secondary',
                  sectionThree.newsletter.bg,
                )}
              >
                <input
                  type="email"
                  className="px-4 w-full h-full outline-none focus:outline-none placeholder:text-white text-white text-xs"
                  placeholder={sectionThree.newsletter.placeholder}
                />
                <Button type="submit" variant="secondary">
                  {sectionThree.newsletter.button.label}
                </Button>
              </Form>
            </section>

            {/* Links */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <article className="space-y-4 px-0 md:px-10 py-6 md:py-0 border-t md:border-t-0 md:border-l border-[#38385d] ">
                <h5 className="text-white font-bold">
                  {sectionThree.lists.navigation.title}
                </h5>

                <ul className="space-y-4">
                  {sectionThree.lists.navigation.list.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="space-y-4 px-0 md:px-10 py-6 md:py-0 border-t md:border-t-0 md:border-l border-[#38385d] ">
                <h5 className="text-white font-bold">
                  {sectionThree.lists.social.title}
                </h5>

                <ul className="space-y-4">
                  {sectionThree.lists.social.list.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.href}
                        className="text-gray-400 group hover:text-white transition-colors duration-300 flex items-center gap-2"
                      >
                        <HugeiconsIcon icon={item.icon} size={20} />
                        {item.label}
                        <span
                          className={cn(
                            item.iconAlt.color,
                            'group-hover:mx-2 transition-all duration-300',
                          )}
                        >
                          <HugeiconsIcon icon={item.iconAlt.icon} size={20} />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="space-y-4 px-0 md:px-10 py-6 md:py-0 border-t md:border-t-0 md:border-l border-[#38385d] ">
                <h5 className="text-white font-bold">
                  {sectionThree.lists.contact.title}
                </h5>

                <ul className="space-y-4">
                  {sectionThree.lists.contact.list.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.href}
                        className="text-gray-400 group hover:text-white transition-colors duration-300 flex items-center gap-2"
                      >
                        {item.label}
                        <span
                          className={cn(
                            item.iconAlt.color,
                            'group-hover:mx-2 transition-all duration-300',
                          )}
                        >
                          <HugeiconsIcon icon={item.iconAlt.icon} size={20} />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            </section>
          </div>
        </Container>
      </section>

      <section className="bg-primary px-4 sm:px-0">
        <Container>
          <div className="border-t border-[#38385d] py-10 flex flex-wrap gap-5 items-center justify-center sm:justify-between">
            <small className="hidden sm:block text-gray-400 text-sm">
              {sectionFour.copyright.text}
            </small>

            <Link
              to={sectionFour.link.href}
              className="text-white text-sm transition-colors duration-300 flex items-center gap-2"
            >
              {sectionFour.link.label}
              <span
                className={cn(
                  'w-6 h-6 grid place-items-center rounded-full',
                  sectionFour.link.icon.bg,
                )}
              >
                <HugeiconsIcon
                  icon={sectionFour.link.icon.icon}
                  size={15}
                  className={sectionFour.link.icon.color}
                />
              </span>
            </Link>

            <small className="block sm:hidden text-gray-400 text-sm">
              {sectionFour.copyright.text}
            </small>
          </div>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
