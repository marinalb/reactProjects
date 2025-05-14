import React from 'react';

export default function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.cover} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <span className="genre">{book.genre}</span>
      <strong>U$ {book.price.toFixed(2)}</strong>
       <button className="buy-btn">Buy</button>
    </div>
  );
}