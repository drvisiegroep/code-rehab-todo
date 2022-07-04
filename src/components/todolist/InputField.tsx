import React, { useRef } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    // functie returned niets, dus void
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    
    <form className="input"
      onSubmit={(e) => {
        handleAdd(e);
        // inputRef.current?.blur();
    }}
    >
          <TextField
              ref={inputRef}
              onChange={
                (e)=>setTodo(e.target.value)
              } 
              id="outlined-basic" 
              label="Todo" 
              variant="outlined" 
              className="input__textbox"
          />
          <Button variant="outlined" type="submit" className="input__submit">Opslaan</Button>
    </form>
    
  )
}

export default InputField