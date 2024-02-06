import generateUniqueId from "../../Utils/utils";
import {
  ADD_SLIDE,
  ADD_TASK,
  DELETE_ALL_TASK_OF_SLIDE,
  DELETE_SLIDE,
  DELETE_TASK,
  EDIT_TASK,
} from "../Constants/Constants";
import { slideInitialState, taskInitialState } from "../States/States";

export const slideReducer = (state = slideInitialState, action) => {
  switch (action.type) {
    case ADD_SLIDE:
      return {
        ...state,
        slideName: [
          ...state.slideName,
          {
            index: generateUniqueId(),
            name: action.payload,
          },
        ],
      };
    case DELETE_SLIDE:
      var { slideIndex } = action.payload;
      console.log(slideIndex);
      var updatedSlide = state.slideName.filter(
        (slide) => !(slide.index === slideIndex)
      );
      return {
        ...state,
        slideName: updatedSlide,
      };
    default:
      return state;
  }
};

export const taskReducer = (state = taskInitialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskName: [
          ...state.taskName,
          {
            index: generateUniqueId(),
            slideIndex: action.payload.slideIndex,
            name: action.payload.taskName,
          },
        ],
      };
    case DELETE_TASK:
      var { taskIndex, slideIndex } = action.payload;
      var updatedTask = state.taskName.filter(
        (task) => !(task.index === taskIndex && task.slideIndex === slideIndex)
      );
      return {
        ...state,
        taskName: updatedTask,
      };
    case DELETE_ALL_TASK_OF_SLIDE:
      var { slideIndex } = action.payload;
      var updatedTask = state.taskName.filter(
        (task) => !(task.slideIndex === slideIndex)
      );
      return {
        ...state,
        taskName: updatedTask,
      };
    case EDIT_TASK:
      var { taskIndex, newTaskName } = action.payload;
      var updatedTasks = state.taskName.map((task) =>
        task.index === taskIndex ? { ...task, name: newTaskName } : task
      );
      return {
        ...state,
        taskName: updatedTasks,
      };
    default:
      return state;
  }
};
