// Interfaces
import { IProduct } from '@/interface';

// Constants
import { montserrat, TYPE } from '@/constants';

// Components
import { Button, CardImage } from '@/ui/components';
import Image from 'next/image';

interface CardDetailProps {
  item: IProduct;
  nameButton?: string;
  onClick?: () => void;
}

export const CardDetail = ({ item, nameButton, onClick }: CardDetailProps) => {
  return (
    <div className="flex flex-col">
      <div className="xl:w-pro-lg xl:h-pro-lg md:w-pro-md md:h-pro-md w-pro-sm h-pro-sm mx-auto">
        <CardImage src={item.image} alt={item.name} autoSize isCircle isBlur>
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
              <span className="text-sm">{item.view}</span>
            </div>
          </div>
        </CardImage>
      </div>
      <div className="mt-4 md:h-32 overflow-hidden text-center">
        <p className={`${montserrat.className} font-bold lg:text-lg text-base`}>
          {item.name}
        </p>
        <span className="my-3">by</span>
        <p className="lg:text-base text-sm mt-3">{item.users.join(', ')}</p>
      </div>
      {nameButton && (
        <Button variant={TYPE.SECOND} className="mt-5 mx-auto" onClick={onClick}>
          {nameButton}
        </Button>
      )}
    </div>
  );
};
