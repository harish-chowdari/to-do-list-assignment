export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const EDIT_TASK = 'EDIT_TASK'

let nextTaskId = 0

export const addTask = (name) => ({
  type: ADD_TASK,
  payload: {
    id: ++nextTaskId,
    name,
  },
})

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
})

export const editTask = (id, name) => ({
  type: EDIT_TASK,
  payload: {
    id,
    name,
  },
})
