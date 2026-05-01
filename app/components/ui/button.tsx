import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import { HugeiconsIcon } from '@hugeicons/react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transform active:scale-95 hover:scale-105",
  {
    variants: {
      variant: {
        filled: '',
        outline: '',
      },
      colorScheme: {
        dark: '',
        white: '',
        primary: '',
        secondary: '',
        accent: '',
      },
      size: {
        xs: 'h-6 px-3 py-4 has-[>svg]:px-2 text-xs',
        sm: 'h-8 px-4 py-5 has-[>svg]:px-3 text-xs',
        default: 'h-10 px-6 py-6 has-[>svg]:px-4',
        lg: 'h-12 px-8 py-7 has-[>svg]:px-6 text-base',
        xl: 'h-14 px-10 py-4 has-[>svg]:px-8 text-lg',
        icon: 'size-10 p-0',
        'icon-xs': 'size-6 p-0',
        'icon-sm': 'size-8 p-0',
        'icon-lg': 'size-12 p-0',
        'icon-xl': 'size-14 p-0',
      },
    },
    compoundVariants: [
      // Filled variants
      {
        variant: 'filled',
        colorScheme: 'primary',
        className:
          'bg-primary text-primary-foreground hover:bg-primary/90',
      },
      {
        variant: 'filled',
        colorScheme: 'secondary',
        className:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      },
      {
        variant: 'filled',
        colorScheme: 'accent',
        className:
          'bg-accent text-accent-foreground hover:bg-accent/80',
      },
      {
        variant: 'filled',
        colorScheme: 'dark',
        className:
          'bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200',
      },
      {
        variant: 'filled',
        colorScheme: 'white',
        className:
          'bg-[#fff] border border-[#fff] text-primary',
      },
      // Outline variants
      {
        variant: 'outline',
        colorScheme: 'primary',
        className:
          'border border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground',
      },
      {
        variant: 'outline',
        colorScheme: 'secondary',
        className:
          'border border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-secondary-foreground',
      },
      {
        variant: 'outline',
        colorScheme: 'accent',
        className:
          'border border-accent text-accent bg-transparent hover:bg-accent hover:text-accent-foreground',
      },
      {
        variant: 'outline',
        colorScheme: 'dark',
        className:
          'border border-gray-900 text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white dark:border-gray-100 dark:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900',
      },
      {
        variant: 'outline',
        colorScheme: 'white',
        className:
          'border border-[#fff] text-[#fff] bg-transparent hover:bg-[#fff] hover:text-gray-900',
      },
    ],
    defaultVariants: {
      variant: 'filled',
      colorScheme: 'primary',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: any; // Hugeicons icon component from @hugeicons/core-free-icons
  iconPosition?: 'left' | 'right';
  iconSize?: number;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      colorScheme,
      size,
      asChild = false,
      icon,
      iconPosition = 'left',
      iconSize = 16,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot.Root : 'button';

    const iconElement = icon ? (
      <HugeiconsIcon icon={icon} size={iconSize} className="shrink-0" />
    ) : null;

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, colorScheme, size, className }),
        )}
        ref={ref}
        {...props}
      >
        {iconPosition === 'left' && iconElement}
        {children}
        {iconPosition === 'right' && iconElement}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
