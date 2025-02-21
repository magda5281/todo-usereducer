import type { Todo, ActionType } from '../types';
import { ACTIONS } from '../App.tsx';
import React from 'react';

interface TodoProps {
  todo: Todo;
  dispatch: React.ActionDispatch<[action: ActionType]>;
}

const Todo = React.memo(({ todo, dispatch }: TodoProps) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {todo.name}
      </span>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {' '}
        <button
          onClick={() =>
            dispatch({
              type: ACTIONS.TOGGLE_TODO,
              payload: { id: todo.id, name: todo.name },
            })
          }
        >
          Toggle
        </button>
        <button
          onClick={() =>
            dispatch({
              type: ACTIONS.DELETE_TODO,
              payload: { id: todo.id, name: todo.name },
            })
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
});
export default Todo;
