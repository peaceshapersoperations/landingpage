import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import { HugeiconsIcon } from '@hugeicons/react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full text-sm font-normal transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive group relative overflow-hidden",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        primary: 'bg-primary text-white hover:bg-primary/90',
        accent: 'bg-accent text-white hover:bg-accent/90',
        white: 'bg-white text-primary hover:bg-white/90',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary: 'bg-secondary text-white hover:bg-secondary/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-4 py-4',
        sm: 'h-9 px-3 py-4 text-xs',
        lg: 'h-13 px-6 py-7 text-base',
        icon: 'size-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: any;
}

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  icon,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : 'button';

  const isPrimary = variant === 'primary';
  const isAccent = variant === 'accent';
  const isSecondary = variant === 'secondary';
  const isWhite = variant === 'white';

  let iconBgColor = 'bg-primary';
  let iconTextColor = 'text-white';

  if (isPrimary) {
    iconBgColor = 'bg-secondary';
    iconTextColor = 'text-primary-foreground';
  } else if (isAccent) {
    iconBgColor = 'bg-white';
    iconTextColor = 'text-accent';
  } else if (isSecondary) {
    iconBgColor = 'bg-white';
    iconTextColor = 'text-secondary';
  } else if (isWhite) {
    iconBgColor = 'bg-primary';
    iconTextColor = 'text-white';
  }

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <div className="flex items-center gap-3 relative h-full">
        <span className="block transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
          {children}
        </span>
        <span className="absolute left-0 flex items-center transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          {children}
        </span>
        {icon && (
          <div
            className={cn(
              'flex items-center justify-center rounded-full p-1.5 relative',
              iconBgColor,
            )}
          >
            <HugeiconsIcon
              icon={icon}
              className={cn(
                'size-3 transition-all duration-300 ease-in-out group-hover:translate-x-full group-hover:opacity-0',
                iconTextColor,
              )}
            />
            <HugeiconsIcon
              icon={icon}
              className={cn(
                'absolute size-4 transition-all duration-300 ease-in-out translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100',
                iconTextColor,
              )}
            />
          </div>
        )}
      </div>
    </Comp>
  );
}

export { Button, buttonVariants };
