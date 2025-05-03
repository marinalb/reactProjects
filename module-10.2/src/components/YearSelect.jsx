import React from 'react';

function YearSelect({ years, value, onChange, disabled }) {
  return (
    <div>
      <label>Year:</label>
      <select value={value} onChange={onChange} disabled={disabled}>
        <option value="">Select</option>
        {years.map(year => (
          <option key={year.codigo} value={year.codigo}>
            {year.nome}
          </option>
        ))}
      </select>
    </div>
  );
}

export default YearSelect;
