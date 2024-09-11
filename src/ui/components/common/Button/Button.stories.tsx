import { Meta, StoryObj } from '@storybook/react';

// Components
import { Button } from '@/ui/components/common/Button';

// Constants
import { TYPE } from '@/constants';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    name: {
      description: 'Name button'
    },
    variant: {
      description: 'Set type optional for Button'
    },
    onClick: {
      description: 'Handle the event when clicking on the button'
    },
    styles: {
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
    name: 'Submit',
    variant: TYPE.PRIMARY,
    onClick: () => alert('submit')
  }
};

export const Secondary: Story = {
  args: {
    name: 'Submit',
    variant: TYPE.SECOND,
    onClick: () => alert('submit')
  }
};

export const ButtonDisabled: Story = {
  args: {
    name: 'Send',
    disabled: true
  }
};
