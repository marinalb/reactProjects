import React from 'react';
import PropTypes from 'prop-types';

export default function Header({
  title = '📚 BookStore',
  subtitle = 'Escape into fiction. Empower with facts!'
}) {
  return (
    <header className="header">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};
