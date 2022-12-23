import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) ?? [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action) => {
        state.todos.push(
          {key: Date.now(), value: action.payload.value, completed: false});
        localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    remove: (state, action) => {
        state.todos = state.todos.filter(
            el => action.payload.key !== el.key);
        localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeComleted: (state) => {
      state.todos = state.todos.filter(
        el => !el.completed);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    clear: (state) => {
        state.todos = [];
        localStorage.clear();
    },
    toggle: (state, action) => {
      state.todos = state.todos.map(el => {
        if(el.key === action.payload.key) el.completed = !el.completed;
        return el;});
      localStorage.setItem("todos", JSON.stringify(state.todos));
    }
}
});

export const { add, remove, removeComleted, clear, toggle } = todosSlice.actions;

export default todosSlice.reducer;
