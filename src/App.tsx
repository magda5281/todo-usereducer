import { useReducer, useState } from 'react';

import './App.css';
import TodoComponent from './components/Todo';

import type { Todo, ActionType } from './types';
import useLocalStorage from './useLocalStorage';
import useUpdateLogger from './useUpdateLogger';
import ModalExample from './components/ModalExample';
import TransitionHookComponent from './components/TransitionHookComponent';
import SlugishNonResApps from './components/SlugishNonResApps';

export const ACTIONS = {
  ADD_NEW: 'add_todo',
  TOGGLE_TODO: 'toggle_todo',
  DELETE_TODO: 'delete_todo',
};
function newTodo(name: string): Todo {
  return { id: Date.now(), name: name, completed: false };
}
function reducer(state: Todo[], action: ActionType): Todo[] {
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
  const [value, setValue] = useLocalStorage('value', '');
  useUpdateLogger(name);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_NEW, payload: { name, id: 0 } });
    setName('');
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '100%',
            maxWidth: '40rem',
          }}
        >
          <label htmlFor='name'>Todo name</label>
          <input
            name='name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoComponent key={todo.id} todo={todo} dispatch={dispatch} />
          );
        })}
      </ul>
      <label htmlFor='value'>local storage </label>
      <input
        name='value'
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ModalExample />
      <TransitionHookComponent />
      <SlugishNonResApps />
    </div>
  );
}

export default App;
