import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Heading, HeadingProps } from '.';

export default {
  title: 'Typography/Heading',
  component: Heading,
} as Meta;

const Template: Story<HeadingProps> = function Component(args) {
  return <Heading {...args} />;
};

export const Heading1 = Template.bind({});
Heading1.args = {
  children: 'This is a heading size 1',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  children: 'This is a heading size 2',
  size: 2,
};

export const Heading3 = Template.bind({});
Heading3.args = {
  children: 'This is a heading size 3',
  size: 3,
};

export const Heading4 = Template.bind({});
Heading4.args = {
  children: 'This is a heading size 4',
  size: 4,
};

export const Heading5 = Template.bind({});
Heading5.args = {
  children: 'This is a heading size 5',
  size: 5,
};

export const Heading6 = Template.bind({});
Heading6.args = {
  children: 'This is a heading size 6',
  size: 6,
};
