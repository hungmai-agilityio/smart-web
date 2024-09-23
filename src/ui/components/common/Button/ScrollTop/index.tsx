'use client';

import Image from 'next/image';

export const ScrollTopButton = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex justify-center cursor-pointer" onClick={scrollTop}>
      <Image
        src="/go-top-button.svg"
        alt="Go top icon"
        width={36}
        height={36}
        priority
      />
    </div>
  );
};
