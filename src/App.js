import React from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import './App.css'

// App component to render the To-Do list application
const App = () => {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskInput />
      <TaskList />
    </div>
  )
}

export default App
