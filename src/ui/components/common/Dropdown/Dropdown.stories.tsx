import { Meta, StoryObj } from '@storybook/react';
import { itemDropdown } from '@/mocks';

// Components
import { Dropdown } from '@/ui/components/common/Dropdown';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    onSelect: {
      description:
        'Callback function that is called when an item is selected. Receives the value of the selected item.'
    },
    items: {
      description:
        'Array of items where each item contains a label to be displayed and a value to be used in logic.'
    }
  }
};

export default meta;

export const Default: StoryObj<typeof Dropdown> = {
  args: {
    items: itemDropdown
  }
};
