import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function UserForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({ name });
    localStorage.setItem('users', JSON.stringify(users));
    setName('');
    alert('User registered!');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <TextField
        label="Name"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button variant="contained" color="primary" type="submit">
        Register
      </Button>
    </form>
  );
}

export default UserForm;
