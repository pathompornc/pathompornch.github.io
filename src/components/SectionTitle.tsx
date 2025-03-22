
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  alignment = 'left',
  className,
  ...props 
}: SectionTitleProps) => {
  return (
    <div 
      className={cn(
        'mb-10 space-y-2',
        alignment === 'center' && 'text-center',
        alignment === 'right' && 'text-right',
        className
      )} 
      {...props}
    >
      <div className="inline-block">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">{title}</h2>
        <div className={cn(
          'h-1 w-20 bg-primary mt-2',
          alignment === 'center' && 'mx-auto',
          alignment === 'right' && 'ml-auto'
        )} />
      </div>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
