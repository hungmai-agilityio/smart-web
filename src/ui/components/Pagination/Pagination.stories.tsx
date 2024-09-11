import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

// Components
import { Pagination } from '@/ui/components/Pagination';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    pageCount: {
      description: 'Total number of pages'
    },
    currentPage: {
      description: 'The current active page number'
    },
    onPageChange: {
      description: 'Callback function when the page changes'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 1);

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
      args.onPageChange(page);
    };

    return (
      <Pagination
        pageCount={args.pageCount}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    );
  },
  args: {
    pageCount: 10,
    currentPage: 1
  }
};
