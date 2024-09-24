// CardDisplay.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';

// Components
import { CardDisplay } from '@/ui/components/Card/Display';

// Mocks
import { mockProject } from '@/mocks';

const meta: Meta<typeof CardDisplay> = {
  component: CardDisplay,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    views: {
      description: 'Total number of people who viewed the post'
    },
    image: {
      description: 'Image of item for src'
    },
    name: {
      description: 'Name for the image when the image is corrupted'
    },
    comments: {
      description: 'Total number of people who commented on the post'
    },
    favorites: {
      description: 'Total number of people who liked the post'
    }
  }
};

export default meta;

type Story = StoryObj<typeof CardDisplay>;

export const Default: Story = {
  args: {
    name: mockProject[0].name,
    image: mockProject[0].image,
    views: mockProject[0].views,
    comments: mockProject[0].comment,
    favorites: mockProject[0].favorite
  }
};
