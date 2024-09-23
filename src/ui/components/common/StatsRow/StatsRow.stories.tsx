import type { Meta, StoryObj } from '@storybook/react';
import { StatsRow } from '@/ui/components/common/StatsRow';

const meta: Meta<typeof StatsRow> = {
  component: StatsRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    views: {
      description: 'Number of views',
      control: { type: 'number' }
    },
    favorite: {
      description: 'Number of favorites',
      control: { type: 'number' }
    },
    comment: {
      description: 'Number of comments',
      control: { type: 'number' }
    },
    isColumn: {
      description: 'Display in column layout',
      control: { type: 'boolean' }
    },
    viewIcon: {
      description: 'Icon for views',
      control: { type: 'text' }
    },
    favoriteIcon: {
      description: 'Icon for favorites',
      control: { type: 'text' }
    },
    commentIcon: {
      description: 'Icon for comments',
      control: { type: 'text' }
    }
  }
};

export default meta;

type Story = StoryObj<typeof StatsRow>;

export const Default: Story = {
  args: {
    views: 120,
    favorite: 30,
    comment: 15,
    isColumn: false,
    viewIcon: '/view-dark.svg',
    favoriteIcon: '/likes.svg',
    commentIcon: '/comments.svg'
  }
};
