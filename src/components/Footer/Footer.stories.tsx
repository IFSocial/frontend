import React from 'react';

import { Story, Meta } from '@storybook/react';

import Footer from './Footer';

export default {
  title: 'Layout/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = function Component(args) {
  return <Footer {...args} />;
};

export const CustomFooter = Template.bind({});
CustomFooter.args = {};
