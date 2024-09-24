import type { Meta, StoryObj } from '@storybook/react';

// Components
import { CardDetail } from '@/ui/components/Card/Detail';

// Mocks
import { mockProduct } from '@/mocks';

const meta: Meta<typeof CardDetail> = {
  component: CardDetail,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    id: {
      description: 'Data id'
    },
    image: {
      description: 'Image of item for src'
    },
    name: {
      description: 'Name for the image when the image is corrupted'
    },
    users: {
      description: 'List user'
    },
    nameButton: {
      description: 'Name of the button'
    },
    onClick: {
      description: 'Handles button clicks to get item information'
    },
    view: {
      description: 'Total number of people who viewed the item'
    }
  }
};

export default meta;

type Story = StoryObj<typeof CardDetail>;

const handleClick = (id: string) => {
  alert(`Clicked on ${id}`);
};

export const Default: Story = {
  args: {
    id: mockProduct[0].id,
    name: mockProduct[0].name,
    image: mockProduct[0].image,
    users: mockProduct[0].users,
    view: mockProduct[0].view
  }
};

export const HasButton: Story = {
  args: {
    id: mockProduct[0].id,
    name: mockProduct[0].name,
    image: mockProduct[0].image,
    users: mockProduct[0].users,
    view: mockProduct[0].view,
    nameButton: 'Review',
    onClick: handleClick
  }
};
