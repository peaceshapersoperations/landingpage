import { cn } from '@/lib/utils';

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('container mx-auto px-5 h-full', className)}>
      {children}
    </div>
  );
};

export default Container;
