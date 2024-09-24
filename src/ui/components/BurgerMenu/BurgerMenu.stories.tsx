import type { Meta, StoryObj } from '@storybook/react';
import { BurgerMenu } from '@/ui/components';
import { navItems } from '@/constants';

const meta: Meta<typeof BurgerMenu> = {
  component: BurgerMenu,
  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true
    }
  },

  argTypes: {
    items: {
      description: 'Array of navigation items for the burger menu'
    }
  }
};

export default meta;

type Story = StoryObj<typeof BurgerMenu>;

export const Default: Story = {
  render: () => (
    <div className="md:w-full w-64 relative">
      <BurgerMenu items={navItems} />
    </div>
  )
};
