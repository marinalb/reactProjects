import React from 'react';

import BookCard from './BookCard';

export default function BookList({ books }) {
  return (
    <div className="book-list">
      {books.map(book => <BookCard key={book.id} book={book} />)}
    </div>
  );
}