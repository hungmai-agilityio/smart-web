import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { Icon } from '@/ui/components/common/Icon';

// FontAwesome
import { faEye } from '@fortawesome/free-solid-svg-icons';

describe('Icon Component', () => {
  it('renders default Icon', () => {
    const { container } = render(<Icon icon={faEye} />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('should render match to snapshot', () => {
    const { container } = render(<Icon icon={faEye} />);
    expect(container).toMatchSnapshot();
  });
});
