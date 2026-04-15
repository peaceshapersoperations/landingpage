import { cn } from '@/lib/utils';

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('max-w-350 mx-auto px-6 h-full', className)}>
      {children}
    </div>
  );
};

export default Container;
