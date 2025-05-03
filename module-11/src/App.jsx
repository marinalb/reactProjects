import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import List from '../pages/List';

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: '15px', padding: '10px', background: '#f5f5f5' }}>
        <Link to="/">Home</Link>
        <Link to="/register">Registration</Link>
        <Link to="/list">List</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
