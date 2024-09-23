'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { Navbar } from '@/ui/components';
import { useOutsideClick } from '@/hooks';

interface BurgerProps {
  items: Array<{ name: string; url?: string }>;
}

export const BurgerMenu = ({ items }: BurgerProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useOutsideClick({
    ref: menuRef,
    handler: () => setMenuOpen(false)
  });

  return (
    <div ref={menuRef}>
      <div
        className="md:hidden flex items-center cursor-pointer"
        onClick={toggleMenu}
      >
        <Image src="/menu.svg" alt="menu" width={16} height={14} priority />
      </div>

      <Navbar
        items={items}
        styles={`md:flex gap-7 ${menuOpen ? 'block' : 'hidden'}
          md:relative absolute top-full left-0 w-full md:w-auto z-10 transition-all ease-in-out
          bg-white p-5 drop-shadow-lg md:drop-shadow-none lg:mr-28 md:mr-8`}
      />
    </div>
  );
};
