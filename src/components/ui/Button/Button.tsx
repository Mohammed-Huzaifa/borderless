import React from 'react';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  href,
  target = '_self',
  className = '',
  onClick,
  showArrowOnHover = false,
  expandOnHover = false, // New prop for width expansion
  ...props
}) => {
  // Arrow icon for hover effect (matching your design)
  const ArrowIcon = () => (
    <svg 
      className={`w-4 h-4 transition-all duration-300 ease-out transform ${
        expandOnHover 
          ? 'translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100' 
          : 'translate-x-0 group-hover:translate-x-1'
      }`}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  // Base classes with expansion capability
  const baseClasses = `
    group inline-flex items-center justify-center font-medium
    rounded-full
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
    transform hover:scale-105 active:scale-95
    ${expandOnHover ? 'hover:pr-12' : ''} // Extra padding-right on hover for expansion
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Variant classes matching your design system
  const variantClasses = {
    // Primary (Black button like "MORE ABOUT US")
    primary: `
      bg-black text-white border-2 border-black
      hover:bg-gray-900 hover:border-gray-900
      focus:ring-gray-500
      active:bg-gray-800
    `,
    // Secondary (White/light button)
    secondary: `
      bg-white text-black border-2 border-gray-200
      hover:bg-gray-50 hover:border-gray-300
      focus:ring-gray-400
      active:bg-gray-100
    `,
    // Outline variant
    outline: `
      bg-transparent text-black border-2 border-black
      hover:bg-black hover:text-white
      focus:ring-gray-500
      active:bg-gray-800 active:text-white
    `,
    // Ghost variant
    ghost: `
      bg-transparent text-black border-2 border-transparent
      hover:bg-gray-100 hover:border-gray-200
      focus:ring-gray-400
      active:bg-gray-200
    `,
    // Colored variants (using your brand colors)
    brand: `
      bg-bc-primary text-white border-2 border-bc-primary
      hover:bg-bc-primary-600 hover:border-bc-primary-600
      focus:ring-bc-primary-500
      active:bg-bc-primary-700
    `
  };

  // Size classes with expansion consideration
  const sizeClasses = {
    small: `px-6 py-2 text-sm ${expandOnHover ? 'hover:pl-6' : ''}`,
    medium: `px-8 py-4 text-base ${expandOnHover ? 'hover:pl-8' : ''}`, // Default size like "MORE ABOUT US"
    large: `px-10 py-5 text-lg ${expandOnHover ? 'hover:pl-10' : ''}`
  };

  // Loading spinner component
  const LoadingSpinner = () => (
    <svg 
      className="animate-spin h-4 w-4 mr-2" 
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

  // If href is provided, render as link
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={combinedClasses}
        {...(target === '_blank' && { rel: 'noopener noreferrer' })}
      >
        {loading && <LoadingSpinner />}
        {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        
        <span className={`transition-all duration-300 ${loading ? 'opacity-0' : ''}`}>
          {children}
        </span>
        
        {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
        
        {!loading && (showArrowOnHover || expandOnHover) && (
          <span className={`ml-2 ${
            expandOnHover 
              ? 'opacity-0 group-hover:opacity-100 transition-all duration-300' 
              : 'opacity-0 group-hover:opacity-100 transition-opacity duration-300'
          }`}>
            <ArrowIcon />
          </span>
        )}
      </a>
    );
  }

  // Render as button
  return (
    <button
      className={combinedClasses}
      onClick={handleClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      
      <span className={`transition-all duration-300 ${loading ? 'opacity-0' : ''}`}>
        {children}
      </span>
      
      {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      
      {!loading && (showArrowOnHover || expandOnHover) && (
        <span className={`ml-2 ${
          expandOnHover 
            ? 'opacity-0 group-hover:opacity-100 transition-all duration-300' 
            : 'opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        }`}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

export default Button;
