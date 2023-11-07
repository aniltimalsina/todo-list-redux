import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        { id: 1, title: "Todo 1", isCompleted: false },
        { id: 2, title: "Todo 2", isCompleted: false },
        { id: 3, title: "Todo 3", isCompleted: true },
        { id: 4, title: "Todo 4", isCompleted: false },
    ],
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: new Date(),
                title: action.payload.title,
                isCompleted: false,
            };
            state.unshift(todo);
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) =>
                todo.id !== action.payload.id
            )
        },
        editTodo: (state, action) => {
            const { id, title } = action.payload;
            const todoToEdit = state.find(todo => todo.id === id);
            if (todoToEdit) {
                todoToEdit.title = title;
            }
        },
    }

});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;