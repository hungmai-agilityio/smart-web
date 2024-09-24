import { render } from '@testing-library/react';

// Components
import { CardDisplay } from '@/ui/components/Card/Display';

// Mocks
import { mockProject } from '@/mocks';

describe('CardDisplay', () => {
  const defaultProps = {
    name: mockProject[0].name,
    image: mockProject[0].image,
    views: mockProject[0].views,
    comments: mockProject[0].comment,
    favorites: mockProject[0].favorite
  };
  it('Should match snapshot', () => {
    const { container } = render(<CardDisplay {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
