import { Meta, StoryObj } from '@storybook/react';

// Components
import { Button } from '@/ui/components/common/Button';

// Constants
import { TYPE } from '@/constants';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    children: {
      description: 'Name of the button or Content inside '
    },
    variant: {
      description: 'Set type optional for Button'
    },
    onClick: {
      description: 'Handle the event when clicking on the button'
    },
    className: {
      description: 'Add custom css'
    },
    disabled: {
      description: 'Set disabled button'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Submit',
    variant: TYPE.PRIMARY,
    onClick: () => alert('submit')
  }
};

export const Secondary: Story = {
  args: {
    children: 'Submit',
    variant: TYPE.SECOND,
    onClick: () => alert('submit')
  }
};

export const ButtonDisabled: Story = {
  args: {
    children: 'Send',
    disabled: true
  }
};

export const ButtonThird: Story = {
  args: {
    children: '1',
    disabled: true,
    variant: TYPE.THIRD,
    className: 'w-10 p-2 bg-white text-second rounded-full drop-shadow-lg'
  }
};
