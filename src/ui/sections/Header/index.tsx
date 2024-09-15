'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Constants
import { END_POINT } from '@/constants';

// Components
import { Photo } from '@/ui/components/common';
import { NavItem } from '@/ui/components/NavItem';

export const Header = () => {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleHomeRedirect = () => {
    router.push('/');
  };

  return (
    <header className="bg-white md:container mt-6 mx-auto flex items-center justify-between flex-row relative">
      <div className="cursor-pointer" onClick={handleHomeRedirect}>
        <Photo
          src="/logo.svg"
          alt="logo"
          fixedSize={{ width: 160, height: 84 }}
          priority
        />
      </div>

      <div
        className="md:hidden flex items-center mr-3 cursor-pointer"
        onClick={toggleMenu}
      >
        <Photo
          src="/menu.svg"
          alt="menu"
          fixedSize={{ width: 16, height: 14 }}
          priority
        />
      </div>

      <nav
        className={`
          md:flex gap-7 ${menuOpen ? 'block' : 'hidden'}
          md:relative absolute top-full left-0 w-full md:w-auto z-10 transition-all ease-in-out
          bg-white p-5 drop-shadow-lg md:drop-shadow-none mr-28
        `}
      >
        <NavItem name="home" url={END_POINT.HOME} />
        <NavItem name="places" url={END_POINT.PLACES} />
        <NavItem name="products" url={END_POINT.PRODUCTS} />
        <NavItem name="projects" url={END_POINT.PROJECTS} />
        <NavItem name="portfolio" url={END_POINT.PORTFOLIO} />
        <NavItem name="about us" url={END_POINT.ABOUT_US} />
      </nav>
    </header>
  );
};
