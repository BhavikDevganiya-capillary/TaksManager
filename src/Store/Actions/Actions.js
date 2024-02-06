import {
  ADD_SLIDE,
  ADD_TASK,
  DELETE_ALL_TASK_OF_SLIDE,
  DELETE_SLIDE,
  DELETE_TASK,
  EDIT_TASK,
} from "../Constants/Constants";

export const addSlide = (slideName) => ({
  type: ADD_SLIDE,
  payload: slideName,
});

export const deleteSlide = (slideIndex) => ({
  type: DELETE_SLIDE,
  payload: { slideIndex },
});

// Task's Related Actions ------------------------------------
export const addTask = (slideIndex, taskName) => ({
  type: ADD_TASK,
  payload: {
    slideIndex,
    taskName,
  },
});

export const deleteTask = (taskIndex, slideIndex) => ({
  type: DELETE_TASK,
  payload: {
    taskIndex,
    slideIndex,
  },
});

export const editTask = (taskIndex, newTaskName) => ({
  type: EDIT_TASK,
  payload: {
    taskIndex,
    newTaskName,
  },
});

export const deleteSlideTasks = (slideIndex) => ({
  type: DELETE_ALL_TASK_OF_SLIDE,
  payload: { slideIndex },
});
