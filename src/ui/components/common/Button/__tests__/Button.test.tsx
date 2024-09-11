import { render, screen, fireEvent } from '@testing-library/react';

// Constants
import { SIZE, TYPE } from '@/constants';

// Components
import { Button } from '@/ui/components/common/Button';

describe('Button', () => {
  it('renders button with default props', () => {
    render(<Button name="Test Button" />);

    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('text-primary');
    expect(buttonElement).not.toBeDisabled();
  });

  it('renders button with size prop', () => {
    render(<Button name="Test Button" />);

    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toHaveClass('px-2 rounded-full font-light');
  });

  it('renders button with variant prop', () => {
    render(<Button name="Test Button" variant={TYPE.SECOND} />);

    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toHaveClass('bg-white');
    expect(buttonElement).toHaveClass('border-primary');
  });

  it('button is disabled when disabled prop is true', () => {
    render(<Button name="Test Button" disabled />);

    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass('cursor-not-allowed');
  });

  it('button click triggers alert', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();
    render(<Button name="Test Button" />);

    const buttonElement = screen.getByText(/Test Button/i);
    fireEvent.click(buttonElement);

    expect(alertMock).toHaveBeenCalledWith('We will update feature later');
    alertMock.mockRestore();
  });

  it('should be render match to snapshot', () => {
    const { container } = render(
      <Button name="Click me" variant={TYPE.PRIMARY} />
    );

    expect(container).toMatchSnapshot();
  });
});
