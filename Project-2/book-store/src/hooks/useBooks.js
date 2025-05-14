import { useEffect, useState } from 'react';
import { fetchBooks } from '../data/api';

export function useBooks() {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetchBooks().then(setBooks);
  }, []);

  const filteredBooks = books.filter(book =>
    filter === 'All' ? true : book.genre === filter
  );

  return { books: filteredBooks, setFilter };
}