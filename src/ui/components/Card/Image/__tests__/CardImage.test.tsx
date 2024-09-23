import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

// Components
import { CardImage } from '@/ui/components/Card/Image';

describe('CardImage Component', () => {
  const defaultProps = {
    src: '/background-hero.webp',
    alt: 'Hero Background',
    autoSize: true
  };

  it('renders image with default properties', () => {
    render(<CardImage {...defaultProps} />);
    const img = screen.getByAltText('Hero Background');
    expect(img).toBeInTheDocument();
  });

  it('renders children on hover', () => {
    render(
      <CardImage {...defaultProps} isCircle>
        <div>Hover Content</div>
      </CardImage>
    );
    const img = screen.getByAltText('Hero Background');
    fireEvent.mouseEnter(img);
    const hoverContent = screen.getByText('Hover Content');
    expect(hoverContent).toBeInTheDocument();
  });

  it('does not show children when not hovered', () => {
    render(
      <CardImage {...defaultProps}>
        <div>Hover Content</div>
      </CardImage>
    );
    const hoverContent = screen.queryByText('Hover Content');
    expect(hoverContent).not.toBeInTheDocument();
  });

  it('renders circle styles when isCircle is true', () => {
    render(<CardImage {...defaultProps} isCircle />);
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

    render(<CardImage {...fixedSizeProps} />);
    const container = screen.getByAltText('Hero Background').parentElement;

    expect(container).toHaveClass('w-[300px]');
    expect(container).toHaveClass('h-[300px]');
  });

  it('renders with custom styles when styles prop is provided', () => {
    const customStylesProps = {
      ...defaultProps,
      styles: 'custom-class'
    };

    render(<CardImage {...customStylesProps} />);
    const container = screen.getByAltText('Hero Background').parentElement;

    expect(container).toHaveClass('custom-class');
  });

  it('should be render match to snapshot', () => {
    const { container } = render(<CardImage {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
