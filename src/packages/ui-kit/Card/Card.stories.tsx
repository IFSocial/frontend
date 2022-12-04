import React from 'react';

import { Story, Meta } from '@storybook/react';

import Card, { CardProps } from './Card';

export default {
  title: 'UI/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = function Component(args) {
  return <Card {...args} />;
};

export const Modalidade = Template.bind({});
Modalidade.args = {
  title: 'Nome do Esporte',
  subtitle: 'Inscrever-se',
  image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Futsal_pictogram.svg/1024px-Futsal_pictogram.svg.png',
};

export const Tipo = Template.bind({});
Tipo.args = {
  subtitle: 'Esportes Coletivos',
  image:
    'https://quizizz.com/media/resource/gs/quizizz-media/quizzes/e4f18483-db85-4a3d-a350-a0c581c4ace4',
};
