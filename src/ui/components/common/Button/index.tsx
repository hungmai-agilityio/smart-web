'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

// Constants
import { TYPE } from '@/constants';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TYPE.PRIMARY | TYPE.SECOND | TYPE.THIRD;
  children: ReactNode;
}

export const Button = ({
  children,
  variant = TYPE.PRIMARY,
  disabled,
  className,
  onClick
}: ButtonProps) => {
  const baseClasses =
    'text-primary px-2 rounded-full font-light truncate w-24 h-6 text-xs sm:w-28 sm:h-8 sm:text-sm md:w-36 md:h-10 md:text-base lg:w-52 lg:h-12 lg:text-lg';

  const typeClasses = {
    [TYPE.PRIMARY]: 'bg-second',
    [TYPE.SECOND]:
      'bg-white border-primary border-2 border-primary hover:bg-second hover:border-0',
    [TYPE.THIRD]: 'px-4 py-2 rounded-full bg-white'
  };

  const typeClass = typeClasses[variant];

  return (
    <button
      className={clsx(
        variant !== TYPE.THIRD && baseClasses,
        typeClass,
        disabled && 'cursor-not-allowed hover:bg-gray-400',
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
