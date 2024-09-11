import { Pagination } from '@/ui/components/Pagination';
import { render, fireEvent, screen } from '@testing-library/react';

describe('Pagination Component', () => {
  const mockOnPageChange = jest.fn();

  test('renders with default props', () => {
    render(
      <Pagination
        pageCount={5}
        currentPage={1}
        onPageChange={mockOnPageChange}
      />
    );

    expect(screen.getByAltText('prev icon')).toBeInTheDocument();
    expect(screen.getByAltText('next icon')).toBeInTheDocument();

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('...')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('disables prev button on the first page', () => {
    render(
      <Pagination
        pageCount={5}
        currentPage={1}
        onPageChange={mockOnPageChange}
      />
    );

    const prevButton = screen.getByAltText('prev icon').closest('button');
    expect(prevButton).toBeDisabled();
  });

  test('disables next button on the last page', () => {
    render(
      <Pagination
        pageCount={5}
        currentPage={5}
        onPageChange={mockOnPageChange}
      />
    );

    const nextButton = screen.getByAltText('next icon').closest('button');
    expect(nextButton).toBeDisabled();
  });

  test('calls onPageChange when page is clicked', () => {
    render(
      <Pagination
        pageCount={5}
        currentPage={1}
        onPageChange={mockOnPageChange}
      />
    );
    const index = screen.getByText('2');
    fireEvent.click(index);
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  test('calls onPageChange when next/prev buttons are clicked', () => {
    render(
      <Pagination
        pageCount={5}
        currentPage={2}
        onPageChange={mockOnPageChange}
      />
    );

    const prevButton = screen.getByAltText('prev icon').closest('button');

    fireEvent.click(prevButton!);
    expect(mockOnPageChange).toHaveBeenCalledWith(1);
    const nextButton = screen.getByAltText('next icon').closest('button');

    fireEvent.click(nextButton!);
    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });

  it('should be render match to snapshot', () => {
    const { container } = render(
      <Pagination
        pageCount={5}
        currentPage={2}
        onPageChange={mockOnPageChange}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
