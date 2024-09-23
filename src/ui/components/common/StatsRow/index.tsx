import { clsx } from 'clsx';
import Image from 'next/image';

interface StatsRowProps {
  views: number;
  favorite: number;
  comment: number;
  isColumn?: boolean;
  viewIcon: string;
  favoriteIcon: string;
  commentIcon: string;
}

export const StatsRow = ({
  views,
  favorite,
  comment,
  isColumn,
  viewIcon,
  favoriteIcon,
  commentIcon
}: StatsRowProps) => {
  return (
    <div
      className={clsx('flex px-3 justify-between md:items-center w-full', {
        'flex-col md:hidden gap-2': isColumn
      })}
    >
      <div className="flex gap-1 items-center">
        <Image src={viewIcon} alt="view icon" width={20} height={20} />
        <p
          className={clsx(
            'xl:w-10 w-8 truncate overflow-hidden',
            isColumn && 'w-full text-white'
          )}
        >
          {views}
        </p>
      </div>

      <div className="flex gap-1 items-center">
        <Image src={favoriteIcon} alt="likes icon" width={15} height={15} />
        <p
          className={clsx(
            'xl:w-10 w-8 truncate overflow-hidden',
            isColumn && 'w-full text-white'
          )}
        >
          {favorite}
        </p>
      </div>

      <div className="flex gap-1 items-center">
        <Image src={commentIcon} alt="comments icon" width={15} height={15} />
        <p
          className={clsx(
            'xl:w-10 w-8 truncate overflow-hidden',
            isColumn && 'w-full text-white'
          )}
        >
          {comment}
        </p>
      </div>
    </div>
  );
};
