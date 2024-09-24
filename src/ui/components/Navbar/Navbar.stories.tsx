import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '.';
import { navItems } from '@/constants';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true
    }
  },

  argTypes: {
    items: {
      description: 'List item to render Navbar'
    },
    styles: {
      description: 'custom styles css '
    }
  }
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    items: navItems,
    styles: 'md:flex gap-7 block'
  }
};
