import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Pagination } from '@/ui/components/Pagination';

// Mock useRouter and useSearchParams
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn()
}));

describe('Pagination Component', () => {
  const push = jest.fn();
  const searchParams = new URLSearchParams();
  const pageCount = 5;
  const currentPage = 1;

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push });
    (useSearchParams as jest.Mock).mockReturnValue(searchParams);
  });

  it('should render pagination buttons correctly', () => {
    render(<Pagination pageCount={pageCount} currentPage={currentPage} />);

    expect(screen.getByAltText('prev icon')).toBeInTheDocument();
    expect(screen.getByAltText('next icon')).toBeInTheDocument();

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('...')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('disables prev button on the first page', () => {
    render(<Pagination pageCount={pageCount} currentPage={currentPage} />);

    const prevButton = screen.getByAltText('prev icon').closest('button');
    expect(prevButton).toBeDisabled();
  });

  it('should call router.push with correct URL when page changes', () => {
    render(<Pagination pageCount={pageCount} currentPage={currentPage} />);

    // Click next page button
    const nextButton = screen.getByAltText('next icon').closest('button');

    fireEvent.click(nextButton!);

    expect(push).toHaveBeenCalledWith('?portfolio-page=2', { scroll: false });
  });

  it('should be render match to snapshot', () => {
    const { container } = render(
      <Pagination pageCount={pageCount} currentPage={currentPage} />
    );

    expect(container).toMatchSnapshot();
  });
});
