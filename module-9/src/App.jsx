import React from 'react';
import StoreForm from './components/forms/StoreForm';
import BankForm from './components/forms/BankForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="form-container">
        <h2>🛍️ Store Registration</h2>
        <StoreForm />
      </div>

      <div className="form-container">
        <h2>🏦 Bank Registration</h2>
        <BankForm />
      </div>
    </div>
  );
}

export default App;
