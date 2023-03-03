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

  return <button style={{ width: wh, height: wh }}>{label}</button>;
};
