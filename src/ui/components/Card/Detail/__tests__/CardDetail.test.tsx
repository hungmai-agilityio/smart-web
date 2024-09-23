import { render } from '@testing-library/react';

// Components
import { CardDetail } from '@/ui/components/Card/Detail';

// Mocks
import { mockProduct } from '@/mocks';

describe('CardDetail', () => {
  it('Should match snapshot', () => {
    const { container } = render(<CardDetail item={mockProduct[0]} />);
    expect(container).toMatchSnapshot();
  });
});
