import { Meta, StoryObj } from '@storybook/react';

// Components
import { Pagination } from '@/ui/components/Pagination';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true
    }
  },
  argTypes: {
    pageCount: {
      description: 'Total number of pages'
    },
    currentPage: {
      description: 'The current active page number'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    pageCount: 10,
    currentPage: 1
  }
};
