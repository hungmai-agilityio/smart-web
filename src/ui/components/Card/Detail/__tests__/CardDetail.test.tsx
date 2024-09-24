import { render } from '@testing-library/react';

// Components
import { CardDetail } from '@/ui/components/Card/Detail';

// Mocks
import { mockProduct } from '@/mocks';

describe('CardDetail', () => {
  const defaultProps = {
    id: mockProduct[0].id,
    name: mockProduct[0].name,
    image: mockProduct[0].image,
    users: mockProduct[0].users,
    view: mockProduct[0].view
  };

  it('Should match snapshot', () => {
    const { container } = render(<CardDetail {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
