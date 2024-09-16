'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Photo } from '@/ui/components/common';

interface PaginationProps {
  pageCount: number;
  currentPage: number;
}

export const Pagination = ({ pageCount, currentPage }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Handles page index changes
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= pageCount) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('portfolio-page', page.toString());
      router.push(`?${params.toString()}`, { scroll: false });
    }
  };

  // Render page item
  const renderPageNumbers = () => {
    const pages = [];

    const renderPageButton = (page: number) => (
      <button
        key={page}
        className={`px-4 py-2 ${currentPage === page ? 'bg-white text-second rounded-full drop-shadow-lg' : ''}`}
        onClick={handlePageChange.bind(null, page)}
      >
        {page}
      </button>
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
      <button
        className="px-3"
        onClick={handlePageChange.bind(null, currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Photo
          src="/prev-icon.svg"
          alt="prev icon"
          fixedSize={{ width: 16, height: 16 }}
        />
      </button>
      {renderPageNumbers()}
      <button
        className="px-3"
        onClick={handlePageChange.bind(null, currentPage + 1)}
        disabled={currentPage === pageCount}
      >
        <Photo
          src="/next-icon.svg"
          alt="next icon"
          fixedSize={{ width: 16, height: 16 }}
        />
      </button>
    </div>
  );
};
