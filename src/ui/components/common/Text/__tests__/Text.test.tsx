import { render, screen } from '@testing-library/react';
import { Heading, Description } from '@/ui/components/common';
import { montserrat, abel } from '@/constants/fonts';

describe('Heading Component', () => {
  it('should render the heading with the correct children', () => {
    render(<Heading>Test Heading</Heading>);

    expect(screen.getByText('Test Heading')).toBeInTheDocument();
  });

  it('should apply the correct className for heading, including default styles and additional styles', () => {
    const customStyles = 'text-red-500';

    render(<Heading styles={customStyles}>Test Heading</Heading>);
    const headingElement = screen.getByText('Test Heading');

    expect(headingElement).toHaveClass(montserrat.className);
    expect(headingElement).toHaveClass(
      'lg:text-5xl font-bold md:text-3xl md:leading-normal sm:text-xl'
    );
    expect(headingElement).toHaveClass(customStyles);
  });
});

describe('Description Component', () => {
  it('should render the description with the correct children', () => {
    render(<Description>Test Description</Description>);

    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('should apply the correct className for description, including default and additional styles', () => {
    const customStyles = 'text-blue-500';

    render(<Description styles={customStyles}>Test Description</Description>);
    const descriptionElement = screen.getByText('Test Description');

    expect(descriptionElement).toHaveClass(abel.className);
    expect(descriptionElement).toHaveClass(customStyles);
  });
});
