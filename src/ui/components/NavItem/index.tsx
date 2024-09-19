'use client';
import Link from 'next/link';

interface NavItemProps {
  name: string;
  url?: string;
}

export const NavItem = ({ name, url }: NavItemProps) => {
  return (
    <Link href={url || '#'}>
      <p className="font-bold lg:text-lg md:text-base text-xs hover:text-second uppercase mb-3">
        {name}
      </p>
    </Link>
  );
};
