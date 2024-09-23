// Interfaces
import { IProject } from '@/interface';

// Components
import { CardImage, StatsRow } from '@/ui/components';

interface CardDisplayProps {
  item: IProject;
}

export const CardDisplay = ({ item }: CardDisplayProps) => {
  return (
    <div className="border rounded-lg shadow-md">
      <div className="w-full aspect-image relative">
        <CardImage src={item.image} alt={item.name} autoSize isBlur>
          <StatsRow
            views={item.views}
            favorite={item.favorite}
            comment={item.comment}
            viewIcon="/view-white.svg"
            favoriteIcon="/likes-white.svg"
            commentIcon="/cmt-white.svg"
            isColumn
          />
        </CardImage>
      </div>

      <div className="md:flex hidden items-center w-full justify-between py-3 text-x-xs">
        <StatsRow
          views={item.views}
          favorite={item.favorite}
          comment={item.comment}
          viewIcon="/view-dark.svg"
          favoriteIcon="/likes.svg"
          commentIcon="/comments.svg"
        />
      </div>
    </div>
  );
};
