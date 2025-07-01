import React from 'react';
import { IconButtonProps } from './Button.types';

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = 'ghost',
  size = 'medium',
  className = '',
  disabled = false,
  loading = false,
  onClick,
  ...props
}) => {
  // Loading spinner for icon buttons
  const LoadingSpinner = () => (
    <svg 
      className="animate-spin h-4 w-4" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  // Base classes for circular icon buttons
  const baseClasses = `
    inline-flex items-center justify-center rounded-full
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
    transform hover:scale-110 active:scale-95
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Variant classes matching your design system
  const variantClasses = {
    // Primary (Black circular button)
    primary: `
      bg-black text-white border-2 border-black
      hover:bg-gray-900 hover:border-gray-900 hover:shadow-lg
      focus:ring-gray-500
      active:bg-gray-800
    `,
    // Secondary (White circular button)
    secondary: `
      bg-white text-black border-2 border-gray-200
      hover:bg-gray-50 hover:border-gray-300 hover:shadow-lg
      focus:ring-gray-400
      active:bg-gray-100
    `,
    // Outline (Transparent with border)
    outline: `
      bg-transparent text-black border-2 border-black
      hover:bg-black hover:text-white hover:shadow-lg
      focus:ring-gray-500
      active:bg-gray-800 active:text-white
    `,
    // Ghost (Transparent, minimal)
    ghost: `
      bg-transparent text-gray-600 border-2 border-transparent
      hover:bg-gray-100 hover:text-black hover:border-gray-200
      focus:ring-gray-400
      active:bg-gray-200
    `,
    // Brand color
    brand: `
      bg-bc-primary text-white border-2 border-bc-primary
      hover:bg-bc-primary-600 hover:border-bc-primary-600 hover:shadow-lg
      focus:ring-bc-primary-500
      active:bg-bc-primary-700
    `
  };

  // Size classes for circular buttons
  const sizeClasses = {
    small: 'w-8 h-8 text-sm',
    medium: 'w-12 h-12 text-base',
    large: 'w-16 h-16 text-lg'
  };

  // Combine all classes
  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
  `.trim().replace(/\s+/g, ' ');

  // Handle click events
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (loading || disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return (
    <button 
      className={combinedClasses}
      onClick={handleClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <LoadingSpinner /> : icon}
    </button>
  );
};

export default IconButton;
