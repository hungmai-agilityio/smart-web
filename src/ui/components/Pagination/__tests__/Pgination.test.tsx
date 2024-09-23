import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Pagination } from '@/ui/components/Pagination';

// Mock useRouter and useSearchParams
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn()
}));

describe('Pagination Component', () => {
  const replace = jest.fn();
  const searchParams = new URLSearchParams();

  const defaultProps = {
    pageCount: 5,
    queryPage: 'page'
  };
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ replace });
    (useSearchParams as jest.Mock).mockReturnValue(searchParams);
  });

  it('should render pagination buttons correctly', () => {
    render(<Pagination {...defaultProps} />);

    expect(screen.getByAltText('prev icon')).toBeInTheDocument();
    expect(screen.getByAltText('next icon')).toBeInTheDocument();

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('...')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('disables prev button on the first page', () => {
    render(<Pagination {...defaultProps} />);

    const prevButton = screen.getByAltText('prev icon').closest('button');
    expect(prevButton).toBeDisabled();
  });

  it('should call router.replace with correct URL when previous button is clicked', () => {
    searchParams.set('page', '2');
    render(<Pagination {...defaultProps} />);

    const prevButton = screen.getByAltText('prev icon').closest('button');
    fireEvent.click(prevButton!);

    expect(replace).toHaveBeenCalledWith('?page=1', { scroll: false });
  });

  it('should be render match to snapshot', () => {
    const { container } = render(<Pagination {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });
});
