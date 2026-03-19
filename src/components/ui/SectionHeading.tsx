import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeading = ({ title, subtitle, className, align = 'center' }: SectionHeadingProps) => {
  return (
    <div className={cn("mb-12 md:mb-16", align === 'center' ? 'text-center' : 'text-left', className)}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-parra-terracotta font-semibold tracking-wider uppercase text-sm mb-3 block"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-parra-charcoal"
      >
        {title}
      </motion.h2>
      {/* Wood accent line */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: '4rem' }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={cn("h-1 bg-parra-wood mt-6", align === 'center' ? 'mx-auto' : '')}
      />
    </div>
  );
};
