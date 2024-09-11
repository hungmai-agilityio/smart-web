import { ReactNode } from 'react';

// Constants
import { TYPE } from '@/constants';

// Components
import { Button, Photo } from '@/ui/components/common';

interface HeroProps {
  imageUrl: string;
  children?: ReactNode;
  buttonName?: string;
}

export const Hero = ({ imageUrl, children, buttonName }: HeroProps) => {
  return (
    <div className="relative w-full h-hero">
      <Photo src={imageUrl} alt="Hero Background" autoSize priority />
      <div className="absolute  inset-0 flex flex-col items-center justify-center">
        {children}
        {buttonName && (
          <div className="mt-10">
            <Button variant={TYPE.PRIMARY} name={buttonName} />
          </div>
        )}
      </div>
    </div>
  );
};
