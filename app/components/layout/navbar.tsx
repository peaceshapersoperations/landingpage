import { Link, useLocation } from 'react-router';
import { useState } from 'react';
import Container from './container';
import { navLinks } from '@/lib/constants';
import { Button } from '../ui/button';
import { Menu, ArrowRight02FreeIcons } from '@hugeicons/core-free-icons';
import { cn } from '@/lib/utils';
import { HugeiconsIcon } from '@hugeicons/react';
import MobileMenu from './mobile-menu';

const Navbar = () => {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-white relative top-0 left-0 right-0 z-60">
      <Container className="flex flex-wrap gap-y-5 justify-between gap-x-2 py-8 md:py-8">
        <div className="flex items-center md:gap-x-5 lg:gap-x-10">
          <Link to="/">
            <img
              src="/logo/icon-new.png"
              alt="Peace Shapers Africa Logo Icon"
              className="h-16 w-16"
            />
          </Link>

          <ul className="hidden md:flex text-sm font-heading bg-primary/10 backdrop-blur-3xl rounded-xl overflow-hidden">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;

              return (
                <li key={link.id} className="grid">
                  <Link
                    className={cn(
                      'text-primary/90 font-light py-3.5 md:px-4 lg:px-4 flex items-center gap-3 group hover:opacity-70',
                      isActive && 'bg-primary text-white',
                    )}
                    to={link.path}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            size="lg"
            className="hidden sm:block"
            variant="secondary"
            icon={ArrowRight02FreeIcons}
          >
            Get Started
          </Button>

          <button
            className="flex sm:hidden cursor-pointer items-center justify-center aspect-square p-4 bg-secondary text-white rounded-full"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <HugeiconsIcon icon={Menu} size={18} />
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
