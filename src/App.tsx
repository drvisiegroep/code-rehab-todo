import React, { useState, useEffect } from 'react';
import { db } from './db/firebase.js';
import { set, ref, onValue, remove, update } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';

function App() {

  
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<any[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [tempUUID, setTempUUID] = useState<string>('')

  const handleTodoChange=(e: { target: { value: React.SetStateAction<string>; }; })=>{
    setTodo(e.target.value)
  }
  
  useEffect(() => {
    
    onValue(ref(db), (snapshot) => {
      setTodos([])
      const data = snapshot.val();
      if(data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo])
        })
      }
    })
  },[])


  const writeToDatabase = () => {
    const uuid = uuidv4();
    console.log(uuid)
    set(ref(db, `/${uuid}`), {
      todo,
      uuid,
    })
    setTodo('');
  }

  const handleUpdate = (todo: { uuid: string; todo: string; }) => {
    setIsEdit(true)
    setTempUUID(todo.uuid)
    setTodo(todo.todo)
  }

  const handleSubmitChange = () => {
    update(ref(db, `/${tempUUID}`) , {
      todo,
      uuid: tempUUID,
    })
    setTodo('')
    setIsEdit(false)
  }

  const handleDelete = (todo: { uuid: string; }) => {
    remove(ref(db, `/${todo.uuid}`));
  }


  return (
    <div className="todo">
    <input type="text" value ={todo} onChange={handleTodoChange}/>
    {isEdit ? (
      <>
      <button onClick={handleSubmitChange}>submit change</button>
      <button onClick={() => {
        setIsEdit(false);
        setTodo('');
      }}>X</button>
      </>
    ) : (
      <button onClick={writeToDatabase}>submit</button>
    )}
    
    {todos.map((todo) => (
      <>
        <p>{todo.todo}</p>
        <button onClick={() => handleUpdate(todo)}>Update</button>
        <button onClick={() => handleDelete(todo)}>Delete</button>
      </>
    ))}
    </div>
  );
}

export default App;