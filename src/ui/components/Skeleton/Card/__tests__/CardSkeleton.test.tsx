import { CardSkeleton } from '@/ui/components/Skeleton/Card';
import { render } from '@testing-library/react';

it('should be render match to snapshot', () => {
  const { container } = render(<CardSkeleton />);
  expect(container).toMatchSnapshot();
});
