// Constants
import { END_POINT } from '@/constants';

// Interfaces
import { IPortfolio } from '@/interface';

// Services
import { getData } from '@/services';

// Sections
import { PortfolioSection } from '@/ui/sections';

export const PortfolioWrapper = async () => {
  const { data, error } = await getData<IPortfolio>(`${END_POINT.PORTFOLIO}`);

  if (error) {
    return <div>Failed to load</div>;
  }

  return <PortfolioSection data={data || []} />;
};
