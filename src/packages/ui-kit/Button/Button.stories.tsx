import React from 'react';

import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from '.';

export default {
  title: 'UI/Buttons',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Button',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  children: 'Button',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: 'Button',
};

export const SuccessSecondary = Template.bind({});
SuccessSecondary.args = {
  variant: 'successSecondary',
  children: 'Button',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  children: 'Button',
};

export const DangerSecondary = Template.bind({});
DangerSecondary.args = {
  variant: 'dangerSecondary',
  children: 'Button',
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Button',
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button',
  disabled: true,
};