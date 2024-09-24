// Constants
import { END_POINT } from '@/constants';

// Interfaces
import { IPortfolio } from '@/interface';

// Components
import { Pagination, SceneryDetail } from '@/ui/components';

// Services
import { getData } from '@/services';

interface PortfolioListProps {
  currentPage: number;
  queryPage: string;
}

export const PortfolioList = async ({
  currentPage,
  queryPage
}: PortfolioListProps) => {
  const { data } = await getData<IPortfolio>(`${END_POINT.PORTFOLIO}`);

  const limit = 6;
  const totalItems = data!.length;
  const totalPages = Math.ceil(totalItems / limit);

  const startIndex = (currentPage - 1) * limit;
  const selectedImages = data!.slice(startIndex, startIndex + limit);

  return (
    <div className="my-8 mx-5">
      <div className="grid md:grid-cols-2 grid-cols-1">
        {selectedImages.map((item) => (
          <SceneryDetail
            key={item.id}
            comment={item.comment}
            date={item.date}
            detail={item.detail}
            favorite={item.favorite}
            image={item.image}
            metrics
            name={item.name}
            view={item.view}
          />
        ))}
      </div>
      <Pagination pageCount={totalPages} queryPage={queryPage} />
    </div>
  );
};
