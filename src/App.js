import React from 'react';
import './App.css';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

function App() {
  return (
    <div className="App">
      <InputTodo></InputTodo>
      <ListTodos></ListTodos>
    </div>
  );
}

export default App;
