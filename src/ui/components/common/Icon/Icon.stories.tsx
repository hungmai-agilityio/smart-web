import { Meta, StoryObj } from '@storybook/react';
import { faEye } from '@fortawesome/free-solid-svg-icons';

// Components
import { Icon } from '@/ui/components/common/Icon';

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      description: 'FontAwesome icon to be displayed'
    },
    quantity: {
      description: 'Quantity of items'
    },
    styles: {
      description: 'Custom CSS classes'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: faEye
  }
};

export const CustomStyles: Story = {
  args: {
    icon: faEye,
    quantity: 1011,
    styles: 'text-yellow-500 font-bold'
  }
};
