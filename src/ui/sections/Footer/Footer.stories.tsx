import { Footer } from '@/ui/sections/Footer';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Footer> = {
  component: Footer,

  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {}
};
