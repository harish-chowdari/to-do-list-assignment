import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'
import "./TaskList.css"


// TaskList component for displaying the list of tasks
const TaskList = () => {
  // useSelector hook to access the tasks from the Redux store
  const tasks = useSelector((state) => state.tasks)

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  )
}

export default TaskList
