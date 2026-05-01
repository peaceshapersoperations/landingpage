import { Link, useLocation } from 'react-router';
import { useState, useEffect, useRef } from 'react';
import Container from './container';
import { Button } from '../ui/button';
import { navLinks } from '@/lib/constants';
import LetterSwapForward from '../ui/letter-swap-forward-anim';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Menu03Icon,
  Cancel01Icon,
  ChevronDown,
} from '@hugeicons/core-free-icons';
import { cn } from '@/lib/utils';

const Navbar = ({ alt }: { alt?: boolean }) => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedDropdowns, setExpandedDropdowns] = useState<Set<string>>(
    new Set(),
  );
  const dropdownRef = useRef<HTMLLIElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    const handleMobileMenuClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleMobileMenuClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mousedown', handleMobileMenuClickOutside);
    };
  }, [isDropdownOpen, isMobileMenuOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileDropdown = (linkId: string) => {
    setExpandedDropdowns((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(linkId)) {
        newSet.delete(linkId);
      } else {
        newSet.add(linkId);
      }
      return newSet;
    });
  };

  return (
    <nav className="bg-transparent absolute z-100 top-5 left-0 w-full px-4">
      <Container
        className={cn(
          'flex justify-between items-center backdrop-blur-2xl rounded-full py-2',
          alt ? 'border border-primary/6' : 'bg-white/10',
        )}
      >
        <Link to="/" className="w-13 md:w-16 -ml-2 md:p-1">
          <img
            src={alt ? 'logo/icon.png' : 'logo/icon-light.png'}
            alt="Peace Shapers Logo"
            className="hidden md:block w-full h-full object-contain"
          />
          <img
            src={alt ? 'logo/icon.png' : 'logo/icon-light.png'}
            alt="Peace Shapers Logo"
            className="block md:hidden w-full h-full object-contain"
          />
        </Link>

        <ul className="hidden lg:flex gap-6">
          {navLinks.map((link) => (
            <li
              key={link.id}
              ref={link.dropdown ? dropdownRef : undefined}
              className={cn(
                'font-parkinsans transition-colors duration-300 relative',
                alt
                  ? location.pathname === link.path
                    ? 'text-secondary'
                    : 'text-primary/50 hover:text-primary font-normal'
                  : location.pathname === link.path
                    ? 'text-secondary'
                    : 'text-white/80 hover:text-white font-medium',
              )}
            >
              {link.dropdown ? (
                <div className="flex items-center gap-1">
                  <Link to={link.path}>
                    <LetterSwapForward label={link.label} />
                  </Link>
                  <button
                    onClick={toggleDropdown}
                    className="cursor-pointer bg-transparent border-none p-0 font-inherit"
                    aria-label="Toggle dropdown"
                  >
                    <HugeiconsIcon icon={ChevronDown} size={16} />
                  </button>
                </div>
              ) : (
                <Link to={link.path}>
                  <LetterSwapForward label={link.label} />
                </Link>
              )}

              {link.dropdown && isDropdownOpen && (
                <div
                  className={cn(
                    'absolute top-full left-0 mt-2 min-w-[250px] rounded-lg shadow-lg backdrop-blur-3xl transition-all duration-300 ',
                    alt ? 'bg-white' : 'bg-secondary',
                  )}
                >
                  <ul className="py-2">
                    {link.dropdown.map((dropdownItem) => (
                      <li key={dropdownItem.id}>
                        <Link
                          to={dropdownItem.path}
                          onClick={() => setIsDropdownOpen(false)}
                          className={cn(
                            'block px-6 py-2 text-sm transition-colors duration-200',
                            alt
                              ? location.pathname === dropdownItem.path
                                ? 'text-white bg-secondary/10 font-medium'
                                : 'text-primary/70 hover:text-primary hover:bg-primary/5'
                              : location.pathname === dropdownItem.path
                                ? 'text-white bg-white/20 font-medium'
                                : 'text-white/70 hover:text-white hover:bg-white/10',
                          )}
                        >
                          {dropdownItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div>
          <Button
            colorScheme="secondary"
            size="default"
            className="hidden md:flex"
          >
            Work with us
          </Button>

          <button
            onClick={toggleMobileMenu}
            className={cn(
              'grid place-items-center rounded-full md:hidden',
              alt ? 'text-primary' : 'text-white',
            )}
          >
            <HugeiconsIcon icon={Menu03Icon} size={30} />
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-50 animate-fade-in"
          onClick={toggleMobileMenu}
        >
          <div
            className={cn(
              'absolute top-0 right-0 h-full w-80 max-w-full shadow-2xl transform transition-all duration-300 ease-out',
              'animate-slide-in-right',
              alt ? 'bg-white' : 'bg-secondary',
            )}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.5' stroke-opacity='0.05'%3E%3Cpath d='M0 10Q25 0 50 10T100 10'/%3E%3Cpath d='M0 15Q25 5 50 15T100 15'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200/20 animate-fade-in">
              <Link to="/" className="w-13">
                <img
                  src={alt ? 'logo/icon.png' : 'logo/icon-light.png'}
                  alt="Peace Shapers Logo"
                  className="w-full h-full object-contain"
                />
              </Link>
              <button
                onClick={toggleMobileMenu}
                className={cn(
                  'grid place-items-center rounded-full p-2',
                  alt ? 'text-primary' : 'text-white',
                )}
              >
                <HugeiconsIcon icon={Cancel01Icon} size={24} />
              </button>
            </div>

            <nav className="p-4">
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li
                    key={link.id}
                    className="animate-fade-in-up"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: 'both',
                    }}
                  >
                    <div>
                      {link.dropdown ? (
                        <button
                          onClick={() =>
                            toggleMobileDropdown(link.id.toString())
                          }
                          className={cn(
                            'flex items-center justify-between w-full py-3 px-4 rounded-lg transition-colors duration-200 font-parkinsans text-left',
                            alt
                              ? 'text-primary/70 hover:text-primary hover:bg-primary/5'
                              : 'text-white/80 hover:text-white hover:bg-white/10',
                          )}
                        >
                          <span>{link.label}</span>
                          <HugeiconsIcon
                            icon={ChevronDown}
                            size={16}
                            className={cn(
                              'transition-transform duration-200',
                              expandedDropdowns.has(link.id.toString())
                                ? 'rotate-180'
                                : '',
                            )}
                          />
                        </button>
                      ) : (
                        <Link
                          to={link.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            'block py-2 px-4 rounded-lg transition-colors duration-200 font-parkinsans',
                            alt
                              ? location.pathname === link.path
                                ? 'bg-secondary/10 text-secondary font-medium'
                                : 'text-primary/70 hover:text-primary hover:bg-primary/5'
                              : location.pathname === link.path
                                ? 'bg-white/20 text-white font-medium'
                                : 'text-white/80 hover:text-white hover:bg-white/10',
                          )}
                        >
                          {link.label}
                        </Link>
                      )}

                      {link.dropdown && (
                        <ul
                          className={cn(
                            'ml-4 space-y-1 overflow-hidden transition-all duration-300',
                            expandedDropdowns.has(link.id.toString())
                              ? 'max-h-96 opacity-100 mt-2'
                              : 'max-h-0 opacity-0',
                          )}
                        >
                          {link.dropdown.map((dropdownItem) => (
                            <li key={dropdownItem.id}>
                              <Link
                                to={dropdownItem.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                  'block py-2 px-4 rounded-md text-sm transition-colors duration-200',
                                  alt
                                    ? location.pathname === dropdownItem.path
                                      ? 'bg-secondary/10 text-secondary font-medium'
                                      : 'text-primary/60 hover:text-primary hover:bg-primary/5'
                                    : location.pathname === dropdownItem.path
                                      ? 'bg-white/20 text-white font-medium'
                                      : 'text-white/70 hover:text-white hover:bg-white/10',
                                )}
                              >
                                {dropdownItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div
                className="mt-6 px-4 animate-fade-in-up"
                style={{
                  animationDelay: `${(navLinks.length + 1) * 100}ms`,
                  animationFillMode: 'both',
                }}
              >
                <Button
                  colorScheme="white"
                  size="sm"
                  className="w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Work with us
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
