// Constants
import { END_POINT } from '@/constants';

// Interfaces
import { IPortfolio } from '@/interface';

// Components
import { Pagination, Portfolio } from '@/ui/components';

// Services
import { getData } from '@/services';

interface PortfolioSectionProps {
  currentPage: number;
}

export const PortfolioSection = async ({
  currentPage
}: PortfolioSectionProps) => {
  const { data } = await getData<IPortfolio>(`${END_POINT.PORTFOLIO}`);

  const limit = 6;
  const totalItems = data!.length;
  const totalPages = Math.ceil(totalItems / limit);

  const startIndex = (currentPage - 1) * limit;
  const selectedImages = data!.slice(startIndex, startIndex + limit);

  return (
    <div className="my-8 mx-5">
      <Portfolio images={selectedImages} />
      <Pagination pageCount={totalPages} currentPage={currentPage} />
    </div>
  );
};
