import React from 'react';

function ModelSelect({ models, value, onChange, disabled }) {
  return (
    <div>
      <label>Model:</label>
      <select value={value} onChange={onChange} disabled={disabled}>
        <option value="">Select</option>
        {models.map(model => (
          <option key={model.codigo} value={model.codigo}>
            {model.nome}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ModelSelect;
