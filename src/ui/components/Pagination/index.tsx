'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { clsx } from 'clsx';
import Image from 'next/image';

// Components
import { Button } from '@/ui/components';

// Constants
import { TYPE } from '@/constants';

interface PaginationProps {
  pageCount: number;
  queryPage: string;
}

export const Pagination = ({ pageCount, queryPage }: PaginationProps) => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  // Initialize currentPage based on URL query parameter
  const initPage = Number(searchParams.get(queryPage)) || 1;
  const [currentPage, setCurrentPage] = useState<number>(initPage);

  // Handles page index changes
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= pageCount) {
      // Get current query params
      params.set(queryPage, page.toString());
      replace(`?${params.toString()}`, { scroll: false });
      setCurrentPage(page);
    }
  };

  // Click to return to previous page
  const handlePrevious = () => {
    if (currentPage > 1) {
      const newPageIndex = currentPage - 1;
      params.set(queryPage, newPageIndex.toString());
      replace(`?${params.toString()}`, { scroll: false });
      setCurrentPage(newPageIndex);
    }
  };

  // Click to go to the next page
  const handleNext = () => {
    if (currentPage < pageCount) {
      const newPageIndex = currentPage + 1;
      params.set(queryPage, newPageIndex.toString());
      replace(`?${params.toString()}`, { scroll: false });
      setCurrentPage(newPageIndex);
    }
  };

  // Render page item
  const renderPageNumbers = () => {
    const pages = [];

    const renderPageButton = (page: number) => (
      <Button
        key={page}
        variant={TYPE.THIRD}
        onClick={handlePageChange.bind(null, page)}
        className={clsx(currentPage === page && 'text-second drop-shadow-lg')}
      >
        {page}
      </Button>
    );

    // Default page 1
    pages.push(renderPageButton(1));

    if (currentPage > 3) {
      pages.push(<span key="prev-page">...</span>);
    }

    const startPage = currentPage - 1 > 1 ? currentPage - 1 : 2;
    const endPage =
      currentPage + 1 < pageCount ? currentPage + 1 : pageCount - 1;

    for (let i = startPage; i <= endPage; i++) {
      pages.push(renderPageButton(i));
    }

    if (currentPage < pageCount - 2) {
      pages.push(<span key="next-page">...</span>);
    }

    if (pageCount > 1) {
      pages.push(renderPageButton(pageCount));
    }

    return pages;
  };

  return (
    <div className="flex justify-center gap-5 mt-4">
      <Button
        variant={TYPE.THIRD}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <Image src="/prev-icon.svg" alt="prev icon" width={16} height={16} />
      </Button>
      {renderPageNumbers()}
      <Button
        variant={TYPE.THIRD}
        onClick={handleNext}
        disabled={currentPage === pageCount}
      >
        <Image src="/next-icon.svg" alt="next icon" width={16} height={16} />
      </Button>
    </div>
  );
};
