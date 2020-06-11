import React from 'react';

export default function InputBar( { value, handleSubmit, handleChange } ) {
  return (
    <form onSubmit={(e) => { handleSubmit(e)}}>
      <input name="todo" type="text" value={value} onChange={(e) => { handleChange(e) }}></input>
      <input type="submit" value="submit"></input>
    </form>
  );
}