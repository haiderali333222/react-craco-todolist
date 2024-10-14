/* eslint-disable */
import React, { useContext } from 'react';
import Todo from './Todo';
import { useTodos, useSetTodos } from '../../context/TodoContext';

const TodoList = () => {
  const { todos } = useTodos();
  const todosActions = useSetTodos();

  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          index={index}
          removeTodo={todosActions.remove}
        />
      ))}
    </div>
  );
};

export default TodoList;
