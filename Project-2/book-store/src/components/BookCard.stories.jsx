// src/components/BookCard.stories.jsx

import React from 'react';
import BookCard from './BookCard';

export default {
  title: 'Components/BookCard',
  component: BookCard,
  argTypes: {
    book: {
      description: 'Livro a ser exibido no card',
    },
  },
};

const Template = (args) => <BookCard {...args} />;

export const Fiction = Template.bind({});
Fiction.args = {
  book: {
    id: 101,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    genre: 'Ficção',
    price: 39.9,
    cover: 'https://covers.openlibrary.org/b/id/11119984-L.jpg'
  }
};

export const NonFiction = Template.bind({});
NonFiction.args = {
  book: {
    id: 102,
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Não Ficção',
    price: 44.9,
    cover: 'https://covers.openlibrary.org/b/id/10568135-L.jpg'
  }
};

export const NoCover = Template.bind({});
NoCover.args = {
  book: {
    id: 103,
    title: 'Invisible Cities',
    author: 'Italo Calvino',
    genre: 'Ficção',
    price: 32.0,
    cover: ''
  }
};

export const WithCustomActions = (args) => {
  const book = args.book;
  return (
    <div style={{ maxWidth: 260 }}>
      <BookCard
        book={book}
        onClick={() => alert(`Você clicou em: ${book.title}`)}
      />
    </div>
  );
};
WithCustomActions.args = {
  book: {
    id: 104,
    title: 'A Arte de Fazer Acontecer',
    author: 'David Allen',
    genre: 'Não Ficção',
    price: 38.9,
    cover: 'https://covers.openlibrary.org/b/id/8233033-L.jpg'
  }
};
WithCustomActions.storyName = 'With click action';
