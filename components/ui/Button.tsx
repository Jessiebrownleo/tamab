'use client';

import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500';
  const variantStyles = {
    primary: 'bg-amber-600 hover:bg-amber-700 text-white',
    secondary: 'bg-stone-800 hover:bg-stone-900 text-white',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700',
    text: 'bg-transparent hover:bg-gray-100 text-gray-700'
  };
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };
  const widthStyles = fullWidth ? 'w-full' : '';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  return <button 
    type={type} 
    onClick={(e) => onClick?.(e)} 
    disabled={disabled} 
    className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${widthStyles}
        ${disabledStyles}
        ${className}
      `}
  >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>;
};
export default Button;