// Reusable button component with variants
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: ReactNode;
  isLoading?: boolean;
  href?: string;
  glow?: boolean;
}

const buttonVariants = {
  primary: 'bg-gradient-to-r from-orange-accent to-orange-glow text-white shadow-lg shadow-orange-accent/25 hover:shadow-orange-accent/40 border border-orange-glow/20',
  secondary: 'bg-cyan-accent/10 text-cyan-accent border border-cyan-accent/30 hover:bg-cyan-accent/20 hover:border-cyan-accent/50',
  outline: 'border-2 border-cyan-accent text-cyan-accent hover:bg-cyan-accent/10 hover:shadow-lg hover:shadow-cyan-accent/20',
  ghost: 'text-cyan-accent hover:text-white hover:bg-cyan-accent/5 transition-colors',
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  className = '',
  type = 'button',
  icon,
  isLoading = false,
  href,
  glow = false,
}) => {
  const content = (
    <>
      {isLoading && (
        <motion.div
          className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      )}
      {icon && !isLoading && (
        <motion.span
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          {icon}
        </motion.span>
      )}
      <span>{children}</span>
    </>
  );

  const buttonClasses = `
    rounded-full font-semibold transition-all
    disabled:opacity-50 disabled:cursor-not-allowed
    flex items-center justify-center gap-2
    relative overflow-hidden
    ${buttonVariants[variant]}
    ${buttonSizes[size]}
    ${glow ? 'animate-glow-border' : ''}
    ${className}
  `;

  const baseProps = {
    whileHover: disabled ? {} : { scale: 1.05 },
    whileTap: disabled ? {} : { scale: 0.95 },
    disabled: disabled || isLoading,
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        {...baseProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      {...baseProps}
    >
      {content}
    </motion.button>
  );
};

export default Button;
