import { render, fireEvent, screen } from '@testing-library/react';

// Mocks
import { itemDropdown } from '@/mocks';

// Components
import { Dropdown } from '@/ui/components/common/Dropdown';

describe('Dropdown Component', () => {
  const onSelect = jest.fn();

  beforeEach(() => {
    jest.fn().mockClear();
  });

  it('renders correctly with default item', () => {
    render(<Dropdown items={itemDropdown} />);
    const [selectedItem] = screen.getAllByText('Option 1');
    expect(selectedItem).toBeInTheDocument();
  });

  it('opens the dropdown and selects an item', () => {
    render(<Dropdown items={itemDropdown} onSelect={onSelect} />);

    const [dropdownButton] = screen.getAllByText('Option 1');
    fireEvent.click(dropdownButton);

    const item2 = screen.getByText('Option 2');
    fireEvent.click(item2);

    const [selectedItem] = screen.getAllByText('Option 2');
    expect(selectedItem).toBeInTheDocument();
    expect(onSelect).toHaveBeenCalledWith('option2');
  });

  it('should be render match to snapshot', () => {
    const { container } = render(<Dropdown items={itemDropdown} />);
    expect(container).toMatchSnapshot();
  });
});
