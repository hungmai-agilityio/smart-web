import type { Meta, StoryObj } from '@storybook/react';
import { Brand } from '@/ui/components';

const meta: Meta<typeof Brand> = {
  component: Brand,
  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true
    }
  },

  argTypes: {
    logo: {
      description: 'Logo for brand'
    },
    url: {
      description: 'path to a certain location'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Brand>;

export const Default: Story = {
  args: {
    logo: '/logo.svg'
  }
};
