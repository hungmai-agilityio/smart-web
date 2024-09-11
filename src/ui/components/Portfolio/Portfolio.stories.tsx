import { Meta, StoryObj } from '@storybook/react';

// Components
import { Portfolio } from '@/ui/components/Portfolio';
import { mockImages } from '@/mocks';

const meta: Meta<typeof Portfolio> = {
  component: Portfolio,
  tags: ['autodocs'],
  argTypes: {
    images: {
      description: 'Array of portfolio images to be displayed'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Portfolio>;

export const Default: Story = {
  args: {
    images: mockImages
  }
};
