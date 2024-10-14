import React from 'react';
import TodoForm from '../components/Todo/TodoForm';
import TodoList from '../components/Todo/TodoList';

const TodoContainer = () => {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoContainer;
