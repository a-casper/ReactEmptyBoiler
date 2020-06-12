import React from 'react';
import ListItem from './ListItem.jsx';

export default function List( { todos, handleUpdate, handleDelete } ) {
  return (
    <ul>
    {todos.map((todo) => {
      return <ListItem key={todo.id} todo={todo} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
    })}
    </ul>
  );
}