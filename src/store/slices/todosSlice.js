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
        removeTodo: (state, action) => {
            state.todos.pop();
        }
    }
});

export const {addTodo, removeTodo} = todosSlice.actions;
export default todosSlice.reducer;