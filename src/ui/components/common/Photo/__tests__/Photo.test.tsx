import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

// Components
import { Photo } from '@/ui/components/common/Photo';

describe('Photo Component', () => {
  const defaultProps = {
    src: '/background-hero.webp',
    alt: 'Hero Background',
    autoSize: true
  };

  it('renders image with default properties', () => {
    render(<Photo {...defaultProps} />);
    const img = screen.getByAltText('Hero Background');
    expect(img).toBeInTheDocument();
  });

  it('renders children on hover', () => {
    render(
      <Photo {...defaultProps} isCircle>
        <div>Hover Content</div>
      </Photo>
    );
    const img = screen.getByAltText('Hero Background');
    fireEvent.mouseEnter(img);
    const hoverContent = screen.getByText('Hover Content');
    expect(hoverContent).toBeInTheDocument();
  });

  it('does not show children when not hovered', () => {
    render(
      <Photo {...defaultProps}>
        <div>Hover Content</div>
      </Photo>
    );
    const hoverContent = screen.queryByText('Hover Content');
    expect(hoverContent).not.toBeInTheDocument();
  });

  it('renders circle styles when isCircle is true', () => {
    render(<Photo {...defaultProps} isCircle />);
    const container = screen.getByAltText('Hero Background').parentElement;
    expect(container).toHaveClass('rounded-full');
    expect(container).toHaveClass('overflow-hidden');
  });

  it('applies fixed size when fixedSize is provided and autoSize is false', () => {
    const fixedSizeProps = {
      ...defaultProps,
      fixedSize: { width: 300, height: 300 },
      autoSize: false
    };

    render(<Photo {...fixedSizeProps} />);
    const container = screen.getByAltText('Hero Background').parentElement;

    expect(container).toHaveClass('w-[300px]');
    expect(container).toHaveClass('h-[300px]');
  });

  it('renders with custom styles when styles prop is provided', () => {
    const customStylesProps = {
      ...defaultProps,
      styles: 'custom-class'
    };

    render(<Photo {...customStylesProps} />);
    const container = screen.getByAltText('Hero Background').parentElement;

    expect(container).toHaveClass('custom-class');
  });

  it('should be render match to snapshot', () => {
    const { container } = render(<Photo {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
