import { Description, Heading } from '@/ui/components/common';
import { Hero } from '@/ui/components/Hero';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Hero> = {
  component: Hero,
  tags: ['autodocs'],
  argTypes: {
    imageUrl: {
      description: 'URL of the image to be displayed'
    },
    children: {
      description: 'Content inside Hero that users can add'
    },
    buttonName: {
      description: 'Name the button'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    imageUrl: '/background-hero.webp'
  }
};

export const WithChildren: Story = {
  args: {
    imageUrl: '/background-hero.webp',
    children: (
      <>
        <Heading styles="text-white">Welcome to SmartWeb</Heading>
        <Description styles="font-thin text-white lg:text-3xl md:text-sm text-xs mt-14">
          Discover a World of Technological Advancements
        </Description>
      </>
    )
  }
};

export const WithButton: Story = {
  args: {
    imageUrl: '/background-hero.webp',
    buttonName: 'Button Name'
  }
};
