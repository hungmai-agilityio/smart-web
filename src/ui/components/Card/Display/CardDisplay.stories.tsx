// CardDisplay.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';

// Components
import { CardDisplay } from '@/ui/components/Card/Display';

// Mocks
import { mockProject } from '@/mocks';

const meta: Meta<typeof CardDisplay> = {
  component: CardDisplay,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    item: {
      description: 'item to render data'
    }
  }
};

export default meta;

type Story = StoryObj<typeof CardDisplay>;

export const Default: Story = {
  args: {
    item: mockProject[0]
  }
};
