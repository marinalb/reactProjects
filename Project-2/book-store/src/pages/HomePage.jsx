import React from 'react';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import BookList from '../components/BookList';
import { useBooks } from '../hooks/useBooks';

export default function HomePage() {
  const { books, setFilter } = useBooks();

  return (
    <>
      <Header />
      <FilterBar onFilterChange={setFilter} />
      <BookList books={books} />
    </>
  );
}