import { Meta, StoryObj } from '@storybook/react';
import { Photo } from '@/ui/components/common/Photo';

const meta: Meta<typeof Photo> = {
  component: Photo,
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
      description: 'Custom CSS classes to apply to the Photo component'
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

type Story = StoryObj<typeof Photo>;

export const Default: Story = {
  args: {
    src: '/background-hero.webp',
    alt: 'Hero Background',
    isBlur: true,
    fixedSize: { width: 500, height: 500 }
  }
};

export const WithHoverContent: Story = {
  args: {
    src: 'https://i.ibb.co/KwS0QKz/san-3.webp',
    alt: 'San 3',
    children: (
      <div className="flex gap-2">
        <p>Hover Content</p>
        <h1>Example Text</h1>
      </div>
    ),
    fixedSize: { width: 200, height: 200 }
  }
};

export const Circular: Story = {
  args: {
    src: 'https://i.ibb.co/KwS0QKz/san-3.webp',
    alt: 'San 3',
    fixedSize: { width: 200, height: 200 },
    isCircle: true,
    children: (
      <div className="flex gap-2">
        <p>Hover Content</p>
        <h1>Example Text</h1>
      </div>
    )
  }
};
