import { useEffect, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { HugeiconsIcon } from '@hugeicons/react';
import { Cancel01Icon } from '@hugeicons/core-free-icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, title, subtitle, children }: ModalProps) => {
  const [mounted, setMounted] = useState(false);

  // Ensure we're on client (for SSR safety)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle ESC + scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const body = document.body;

    const originalOverflow = body.style.overflow;
    const originalPaddingRight = body.style.paddingRight;

    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = 'hidden';
    if (scrollBarWidth > 0) {
      body.style.paddingRight = `${scrollBarWidth}px`;
    }

    window.addEventListener('keydown', handleEsc);

    return () => {
      body.style.overflow = originalOverflow;
      body.style.paddingRight = originalPaddingRight;
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-[30px] sm:rounded-[40px] max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="relative z-20 flex items-center justify-between p-6 sm:p-8 border-b border-gray-100">
          <div>
            <h2 className="text-2xl sm:text-3xl font-normal text-primary capitalize">
              {title}
            </h2>
            {subtitle && <p className="text-primary/60 mt-1">{subtitle}</p>}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
            aria-label="Close modal"
          >
            <HugeiconsIcon
              icon={Cancel01Icon}
              size={24}
              className="text-primary"
            />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="relative z-20 font-light leading-relaxed overflow-y-auto max-h-[60vh] p-6 sm:p-8">
          {children}
        </div>

        {/* Pattern */}
        <div className="absolute inset-0 opacity-10 z-10 pointer-events-none">
          <svg className="w-full h-full">
            <defs>
              <pattern
                id="diagonal-modal"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="30"
                  stroke="#ed7256"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-modal)" />
          </svg>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default Modal;