import React from 'react';
import { TodoListItem } from './TodoListItem';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}


// Dit is een waardeloze key
export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};