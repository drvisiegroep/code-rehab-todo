import React from 'react';
import { Checkbox } from '@mui/material';

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}
  
  export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
    return (
      <li>
        <label
          style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
        >
          <Checkbox 
            checked={todo.complete}
            onClick={() => {
              toggleTodo(todo);
            }}
          />{' '}
          {todo.text}
        </label>
      </li>
    );
  };