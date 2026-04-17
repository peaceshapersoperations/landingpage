import { Link, useLocation } from 'react-router';
import { navLinks } from '@/lib/constants';
import { Cancel01FreeIcons } from '@hugeicons/core-free-icons';
import { cn } from '@/lib/utils';
import { HugeiconsIcon } from '@hugeicons/react';
import { useEffect, useState } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { pathname } = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle animation states and body scroll lock
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsAnimating(true);
        setTimeout(() => onClose(), 300);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      setIsAnimating(false);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => onClose(), 300);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop - only render when menu is open and not animating out */}
      {!isAnimating && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={handleClose}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out',
          isOpen && !isAnimating ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Link to="/" onClick={handleClose} className="flex items-center">
              <img
                src="/logo/icon-new.png"
                alt="Peace Shapers Africa Logo Icon"
                className="h-12 w-12"
              />
            </Link>

            <button
              onClick={handleClose}
              className="flex items-center justify-center aspect-square p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <HugeiconsIcon icon={Cancel01FreeIcons} size={25} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-2 px-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;

                return (
                  <li key={link.id}>
                    <Link
                      to={link.path}
                      onClick={handleClose}
                      className={cn(
                        'block py-3 px-4 text-base font-light rounded-lg transition-all duration-200',
                        'hover:bg-secondary/10 hover:text-secondary',
                        isActive && 'bg-secondary text-white font-normal',
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
