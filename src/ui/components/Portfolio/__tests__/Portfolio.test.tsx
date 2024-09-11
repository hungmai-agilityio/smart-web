import { render, screen } from '@testing-library/react';

// Mocks
import { mockImages } from '@/mocks';

// Components
import { Portfolio } from '@/ui/components/Portfolio';

describe('Portfolio component', () => {
  it('rendering list image', () => {
    render(<Portfolio images={mockImages} />);
    const img = screen.getByAltText('Project One');
    expect(img).toBeInTheDocument();
  });

  it('should be render match to snapshot', () => {
    const { container } = render(<Portfolio images={mockImages} />);
    expect(container).toMatchSnapshot();
  });
});
