import React from 'react';
import BookList from './BookList';

export default {
  title: 'Components/BookList',
  component: BookList,
  argTypes: {
    books: { control: 'array' },
  },
};

const Template = (args) => <BookList {...args} />;

export const WithBooks = Template.bind({});
WithBooks.args = {
  books: [
    { id: 1, title: 'Dune', author: 'Frank Herbert', genre: 'Fiction', price: 59.9, cover: 'https://covers.openlibrary.org/b/id/8108696-L.jpg' },
    { id: 2, title: 'Educated', author: 'Tara Westover', genre: 'Non Fiction', price: 49.9, cover: 'https://covers.openlibrary.org/b/id/9251105-L.jpg' }
  ],
};

export const EmptyList = Template.bind({});
EmptyList.args = {
  books: [],
};
