import { NavItem } from '@/ui/components/NavItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NavItem> = {
  component: NavItem,
  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true
    }
  },

  argTypes: {
    name: {
      description: 'Name for the navigation bar item'
    },
    url: {
      description: 'path to go to a certain page '
    }
  }
};

export default meta;

type Story = StoryObj<typeof NavItem>;

export const Default: Story = {
  args: {
    name: 'About',
    url: '/about'
  }
};
