import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchBrands, fetchModels, fetchYears, fetchPrice } from './fipeApi';
import BrandSelect from './components/BrandSelect';
import ModelSelect from './components/ModelSelect';
import YearSelect from './components/YearSelect';

function App() {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetchBrands().then(setBrands).catch(console.error);
  }, []);

  useEffect(() => {
    if (selectedBrand) {
      fetchModels(selectedBrand).then(data => setModels(data.modelos)).catch(console.error);
      setSelectedModel('');
      setSelectedYear('');
      setResult(null);
    }
  }, [selectedBrand]);

  useEffect(() => {
    if (selectedBrand && selectedModel) {
      fetchYears(selectedBrand, selectedModel).then(setYears).catch(console.error);
      setSelectedYear('');
      setResult(null);
    }
  }, [selectedBrand, selectedModel]);

  useEffect(() => {
    if (selectedBrand && selectedModel && selectedYear) {
      fetchPrice(selectedBrand, selectedModel, selectedYear).then(setResult).catch(console.error);
    }
  }, [selectedBrand, selectedModel, selectedYear]);

  return (
    <div style={{ padding: '60px', fontFamily: 'Arial', maxWidth: '1500px', margin: '0 auto', fontSize: '20px' }}>
      <h1>FIPE Table 🚗</h1>

      <BrandSelect
        brands={brands}
        value={selectedBrand}
        onChange={e => setSelectedBrand(e.target.value)}
      />

      <ModelSelect
        models={models}
        value={selectedModel}
        onChange={e => setSelectedModel(e.target.value)}
        disabled={!selectedBrand}
      />

      <YearSelect
        years={years}
        value={selectedYear}
        onChange={e => setSelectedYear(e.target.value)}
        disabled={!selectedModel}
      />

      {result && (
        <div style={{ 
          marginTop: '50px', 
          border: '3px solid #eee', 
          borderRadius: '8px',
          padding: '20px', 
          textAlign: 'center' 
        }}>
          <h2>Result:</h2>
          <p><strong>Price:</strong> {result.Valor}</p>
          <p><strong>Brand:</strong> {result.Marca}</p>
          <p><strong>Model:</strong> {result.Modelo}</p>
          <p><strong>Year:</strong> {result.AnoModelo}</p>
        </div>
      )}
    </div>
  );
}

export default App;
