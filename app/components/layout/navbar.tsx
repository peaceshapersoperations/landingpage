import { HugeiconsIcon } from '@hugeicons/react';
import Container from './container';
import { Menu01Icon, X } from '@hugeicons/core-free-icons';
import { Button } from '../ui/button';
import { navigation } from '../../lib/constants';
import { Link, useLocation } from 'react-router';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import Reveal from '../ui/reveal';

const Navbar = () => {
  const { logo, list, button } = navigation;
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const headerHeight =
            window.innerHeight * (window.innerWidth >= 640 ? 1.6 : 1.25);

          setIsScrolled(window.scrollY > headerHeight);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          'z-100 w-full top-0 will-change-transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
          isScrolled
            ? 'sticky translate-y-0 opacity-100 scale-100 bg-white shadow-lg py-2'
            : 'translate-y-3 opacity-90 scale-[0.98] py-4 bg-transparent',
        )}
      >
        <Container>
          <div
            className={cn(
              'py-3 flex items-center justify-between transition-all duration-500',
            )}
          >
            {/* Logo */}
            <figure className="w-15 pl-3 md:pl-0">
              <img
                className="w-full h-full object-contain"
                src={logo.src}
                alt={logo.alt}
              />
            </figure>

            {/* Desktop Navigation */}
            <section>
              <ul className="hidden lg:flex items-center gap-5 lg:gap-10">
                {list.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        className={cn(
                          'text-base font-normal transition-colors duration-300',
                          'text-gray-500 hover:text-black',
                          active && 'text-secondary hover:text-accent',
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>

            {/* Right Section */}
            <section className="flex items-center gap-2">
              {/* Mobile Menu Button */}
              <button
                type="button"
                className="block lg:hidden rounded-full p-3 bg-secondary text-white transition-all duration-300 hover:scale-105 active:scale-95"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <HugeiconsIcon icon={Menu01Icon} />
              </button>

              {/* CTA Button */}
              <div className="hidden md:block">
                <Link to={button.href}>
                  <Button variant="secondary" size="lg" icon={button.icon}>
                    {button.label}
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-100 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Floating Menu */}
          <div
            className="fixed top-5 right-6 z-50 bg-white rounded-lg shadow-xl p-4 w-64 animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-end mb-4">
              {/* <h3 className="text-lg font-semibold text-primary">Menu</h3> */}
              <button
                className="p-3 bg-slate-100 text-gray-800 hover:bg-gray-200 rounded-full transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <HugeiconsIcon icon={X} />
              </button>
            </div>

            {/* Links */}
            <ul className="space-y-2">
              {list.map((item, index) => {
                const active = pathname === item.href;

                return (
                  <Reveal key={item.href} delay={index * 100} duration={400}>
                    <li>
                      <Link
                        to={item.href}
                        className={cn(
                          'block px-4 py-3 rounded-lg text-sm transition-all duration-300 border',
                          active
                            ? 'bg-secondary text-white border-transparent'
                            : 'text-primary hover:bg-gray-100 border-gray-50',
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
