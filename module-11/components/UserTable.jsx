import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(data);
  }, []);

  return (
    <div style={{ maxWidth: '1200px', alignContent: 'center' }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell sx={{ fontWeight: 'bold', fontSize: 22 }}>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UserTable;
