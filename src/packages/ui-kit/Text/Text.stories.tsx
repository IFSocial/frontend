import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Text, TextProps } from '.';

export default {
  title: 'UI/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TextProps> = function Component(args) {
  return <Text {...args} />;
};

export const Text1 = Template.bind({});
Text1.args = {
  children: 'Text size 1',
};

export const Text2 = Template.bind({});
Text2.args = {
  children: 'Text size 2',
  size: 2,
};

export const Text3 = Template.bind({});
Text3.args = {
  children: 'Text size 3',
  size: 3,
};
