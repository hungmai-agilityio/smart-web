'use client';
import Link from 'next/link';

interface NavItemProps {
  name: string;
  url?: string;
}

export const NavItem = ({ name, url }: NavItemProps) => {
  return (
    <Link href={url || '#'}>
      <div className="flex items-center mb-3 relative cursor-pointer">
        <p className="font-bold lg:text-lg text-sm hover:text-second uppercase">
          {name}
        </p>
      </div>
    </Link>
  );
};
