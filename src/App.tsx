import { useReducer, useState } from 'react';

import './App.css';
import TodoComponent from './components/todo';

import type { Todo, ActionType } from './types';

export const ACTIONS = {
  ADD_NEW: 'add_todo',
  TOGGLE_TODO: 'toggle_todo',
  DELETE_TODO: 'delete_todo',
};
function newTodo(name: string): Todo {
  return { id: Date.now(), name: name, completed: false };
}
function reducer(
  state: Todo[],
  action: Omit<ActionType, 'payload.name'>
): Todo[] {
  switch (action.type) {
    case ACTIONS.ADD_NEW:
      return [...state, newTodo(action.payload?.name)];
    case ACTIONS.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_NEW, payload: newTodo(name) });

    setName('');
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>

      <ul>
        {todos.map((todo) => {
          return (
            <TodoComponent key={todo.id} todo={todo} dispatch={dispatch} />
          );
        })}
      </ul>
    </>
  );
}

export default App;
