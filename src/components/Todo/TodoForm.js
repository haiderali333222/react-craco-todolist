import React, { useState } from 'react';
import { useSetTodos } from '../../context/TodoContext';

const TodoForm = () => {
  const [value, setValue] = useState('');
  const todosActions = useSetTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    todosActions.add(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add new TODO"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
