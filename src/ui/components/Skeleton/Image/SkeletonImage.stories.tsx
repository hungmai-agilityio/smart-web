import { Meta, StoryObj } from '@storybook/react';
import { SkeletonImage } from '@/ui/components/Skeleton/Image';

const meta: Meta<typeof SkeletonImage> = {
  component: SkeletonImage,

  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
};

export default meta;

type Story = StoryObj<typeof SkeletonImage>;

export const Default: Story = {
  args: {
    col: '3',
    row: 6
  }
};
