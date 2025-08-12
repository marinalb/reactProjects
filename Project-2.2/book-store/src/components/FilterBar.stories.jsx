import React from 'react';
import FilterBar from './FilterBar';

export default {
  title: 'Components/FilterBar',
  component: FilterBar,
  argTypes: {
    onFilterChange: { action: 'filter changed' },
    filters: { control: 'array' },
  },
};

const Template = (args) => <FilterBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  onFilterChange: (filter) => console.log('Selected filter:', filter),
};

export const CustomFilters = Template.bind({});
CustomFilters.args = {
  onFilterChange: (filter) => console.log('Selected filter:', filter),
  filters: ['All', 'Romance', 'Sci-Fi', 'Biography'],
};
