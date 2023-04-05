import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        { id: 1, title: 'Learn TypeScript', completed: false },
        { id: 2, title: 'Build a React app', completed: true },
    ]
}

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action) => {
            const todoId = action.payload;
            const index = state.todos.findIndex((todo) => todo.id === todoId);
            if (index !== -1) {
              state.todos.splice(index, 1);
            }
          },
        toggleTodo: (state, action) => {
            const todoId = action.payload;
            const todo = state.todos.find((todo) => todo.id === todoId);
            if (todo) {
              todo.completed = !todo.completed;
            }
            console.log(todo.completed)
          },
    }
});

export const {addTodo, deleteTodo, toggleTodo} = todosSlice.actions;
export default todosSlice.reducer;