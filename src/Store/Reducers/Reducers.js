import generateUniqueId from "../../Utils/utils";
import {
  ADD_SLIDE,
  ADD_TASK,
  DELETE_ALL_TASK_OF_SLIDE,
  DELETE_SLIDE,
  DELETE_TASK,
  EDIT_TASK,
  FETCH_DATA_FAIL,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "../Constants/Constants";
import {
  productInitialState,
  slideInitialState,
  taskInitialState,
} from "../States/States";

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

export const productReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      var { data } = action.payload;
      return {
        ...state,
        product: data,
        loading: false,
      };
    case FETCH_DATA_FAIL:
      var { error } = action.payload;
      return {
        ...state,
        loading: false,
        error: error,
      };
    default:
      return state;
  }
};
