import { montserrat, abel } from '@/constants/fonts';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

interface TextProps {
  children?: ReactNode;
  styles?: string;
}

export const Heading = ({ children, styles }: TextProps) => {
  return (
    <h3
      className={clsx(
        `${montserrat.className} lg:text-5xl font-bold md:text-3xl md:leading-normal sm:text-xl`,
        styles
      )}
    >
      {children}
    </h3>
  );
};

export const Description = ({ children, styles }: TextProps) => {
  return <p className={clsx(`${abel.className}`, styles)}>{children}</p>;
};
