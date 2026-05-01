const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`max-w-420 mx-auto px-6 h-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;
