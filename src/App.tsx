import { useReducer, useState } from 'react';

import './App.css';

interface Todo {
  id: number;
  name: string;
  completed: boolean;
}

type ActionType = { type: string; payload: { name: string } };

const ACTIONS = {
  ADD_NEW: 'add_todo',
};
function newTodo(name: string) {
  return { id: Date.now(), name: name, completed: false };
}
function reducer(state: Todo[], action: ActionType): Todo[] {
  switch (action.type) {
    case ACTIONS.ADD_NEW:
      return [...state, newTodo(action.payload.name)];
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');
  console.log(name);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_NEW, payload: { name: name } });
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
            <li key={todo.id}>
              {todo.name} {todo.completed ? '✔️' : '❌'}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
