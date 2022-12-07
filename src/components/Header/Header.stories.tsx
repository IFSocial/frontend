import React from 'react';

import { Story, Meta } from '@storybook/react';

import Header from './Header';

export default {
  title: 'Layout/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = function Component(args) {
  return <Header {...args} />;
};

export const CustomHeader = Template.bind({});
CustomHeader.args = {};
