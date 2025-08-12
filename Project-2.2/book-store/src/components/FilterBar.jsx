import React from 'react';
import PropTypes from 'prop-types';

export default function FilterBar({ filters = ['All', 'Fiction', 'Non Fiction'], onFilterChange }) {
  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <button key={filter} onClick={() => onFilterChange(filter)}>
          {filter}
        </button>
      ))}
    </div>
  );
}

FilterBar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  onFilterChange: PropTypes.func.isRequired
};
