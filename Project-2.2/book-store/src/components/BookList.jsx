import React from 'react';
import PropTypes from 'prop-types';


import BookCard from './BookCard';

export default function BookList({ books }) {
  return (
    <div className="book-list">
      {books.map(book => <BookCard key={book.id} book={book} />)}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      cover: PropTypes.string
    })
  ).isRequired
};