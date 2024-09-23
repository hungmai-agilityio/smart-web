import { NavItem } from '@/ui/components/Navbar/Item';

interface NavbarProps {
  items: Array<{ name: string; url?: string }>;
  styles?: string;
}

export const Navbar = ({ items, styles }: NavbarProps) => {
  return (
    <nav className={styles}>
      {items.map((item, index) => (
        <NavItem key={index} name={item.name} url={item.url} />
      ))}
    </nav>
  );
};
