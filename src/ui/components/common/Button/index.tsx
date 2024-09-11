'use client';

import { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

// Constants
import { TYPE } from '@/constants';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TYPE.PRIMARY | TYPE.SECOND;
  styles?: string;
}

export const Button = ({ name, variant, styles, disabled }: ButtonProps) => {
  const typeClasses = {
    [TYPE.PRIMARY]: 'bg-second',
    [TYPE.SECOND]:
      'bg-white border-primary border-2 border-primary hover:bg-second hover:border-0'
  };

  const typeClass = typeClasses[variant || TYPE.PRIMARY];

  const handleClick = () => {
    alert('We will update feature later');
  };

  return (
    <button
      className={clsx(
        'text-primary px-2 rounded-full font-light truncate',
        'w-24 h-6 text-xs sm:w-28 sm:h-8 sm:text-sm md:w-36 md:h-10 md:text-base lg:w-52 lg:h-12 lg:text-lg',
       disabled && 'cursor-not-allowed hover:bg-gray-400',
        typeClass,
        styles
      )}
      onClick={handleClick}
      disabled={disabled}
    >
      {name}
    </button>
  );
};
