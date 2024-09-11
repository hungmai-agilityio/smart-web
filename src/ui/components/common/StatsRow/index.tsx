import { clsx } from 'clsx';

//Components
import { Photo } from '@/ui/components/common';

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
        <div
          className={clsx('w-icon-xs h-icon-xxs', {
            'w-7 h-icon-sm': isColumn
          })}
        >
          <Photo src={viewIcon} alt="view icon" autoSize />
        </div>
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
        <div
          className={clsx('w-icon-xxs h-icon-xxs', {
            'w-5 h-icon-xs': isColumn
          })}
        >
          <Photo src={favoriteIcon} alt="likes icon" autoSize />
        </div>
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
        <div
          className={clsx('w-icon-xxs h-icon-xxs', {
            'w-5 h-icon-xs': isColumn
          })}
        >
          <Photo src={commentIcon} alt="comments icon" autoSize />
        </div>
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
