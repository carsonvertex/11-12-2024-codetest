// task 2: create a user card component that takes a user object as props and displays the user's name, age, gender and remarks.

import React from 'react';
import { CardProps } from "../interfaces/user";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';



const Card: React.FC<CardProps> = ({ user, onDelete, onEdit }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`https://my-json-server.typicode.com/Kenzo800/interview-test-api/users/${user.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete user');
      }

      onDelete(user.id);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <Paper style={{ padding: '16px', margin: '8px' }}>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Gender: {user.gender}</p>
      <p>Remarks: {user.remarks}</p>
      <Button variant="contained" color="secondary" onClick={handleDelete}>
        Delete
      </Button>
      <Button variant="contained" color="primary" onClick={() => onEdit(user)}>
        Edit
      </Button>
    </Paper>
  );
};

export default Card;