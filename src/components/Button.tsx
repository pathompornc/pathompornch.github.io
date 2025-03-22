
import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

// Combined props for both button and anchor elements
type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
};

// Button element specific props
type ButtonAsButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
  };

// Anchor element specific props
type ButtonAsAnchorProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a';
    href: string;
  };

// React Router Link specific props
type ButtonAsRouterLinkProps = ButtonBaseProps &
  Omit<LinkProps, 'className'> & {
    as: typeof Link;
    to: string;
  };

// Combined type for the Button component
type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps | ButtonAsRouterLinkProps;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  as,
  ...props
}, ref) => {
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:opacity-90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-input bg-transparent hover:bg-secondary text-foreground',
    ghost: 'hover:bg-secondary text-foreground',
  };

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4',
    lg: 'h-11 px-6',
  };
  
  const baseClasses = cn(
    'relative inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    sizes[size],
    (props as any).className
  );
  
  // Content with loading indicator and icons
  const content = (
    <>
      {isLoading && (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      )}
      {!isLoading && leftIcon && (
        <span className="mr-2">{leftIcon}</span>
      )}
      {children}
      {!isLoading && rightIcon && (
        <span className="ml-2">{rightIcon}</span>
      )}
    </>
  );

  // Render as React Router Link
  if (as === Link && 'to' in props) {
    return (
      <Link
        className={baseClasses}
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...(props as LinkProps)}
      >
        {content}
      </Link>
    );
  }
  
  // Render as anchor tag
  if (as === 'a' && 'href' in props) {
    return (
      <a
        className={baseClasses}
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }
  
  // Render as button (default)
  return (
    <button
      className={baseClasses}
      disabled={isLoading || (props as ButtonHTMLAttributes<HTMLButtonElement>).disabled}
      ref={ref as React.Ref<HTMLButtonElement>}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
