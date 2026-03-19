"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, 'children'> {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'default' | 'lg' | 'icon';
  isLoading?: boolean;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', isLoading, children, disabled, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-parra-charcoal disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden";
    
    const variants = {
      default: "bg-parra-wood text-white shadow hover:bg-parra-wood-dark",
      outline: "border border-parra-wood text-parra-wood bg-transparent hover:bg-parra-sand-light",
      ghost: "hover:bg-parra-sand-light text-parra-charcoal",
      link: "text-parra-wood underline-offset-4 hover:underline",
    };

    const sizes = {
      default: "h-11 px-6 py-2 rounded-md",
      sm: "h-9 rounded-md px-3 text-sm",
      lg: "h-12 rounded-md px-8 text-lg font-semibold",
      icon: "h-10 w-10 rounded-md",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={variant !== 'link' && !disabled && !isLoading ? { scale: 1.02 } : {}}
        whileTap={variant !== 'link' && !disabled && !isLoading ? { scale: 0.98 } : {}}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
