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
    <nav className="bg-gray-200 relative top-0 left-0 right-0 z-60">
      <Container className="flex md:flex-col lg:flex-row gap-y-5 justify-between gap-x-2 py-8 md:py-8">
        <div className="grid grid-cols-[auto_1fr] items-center justify-between gap-x-5 lg:gap-x-10">
          <Link to="/">
            <img
              src="/logo/icon-new.png"
              alt="Peace Shapers Africa Logo Icon"
              className="h-16 w-16"
            />
          </Link>

          <ul className="hidden sm:flex text-sm font-heading overflow-hidden bg-white backdrop-blur-3xl rounded-xl">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;

              return (
                <li key={link.id} className="flex shrink-0">
                  <Link
                    className={cn(
                      'text-primary/90 font-light py-3.5 sm:px-4 lg:px-5 flex items-center gap-3 group hover:opacity-70',
                      isActive && 'bg-secondary text-white',
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
            size="default"
            className="hidden lg:block"
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
