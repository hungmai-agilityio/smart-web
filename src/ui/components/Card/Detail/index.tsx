import { memo } from 'react';
import Image from 'next/image';

// Constants
import { montserrat, TYPE } from '@/constants';

// Components
import { Button, CardImage } from '@/ui/components';
import { clsx } from 'clsx';

interface CardDetailProps {
  id: string;
  name: string;
  image: string;
  users?: string[];
  view: number;
  nameButton?: string;
  onClick?: (id: string) => void;
}

export const CardDetail = memo(
  ({ id, name, image, users, view, nameButton, onClick }: CardDetailProps) => {
    const handleClick = () => {
      if (onClick) {
        onClick(id);
      }
    };

    return (
      <div className="flex flex-col">
        <div className="xl:w-pro-lg xl:h-pro-lg md:w-pro-md md:h-pro-md w-pro-sm h-pro-sm mx-auto">
          <CardImage src={image} alt={name} autoSize isCircle isBlur>
            <div className="w-full">
              <Image
                src="/view.svg"
                alt="view icon"
                className="md:block hidden mx-auto"
                width={40}
                height={22}
              />
              <div className="flex justify-center items-center gap-3 md:mt-10 mt-0">
                <Image src="/view.svg" alt="view icon" width={22} height={11} />
                <span className="text-sm">{view}</span>
              </div>
            </div>
          </CardImage>
        </div>
        <div
          className={clsx('mt-4 text-center md:h-32 overflow-hidden', {
            'md:h-7': !users
          })}
        >
          <p
            className={`${montserrat.className} font-bold lg:text-lg text-base`}
          >
            {name}
          </p>
          {users && (
            <>
              <span className="my-3">by</span>
              <p className="lg:text-base text-sm mt-3">{users?.join(', ')}</p>
            </>
          )}
        </div>
        {nameButton && (
          <Button
            variant={TYPE.SECOND}
            className="mt-5 mx-auto"
            onClick={handleClick}
          >
            {nameButton}
          </Button>
        )}
      </div>
    );
  }
);
