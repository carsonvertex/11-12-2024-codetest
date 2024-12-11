// task 2: create a user card component that takes a user object as props and displays the user's name, age, gender and remarks.

import React from 'react'
import User from "../interfaces/user"

const Card: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="border p-4 rounded">
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Gender: {user.gender}</p>
      <p>Remarks: {user.remarks}</p>
    </div>
  );
};

export default Card;
