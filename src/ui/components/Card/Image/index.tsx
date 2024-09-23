'use client';
import { ReactNode, useState } from 'react';
import { clsx } from 'clsx';
import Image, { ImageProps } from 'next/image';

interface CardImageProps extends ImageProps {
  children?: ReactNode;
  styles?: string;
  isCircle?: boolean;
  fixedSize?: { width: number; height: number };
  autoSize?: boolean;
  isBlur?: boolean;
}

export const CardImage = ({
  src,
  alt,
  children,
  styles,
  isCircle,
  fixedSize,
  autoSize,
  isBlur,
  ...res
}: CardImageProps) => {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => setHovered(!hovered);

  const containerStyles = clsx('relative', styles, {
    'rounded-full overflow-hidden border-4 border-gray-300 hover:border-second':
      isCircle,
    'w-full h-full': autoSize,
    [`w-[${fixedSize?.width}px] h-[${fixedSize?.height}px]`]:
      fixedSize && !autoSize
  });

  return (
    <div
      className={containerStyles}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <Image
        src={src}
        alt={alt}
        fill={autoSize}
        width={fixedSize?.width}
        height={fixedSize?.height}
        style={{ objectFit: 'cover' }}
        className={clsx('transition-opacity duration-300', {
          'opacity-50': hovered && children
        })}
        placeholder={isBlur ? 'blur' : 'empty'}
        blurDataURL={
          isBlur
            ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkNA3fBAACLQFJQfEBVAAAAABJRU5ErkJggg=='
            : undefined
        }
        {...res}
      />
      {hovered && children && (
        <div className="absolute inset-0 flex items-center bg-black bg-opacity-50 text-white p-4">
          {children}
        </div>
      )}
    </div>
  );
};
