import { Meta, StoryObj } from '@storybook/react';
import { ScrollTopButton } from '@/ui/components/common/Button/ScrollTop';

const meta: Meta<typeof ScrollTopButton> = {
  component: ScrollTopButton,

  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
};

export default meta;

type Story = StoryObj<typeof ScrollTopButton>;

export const Default: Story = {
  args: {}
};
