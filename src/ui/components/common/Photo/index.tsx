'use client';
import { ReactNode, useState } from 'react';
import { clsx } from 'clsx';
import Image, { ImageProps } from 'next/image';

interface PhotoProps extends ImageProps {
  children?: ReactNode;
  styles?: string;
  isCircle?: boolean;
  fixedSize?: { width: number; height: number };
  autoSize?: boolean;
}

export const Photo = ({
  src,
  alt,
  children,
  styles,
  isCircle,
  fixedSize,
  autoSize,
  ...res
}: PhotoProps) => {
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
        {...res}
      />
      {hovered && children && (
        <div className="absolute inset-0 flex items-center bg-black bg-opacity-50 text-white">
          {children}
        </div>
      )}
    </div>
  );
};
