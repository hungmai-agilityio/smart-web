import { Header } from '@/ui/layouts/Header';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
  component: Header,

  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {}
};
