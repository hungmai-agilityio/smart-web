import Link from 'next/link';
import Image from 'next/image';

interface BrandProps {
  logo: string;
  url?: string;
}

export const Brand = ({ logo, url = '/' }: BrandProps) => {
  return (
    <Link href={url} className="cursor-pointer">
      <Image src={logo} alt="logo" width={160} height={84} priority />
    </Link>
  );
};
