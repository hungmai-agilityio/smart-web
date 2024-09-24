import { clsx } from 'clsx';
import Image from 'next/image';

// Constants
import { abel } from '@/constants/fonts';

// Interfaces
import { IPortfolio } from '@/interface';

// Components
import { Description, Heading, CardImage } from '@/ui/components';

// Utils
import { formatDate } from '@/utils/format';

interface SceneryDetailProps {
  comment?: number;
  date: string;
  detail: string;
  favorite?: number;
  image: string;
  metrics?: boolean;
  name: string;
  view?: number;
}

export const SceneryDetail = ({
  comment,
  date,
  detail,
  favorite,
  image,
  metrics,
  name,
  view
}: SceneryDetailProps) => {
  return (
    <div className="w-full h-portfolio">
      <CardImage src={image} alt={name} autoSize isBlur>
        <div className="flex w-full md:justify-end">
          <div className="lg:w-1/2">
            <Heading styles="xl:text-3xl lg:text-xl font-bold text-base">
              {name}
            </Heading>
            <Description styles="lg:text-base text-sm">
              {formatDate(new Date(date))}
            </Description>
            <span className="relative after:content-[''] after:absolute after:left-1/2 after:translate-y-6 after:w-10 after:h-1 after:bg-white"></span>
            <p
              className={clsx(
                `${abel.className} lg:text-base text-xs mt-14 max-h-24 overflow-hidden`
              )}
            >
              {detail}
            </p>
            {metrics && (
              <div className="md:flex xl:gap-10 gap-5 mt-4 hidden text-sm">
                <div className="flex gap-3 items-center">
                  <Image
                    src="/view-white.svg"
                    alt="view"
                    width={20}
                    height={20}
                  />
                  <p>{view}</p>
                </div>

                <div className="flex gap-3 items-center">
                  <Image
                    src="/likes-white.svg"
                    alt="likes"
                    width={15}
                    height={15}
                  />
                  <p>{favorite}</p>
                </div>
                <div className="flex gap-3 items-center">
                  <Image
                    src="/cmt-white.svg"
                    alt="comment"
                    width={15}
                    height={15}
                  />
                  <p>{comment}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardImage>
    </div>
  );
};
