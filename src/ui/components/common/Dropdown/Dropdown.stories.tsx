import { Meta, StoryObj } from '@storybook/react';
import { itemDropdown } from '@/mocks';

// Components
import { Dropdown } from '@/ui/components/common/Dropdown';
import { useState } from 'react';

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
    },
    selectedValue: {
      description: 'The value of the currently selected item.'
    }
  }
};

export default meta;

export const Default: StoryObj<typeof Dropdown> = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string>(
      itemDropdown[0].value
    );

    const handleSelect = (value: string) => {
      setSelectedValue(value);
    };

    return (
      <Dropdown
        items={itemDropdown}
        selectedValue={selectedValue}
        onSelect={handleSelect}
      />
    );
  }
};
