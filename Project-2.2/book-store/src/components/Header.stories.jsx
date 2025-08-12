import React from 'react';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    title: { control: 'text', description: 'Título exibido no header' },
    subtitle: { control: 'text', description: 'Frase de apoio no header' }
  },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const CustomText = Template.bind({});
CustomText.args = {
  title: '📖 My Custom Book Store',
  subtitle: 'Read more. Learn more.',
};
