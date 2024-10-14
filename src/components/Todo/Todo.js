import React from 'react';

const Todo = ({ todo, index, removeTodo }) => {
  return (
    <div>
      <span>{todo}</span>
      <button type='button' onClick={() => removeTodo(index)}>Delete</button>
    </div>
  );
};

export default Todo;
