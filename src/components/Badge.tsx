
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'secondary';
}

const Badge = ({ 
  className, 
  variant = 'default', 
  ...props 
}: BadgeProps) => {
  const variants = {
    default: 'bg-primary/10 text-primary',
    outline: 'border border-primary/20 text-primary',
    secondary: 'bg-secondary text-secondary-foreground',
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
};

export default Badge;
