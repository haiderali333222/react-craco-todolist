import React, { useContext } from 'react';
import { useMethods } from 'react-use';

const TodoContext = React.createContext();
const SetTodoContext = React.createContext();

export function useTodos() {
  return useContext(TodoContext);
}

export function useSetTodos() {
  return useContext(SetTodoContext);
}

const reducer = (state) => ({
  add(todo) {
    return { ...state, todos: [...state.todos, todo] };
  },
  remove(index) {
    const newTodos = [...state.todos];
    newTodos.splice(index, 1);
    return { ...state, todos: newTodos };
  },
  set(todos) {
    return { ...state, todos };
  },
});

const TodoProvider = ({ children }) => {
    const initialState = { todos: [] };
    const [state, actions] = useMethods(reducer, initialState);

  return (
    <TodoContext.Provider value={state}>
      <SetTodoContext.Provider value={actions}>
        {children}
      </SetTodoContext.Provider>
    </TodoContext.Provider>
  );
};

export default TodoProvider;
