import { render, screen } from '@testing-library/react';

// Mocks
import { mockPortfolio } from '@/mocks';

// Components
import { SceneryDetail } from '@/ui/components';

describe('SceneryDetail component', () => {
  const defaultProps = {
    name: mockPortfolio[0].name,
    image: mockPortfolio[0].image,
    date: mockPortfolio[0].date,
    detail: mockPortfolio[0].detail,
    metrics: true,
    view: mockPortfolio[0].view,
    favorite: mockPortfolio[0].favorite,
    comment: mockPortfolio[0].comment
  };

  it('rendering list image', () => {
    render(<SceneryDetail {...defaultProps} />);
    const img = screen.getByAltText('Project One');
    expect(img).toBeInTheDocument();
  });

  it('should be render match to snapshot', () => {
    const { container } = render(<SceneryDetail {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
