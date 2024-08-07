// src/redux/reducers.js
import { ADD_TASK, DELETE_TASK, EDIT_TASK } from './actions'

const initialState = {
  tasks: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      }
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, name: action.payload.name } : task
        ),
      }
    default:
      return state
  }
}

export default rootReducer
