import { Meta, StoryObj } from '@storybook/react';
import { CardSkeleton } from '@/ui/components/Skeleton/Card';

const meta: Meta<typeof CardSkeleton> = {
  component: CardSkeleton,

  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
};

export default meta;

type Story = StoryObj<typeof CardSkeleton>;

export const Default: Story = {
  args: {}
};
