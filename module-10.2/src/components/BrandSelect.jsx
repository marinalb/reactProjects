import React from 'react';

function BrandSelect({ brands, value, onChange }) {
  return (
    <div>
      <label>Brand:</label>
      <select value={value} onChange={onChange}>
        <option value="">Select</option>
        {brands.map(brand => (
          <option key={brand.codigo} value={brand.codigo}>
            {brand.nome}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BrandSelect;