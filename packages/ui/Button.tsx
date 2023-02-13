import * as React from 'react';

export interface ButtonProps {
  primary?: boolean;
  label?: string;
  size?: 'small' | 'medium' | 'large';
}
export const Button: React.FC<ButtonProps> = ({ primary, label = 'Button', size }) => {
  console.log('primary', primary);
  console.log('size', size);

  return <button>{label}</button>;
};
