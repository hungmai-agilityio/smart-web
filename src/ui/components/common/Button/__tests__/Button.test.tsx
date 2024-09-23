import { render, screen } from '@testing-library/react';

// Constants
import { TYPE } from '@/constants';

// Components
import { Button } from '@/ui/components/common/Button';

describe('Button', () => {
  it('renders button with default props', () => {
    render(<Button children="Test Button" variant={TYPE.PRIMARY} />);

    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('text-primary');
    expect(buttonElement).not.toBeDisabled();
  });

  it('renders button with size prop', () => {
    render(<Button children="Test Button" />);

    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toHaveClass('px-2 rounded-full font-light');
  });

  it('renders button with variant prop', () => {
    render(<Button children="Test Button" variant={TYPE.SECOND} />);

    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toHaveClass('bg-white');
    expect(buttonElement).toHaveClass('border-primary');
  });

  it('button is disabled when disabled prop is true', () => {
    render(<Button children="Test Button" disabled />);

    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass('cursor-not-allowed');
  });

  it('should be render match to snapshot', () => {
    const { container } = render(
      <Button children="Click me" variant={TYPE.PRIMARY} />
    );

    expect(container).toMatchSnapshot();
  });
});
