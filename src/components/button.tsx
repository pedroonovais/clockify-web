import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}
export function Button({
  children,
  variant = 'primary',
  className = '',
  onClick
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-3 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500';
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-blue-400 hover:bg-blue-500 text-gray-900',
    outline: 'bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-900 hover:bg-opacity-20'
  };
  return <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>;
}