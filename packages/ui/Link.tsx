import * as React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}

export const Link: React.FC<LinkProps> = (props) => {
  const { children, href, ...rest } = props;

  if (rest.target === '_blank') {
    rest.rel = 'noopener noreferrer';
  }

  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
};
