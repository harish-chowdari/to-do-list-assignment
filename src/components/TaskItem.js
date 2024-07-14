import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, editTask } from '../redux/actions'
import './TaskItem.css'


// TaskItem component for displaying individual tasks
const TaskItem = ({ task }) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [newTask, setNewTask] = useState(task.name)

  // Handle delete action
  const handleDelete = () => {
    dispatch(deleteTask(task.id))
  }

  // Handle edit action
  const handleEdit = () => {
    setIsEditing(true)
  }

  // Handle save action
  const handleSave = () => {
    if (newTask.trim()) {
      dispatch(editTask(task.id, newTask))
      setIsEditing(false)
    }
  }

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {task.name}
          <div>
            <button onClick={handleEdit}>Edit</button>
            <button className="delete-button" onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </li>
  )
}

export default TaskItem
