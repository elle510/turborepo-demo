import * as React from 'react';

export interface ButtonProps {
  primary?: boolean;
  label?: string;
  size?: 'small' | 'medium' | 'large';
}
export const Button: React.FC<ButtonProps> = ({ primary, label = 'Button', size }) => {
  console.log('primary', primary);
  console.log('size', size);

  const [wh, setWh] = React.useState(250);

  React.useEffect(() => {
    if (size === 'large') {
      setWh(500);
    } else if (size === 'small') {
      setWh(80);
    } else {
      setWh(250);
    }
  }, [size]);

  return (
    <button
      className="rounded-md w-60 px-3 py-2 rounded drop-shadow-2xl text-white font-bold bg-gradient-to-r from-indigo-400 to-fuchsia-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-700 focus:ring-indigo-400 focus:ring-4 focus:ring-offset-2 transition-all duration-200"
      style={{ width: wh, height: wh }}
    >
      {label}
    </button>
  );
};
