import { ReactNode, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'brand';
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  className?: string;
  showArrowOnHover?: boolean;
  expandOnHover?: boolean; // New prop for width expansion effect
}

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  icon: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'brand';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  'aria-label': string;
}
