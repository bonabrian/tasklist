import React from 'react';
import TaskListContextProvider from './contexts/TaskListContext'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="wrapper">
          <Header/>
          <div className="main">
            <TaskForm/>
            <TaskList/>
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
