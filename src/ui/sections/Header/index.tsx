import { navItems } from '@/constants';
import { Brand, BurgerMenu } from '@/ui/components';

export const Header = () => {
  return (
    <header className="bg-white lg:container mt-6 mx-auto flex items-center justify-between flex-row relative lg:mb-0 mb-5">
      <Brand logo="/logo.svg" />
      <BurgerMenu items={navItems} />
    </header>
  );
};
