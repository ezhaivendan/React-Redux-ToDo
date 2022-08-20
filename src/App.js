import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './Components/ToDoList';
import AddItem from './AddItem';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
          /* Adding Items*/
          <AddItem />
          <ToDoList />
      </header>
    </div>
  );
}

export default App;
