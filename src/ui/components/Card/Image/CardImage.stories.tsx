import { Meta, StoryObj } from '@storybook/react';
import { CardImage } from '@/ui/components/Card/Image';

const meta: Meta<typeof CardImage> = {
  component: CardImage,
  tags: ['autodocs'],
  argTypes: {
    src: {
      description: 'URL of the image to be displayed'
    },
    alt: {
      description: 'Alternative text for the image'
    },
    children: {
      description: 'Content to show on hover'
    },
    styles: {
      description: 'Custom CSS classes to apply to the CardImage component'
    },
    isCircle: {
      description: 'Makes the image circular if true'
    },
    fixedSize: {
      description: 'Fixed size for the image (width, height)'
    },
    autoSize: {
      description: 'Automatically size the image based on the container'
    },
    isBlur: {
      description:
        'To be used as a placeholder image before the src image successfully loads.'
    }
  }
};

export default meta;

type Story = StoryObj<typeof CardImage>;

export const Default: Story = {
  args: {
    src: '/background-hero.webp',
    alt: 'Hero Background',
    isBlur: true,
    fixedSize: { width: 500, height: 500 },
    styles: 'max-w-[500px]'
  }
};

export const WithHoverContent: Story = {
  args: {
    src: 'https://i.ibb.co/KwS0QKz/san-3.webp',
    alt: 'San 3',
    fixedSize: { width: 200, height: 200 },
    styles: 'max-w-[200px]',
    children: (
      <div className="flex gap-2">
        <p>Hover Content</p>
        <h1>Example Text</h1>
      </div>
    )
  }
};

export const Circular: Story = {
  args: {
    src: 'https://i.ibb.co/KwS0QKz/san-3.webp',
    alt: 'San 3',
    fixedSize: { width: 200, height: 200 },
    styles: 'max-w-[200px]',
    isCircle: true,
    children: (
      <div className="flex gap-2">
        <p>Hover Content</p>
        <h1>Example Text</h1>
      </div>
    )
  }
};
