import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
    const [text, setText] = useState('');
  
    return (
      <form>
        <TextField
          size="small"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button
        variant="outlined"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            addTodo(text);
            setText('');
          }}
        >
          Add Todo
        </Button>
      </form>
    );
  };