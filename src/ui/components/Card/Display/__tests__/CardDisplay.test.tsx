import { render } from '@testing-library/react';

// Components
import { CardDisplay } from '@/ui/components/Card/Display';

// Mocks
import { mockProject } from '@/mocks';

describe('CardDisplay', () => {
  it('Should match snapshot', () => {
    const { container } = render(<CardDisplay item={mockProject[0]} />);
    expect(container).toMatchSnapshot();
  });
});
