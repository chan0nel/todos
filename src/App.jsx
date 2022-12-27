import { observer } from 'mobx-react';
import React from 'react';
import './App.css';
import { InputTodo } from './components/InputTodo';
import { ListTodos } from './components/ListTodos';
import { TodoList } from './mobx/TodoListObservable';

const todos = new TodoList();

function App() {
  return (
    <div className="App">
      <InputTodo todos={todos}/>
      <ListTodos todos={todos}/>
    </div>
  );
}

export default observer(App);
