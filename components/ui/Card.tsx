import React from 'react';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'small' | 'medium' | 'large';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
}
const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'medium',
  shadow = 'sm'
}) => {
  const paddingStyles = {
    none: '',
    small: 'p-3',
    medium: 'p-5',
    large: 'p-8'
  };
  const shadowStyles = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg'
  };
  return <div className={`bg-white rounded-lg border border-gray-200 ${paddingStyles[padding]} ${shadowStyles[shadow]} ${className}`}>
      {children}
    </div>;
};
export default Card;