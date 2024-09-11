import { Hero } from '@/ui/components/Hero';
import { render, screen } from '@testing-library/react';

describe('Hero component', () => {
  const defaultProps = {
    imageUrl: '/background-hero.webp',
    buttonName: 'Button Name',
    children: <p>Text content</p>
  };

  it('Should render default props', () => {
    render(<Hero {...defaultProps} />);
    expect(screen.getByAltText('Hero Background')).toBeInTheDocument();
    expect(screen.getByText('Text content')).toBeInTheDocument();
  });

  it('should be render match to snapshot', () => {
    const { container } = render(<Hero {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
