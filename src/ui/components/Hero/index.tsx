import { ReactNode } from 'react';

// Constants
import { TYPE } from '@/constants';

// Components
import { Button, CardImage } from '@/ui/components';

interface HeroProps {
  imageUrl: string;
  children?: ReactNode;
  buttonName?: string;
}

export const Hero = ({ imageUrl, children, buttonName }: HeroProps) => {
  return (
    <div className="relative lg:container w-full h-hero">
      <CardImage src={imageUrl} alt="Hero Background" autoSize priority />
      <div className="absolute  inset-0 flex flex-col items-center justify-center">
        {children}
        {buttonName && (
          <div className="mt-10">
            <Button variant={TYPE.PRIMARY}>{buttonName}</Button>
          </div>
        )}
      </div>
    </div>
  );
};
