import React from 'react';
import './App.css';
import DayTime from './Components/DayTime';
import TodoList from './Components/TodoList';


function App() {
  return (
    <div className="app">
      <h1>Tasks2</h1>
      <DayTime />
      <TodoList />
    </div>
  );
}

export default App;