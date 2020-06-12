import React from 'react';

export default function ListItem( { todo, handleDelete, handleUpdate }) {
  return (
    <div>
      <li>{todo.task}</li>
      <button onClick={(e) => { handleUpdate(e, todo) }}>Update Todo</button>
      <button onClick={(e) => { handleDelete(e, todo.id) }}>Delete Todo</button>
    </div>
  );
}