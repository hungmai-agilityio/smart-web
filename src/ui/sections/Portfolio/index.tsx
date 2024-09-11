'use client';

import { useRouter, useSearchParams } from 'next/navigation';

// Constants
import { abel, montserrat } from '@/constants';

// Interfaces
import { IPortfolio } from '@/interface';

// Components
import { Heading, Pagination, Portfolio } from '@/ui/components';

interface PortfolioSectionProps {
  data: IPortfolio[];
}

export const PortfolioSection = ({ data }: PortfolioSectionProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Use URL search params to determine the current page
  const currentPage = searchParams.get('portfolio-page')
    ? parseInt(searchParams.get('portfolio-page') as string, 10)
    : 1;

  const limit = 6;
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / limit);

  const startIndex = (currentPage - 1) * limit;
  const selectedImages = data.slice(startIndex, startIndex + limit);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('portfolio-page', newPage.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <section className={`${abel.className} my-28 w-5/6 mx-auto text-primary`}>
      <Heading styles={`${montserrat.className} text-center`}>
        Portfolio
      </Heading>
      <div className="my-8">
        <Portfolio images={selectedImages} />
        <Pagination
          pageCount={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};
