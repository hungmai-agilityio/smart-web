import { memo } from 'react';

// Components
import { CardImage, StatsRow } from '@/ui/components';

interface CardDisplayProps {
  name: string;
  image: string;
  views: number;
  favorites: number;
  comments: number;
}

export const CardDisplay = memo(
  ({ name, image, views, favorites, comments }: CardDisplayProps) => {
    return (
      <div className="border rounded-lg shadow-md">
        <div className="w-full aspect-image relative">
          <CardImage src={image} alt={name} autoSize isBlur>
            <StatsRow
              views={views}
              favorite={favorites}
              comment={comments}
              viewIcon="/view-white.svg"
              favoriteIcon="/likes-white.svg"
              commentIcon="/cmt-white.svg"
              isColumn
            />
          </CardImage>
        </div>

        <div className="md:flex hidden items-center w-full justify-between py-3 text-x-xs">
          <StatsRow
            views={views}
            favorite={favorites}
            comment={comments}
            viewIcon="/view-dark.svg"
            favoriteIcon="/likes.svg"
            commentIcon="/comments.svg"
          />
        </div>
      </div>
    );
  }
);
