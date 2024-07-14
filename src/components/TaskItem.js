import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, editTask } from '../redux/actions'
import { useState } from 'react'

const TaskItem = ({ task }) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [newTask, setNewTask] = useState(task.name)

  const handleDelete = () => {
    dispatch(deleteTask(task.id))
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    if (newTask.trim()) 
    {
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
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  )
}

export default TaskItem
