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
    item: {
      description: 'item to render data'
    }
  }
};

export default meta;

type Story = StoryObj<typeof CardDetail>;

export const Default: Story = {
  args: {
    item: mockProduct[0]
  }
};
