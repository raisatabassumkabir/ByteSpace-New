import React from 'react';
import { cn } from '@/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'neon' | 'brand' | 'outline' | 'neutral' | 'accent' | 'warning';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'neon',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center font-bold tracking-tight rounded-full uppercase';

  const variants = {
    neon: 'bg-neon text-surface-900 shadow-sm',
    brand: 'bg-brand-50 text-brand-700 border border-brand-200',
    outline: 'border border-surface-200 text-surface-600 bg-white',
    neutral: 'bg-surface-100 text-surface-700',
    accent: 'bg-purple-100 text-purple-700',
    warning: 'bg-amber-100 text-amber-800',
  };

  const sizes = {
    sm: 'text-[10px] px-2 py-0.5 tracking-wider',
    md: 'text-xs px-2.5 py-1',
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </span>
  );
};
