import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, toggleTodo } from '../store/slices/todosSlice';

function TodoList(props) {
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();
    const handleCheckboxChange = (todoId) => {
        dispatch(toggleTodo(todoId));
      };

  return (
    <ul>
        {todos.map((todo) => (
            <div key={todo.id} className='m-2' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className="form-check form-check-inline" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" checked={todo.completed} onChange={() => handleCheckboxChange(todo.id)}/>
                </div>
                <li key={todo.id} style={{width: '450px'}} className='list-group-item'>{todo.title}</li>
                <button className='btn btn-danger m-2' style={{width: '25px', height: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={() => dispatch(deleteTodo(todo.id))}><i className="bi bi-x-square"></i> </button>        
            </div>          
        ))}
    </ul> 
  )
}

export default TodoList