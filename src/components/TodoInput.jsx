import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../store/slices/todosSlice';

function TodoInput() {
    const [todo, setTodo] = useState("");
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    function handleTodoChange(value){
        setTodo(value);        
    }

    function handleAddDispatch(){
        const todoItem = {
            id: todos.length + 1,
            title: todo,
            completed: false
        }    
        setTodo("");
        return dispatch(addTodo(todoItem));
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
          // Perform the desired action here
            const todoItem = {
                id: todos.length + 1,
                title: todo,
                completed: false
            }           
            setTodo("");
            dispatch(addTodo(todoItem));           
        }
    }

  return (
    <div className='container mt-3' style={{width: '650px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">Enter a todo: </span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e) => handleTodoChange(e.target.value)} onKeyDown={handleKeyDown} value={todo}/>
            <button className='btn btn-primary' type="submit" onClick={handleAddDispatch}>Add</button>
        </div>
        <div className='mt-2 list-group' style={{display: 'flex', justifyContent: 'center'}}>
            <ul >
                {todos.map((todo) => (
                    <li className='list-group-item' key={todo.id}>{todo.title}</li>                   
                ))}
            </ul>           
        </div>
    </div>
  )
}

export default TodoInput;