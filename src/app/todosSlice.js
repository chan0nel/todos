import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) ?? [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, {payload}) => {
        state.todos.push({ key: Date.now(), value: payload.value, completed: false});
        localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    remove: (state, {payload}) => {
        state.todos = state.todos.filter((el) => payload.key !== el.key);
        localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeComleted: (state) => {
      state.todos = state.todos.filter(el => !el.completed);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    clear: (state) => {
        state.todos = [];
        localStorage.clear();
    },
    toggle: (state, {payload}) => {
      state.todos.forEach((el, ind, arr) => arr[ind].completed = el.key === payload.key ? !el.completed : el.completed);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    }
}
});

export const { add, remove, removeComleted, clear, toggle } = todosSlice.actions;

export default todosSlice.reducer;
