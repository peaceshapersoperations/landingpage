import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { coreTeam } from '@/lib/constants';
import Modal from '@/components/ui/modal';
import { cn } from '@/lib/utils';

const Member = ({
  item,
  variant,
}: {
  item: (typeof coreTeam)[0];
  variant: 'accent' | 'secondary' | 'primary';
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="relative flex flex-col w-full sm:w-90 p-4 sm:p-5 bg-white rounded-[30px] sm:rounded-[40px] overflow-hidden">
      <figure className="relative z-20 rounded-[30px] sm:rounded-[40px] h-80 sm:h-80 md:h-80 lg:h-[350px] overflow-hidden">
        <img
          src={item.image}
          className="w-full h-full object-cover object-top"
          alt={item.name}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-primary/40 to-primary/70"></div>
      </figure>

      <article className="relative z-20 flex flex-col gap-3 sm:gap-4 md:gap-5 px-3 pt-4 sm:pt-6 pb-2">
        <div className="">
          <h4 className="text-primary text-lg sm:text-base capitalize font-bold leading-tight">
            {item.name}
          </h4>
          <small className="rounded-full text-primary/80">{item.role}</small>
        </div>

        <button
          onClick={openModal}
          className={cn(
            'flex items-center gap-1 text-accent hover:text-accent/90 transition-colors duration-300 cursor-pointer text-sm',
            variant === 'accent' && 'text-accent',
            variant === 'secondary' && 'text-secondary',
            variant === 'primary' && 'text-primary',
          )}
        >
          Open bio
          <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
        </button>
      </article>

      {/* Diagonal line pattern overlay */}
      <div className="absolute inset-0 opacity-20 z-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id={`diagonal-${item.id}`}
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
          <rect width="100%" height="100%" fill={`url(#diagonal-${item.id})`} />
        </svg>
      </div>

      {/* Bio Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={item.name}
        subtitle={item.role}
      >
        <div className="space-y-4">
          {item.bio.map((paragraph, index) => (
            <p key={index} className="text-gray-700 text-sm md:text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default Member;
