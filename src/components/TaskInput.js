import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../redux/actions"
import "./TaskInput.css"


// TaskInput component for adding new tasks
const TaskInput = () => {
  // State to hold the current input value
  const [task, setTask] = useState("")
  
  // useDispatch hook to dispatch actions to the Redux store
  const dispatch = useDispatch()

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault() // Prevent the default form submission behavior
    if (task.trim()) 
    { // Check if the task is not empty or whitespace
      dispatch(addTask(task)) // Dispatch the addTask action with the task name
      setTask("") // Clear the input field
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskInput
