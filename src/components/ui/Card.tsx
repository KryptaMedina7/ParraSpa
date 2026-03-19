"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

export const Card = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "bg-white rounded-xl border border-parra-sand overflow-hidden flex flex-col transition-shadow hover:shadow-lg", 
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = "Card";

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("p-6 md:p-8 flex-1 flex flex-col", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CardContent.displayName = "CardContent";
