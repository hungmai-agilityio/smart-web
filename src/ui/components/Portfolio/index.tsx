import React, { Suspense } from 'react';
import { clsx } from 'clsx';

// Constants
import { abel } from '@/constants/fonts';

// Interfaces
import { IPortfolio } from '@/interface';

// Components
import { Description, Heading, Photo, SkeletonImage } from '@/ui/components';

// Utils
import { formatDate } from '@/utils/format';

interface PortfolioProps {
  images: IPortfolio[];
}

export const Portfolio = ({ images }: PortfolioProps) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1">
      {images.map((item) => (
        <div key={item.id} className="w-full h-portfolio">
          <Photo src={item.image} alt={item.name} autoSize isBlur>
            <div className="flex w-full md:justify-end">
              <div className="lg:w-1/2">
                <Heading styles="xl:text-3xl lg:text-xl font-bold text-base">
                  {item.name}
                </Heading>
                <Description styles="lg:text-base text-sm">
                  {formatDate(new Date(item.date))}
                </Description>
                <span className="relative after:content-[''] after:absolute after:left-1/2 after:translate-y-6 after:w-10 after:h-1 after:bg-white"></span>
                <p
                  className={clsx(
                    `${abel.className} lg:text-base text-xs mt-14 max-h-24 overflow-hidden`
                  )}
                >
                  {item.detail}
                </p>

                <div className="md:flex xl:gap-10 gap-5 mt-4 hidden text-sm">
                  <div className="flex gap-3 items-center">
                    <Photo
                      src="/view-white.svg"
                      alt="view"
                      autoSize
                      styles="md:w-6 md:h-3"
                    />
                    <p>{item.view}</p>
                  </div>

                  <div className="flex gap-3 items-center">
                    <Photo
                      src="/likes-white.svg"
                      alt="likes"
                      autoSize
                      styles="md:w-icon-xs md:h-3"
                    />
                    <p>{item.favorite}</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Photo
                      src="/cmt-white.svg"
                      alt="comment"
                      autoSize
                      styles="md:w-icon-xs md:h-3"
                    />
                    <p>{item.comment}</p>
                  </div>
                </div>
              </div>
            </div>
          </Photo>
        </div>
      ))}
    </div>
  );
};
