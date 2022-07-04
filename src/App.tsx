import React, { useState } from "react";
import InputField from './components/todolist/InputField';
import { Todo } from './model'

// 
//https://youtu.be/FJDVKeh7RJI?t=2440
const App: React.FC = () => {
    
    const [todo, setTodo] = useState<string>('');
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if(todo) {
            setTodos([...todos, { id: Date.now(), todo: todo, isDone: false}])
        }
        setTodo('');
    }

    return (
        <div className="App">
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
            {/* <TodoList /> */}
        </div>
    );
}

export default App;