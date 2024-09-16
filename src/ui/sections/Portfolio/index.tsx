import { Suspense } from 'react';

// Constants
import { abel, montserrat } from '@/constants';

// Interfaces
import { ISearchParams } from '@/interface';

// Sections
import { PortfolioSection } from '@/ui/sections';

// Components
import { Heading, SkeletonImage } from '@/ui/components';

interface PortfolioProps {
  searchParams: ISearchParams;
}

export const Portfolio = async ({ searchParams }: PortfolioProps) => {
  const currentPage = Number(searchParams['portfolio-page']) || 1;

  return (
    <section className={`${abel.className} my-28 text-primary`}>
      <Heading styles={`${montserrat.className} text-center`}>
        Portfolio
      </Heading>
      <Suspense key={currentPage} fallback={<SkeletonImage col="2" row={6} />}>
        <PortfolioSection currentPage={currentPage} />;
      </Suspense>
    </section>
  );
};
