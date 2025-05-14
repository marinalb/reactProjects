import React from 'react';
export default function FilterBar({ onFilterChange }) {
  return (
    <div className="filter-bar">
      <button onClick={() => onFilterChange('All')}>All</button>
      <button onClick={() => onFilterChange('Fiction')}>Fiction</button>
      <button onClick={() => onFilterChange('Non Fiction')}>Non Fiction</button>
    </div>
  );
}