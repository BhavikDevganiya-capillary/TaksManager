import React, { useEffect, useRef, useState } from "react";
import CreateTask from "../Tasks/CreateTask";
import { Check, Edit3, Trash } from "react-feather";
import { connect } from "react-redux";
import {
  deleteSlide,
  deleteSlideTasks,
  deleteTask,
  editTask,
} from "../../Store/Actions/Actions";
import CreateSlides from "./CreateSlides";

const Slides = ({
  slideNames,
  taskNames,
  deleteSlide,
  deleteSlideTasks,
  deleteTask,
  editTask,
}) => {
  const inputRef = useRef(null);
  const [editTaskIndex, setEditTaskIndex] = useState(null);
  const [newTaskName, setNewTaskName] = useState("");

  const handleDeleteTask = (index, slideIndex) => {
    deleteTask(index, slideIndex);
  };

  const onDeleteSlide = (index) => {
    deleteSlide(index);
    deleteSlideTasks(index);
  };
  const handleEditOnTask = (index) => {
    setEditTaskIndex(index);
    setNewTaskName(taskNames.find((task) => task.index === index)?.name || "");
  };

  useEffect(() => {
    if (editTaskIndex !== null) {
      inputRef.current.focus();
    }
  }, [editTaskIndex]);

  const handleEditTask = (index) => {
    editTask(index, newTaskName);
    setNewTaskName("");
    setEditTaskIndex(null);
  };

  const handleNewTaskName = (e) => {
    setNewTaskName(e.target.value);
  };
  return (
    <>
      {slideNames && slideNames.length > 0 && (
        <div className="pt-10 flex">
          {slideNames.map((slide) => (
            <>
              <div key={slide.index} className="flex-row ml-5 rounded-md">
                <div className="flex-1 w-80 rounded-md">
                  <div className="font-bold h-9 bg-black rounded-md text-lg text-white flex justify-evenly items-center">
                    <div className="uppercase">{slide.name}</div>
                    <button
                      className="ml-16"
                      onClick={() => onDeleteSlide(slide.index)}
                    >
                      <Trash size={20} />
                    </button>
                  </div>
                  <CreateTask slideIndex={slide.index} />
                </div>
                <div className="flex-col bg-slate-500 rounded-md max-w-80 text-white">
                  {taskNames
                    .filter((task) => task.slideIndex === slide.index)
                    .map((task) => (
                      <div
                        key={task.index}
                        className="min-h-10 flex justify-evenly items-center"
                      >
                        {editTaskIndex === task.index ? (
                          <>
                            <div className="w-9/12 flex flex-nowrap">
                              <input
                                className="bg-transparent border-none focus:outline-none"
                                type="text"
                                value={newTaskName}
                                onChange={handleNewTaskName}
                                ref={inputRef}
                              />
                            </div>

                            <button
                              className="flex items-end"
                              onClick={() => handleEditTask(task.index)}
                            >
                              <Check />
                            </button>
                          </>
                        ) : (
                          <>
                            <div className="w-9/12 flex flex-nowrap">
                              {task.name}
                            </div>
                            <button
                              className="flex items-end"
                              onClick={() =>
                                handleDeleteTask(task.index, task.slideIndex)
                              }
                            >
                              <Trash />
                            </button>
                            <button
                              className="flex items-end"
                              onClick={() => handleEditOnTask(task.index)}
                            >
                              <Edit3 />
                            </button>
                          </>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </>
          ))}
        </div>
      )}
      <CreateSlides />
    </>
  );
};

const mapStateToProps = (state) => ({
  slideNames: state.Slides?.slideName,
  taskNames: state.Tasks?.taskName,
});

const mapDispatchToProps = (dispatch) => ({
  deleteSlide: (index) => dispatch(deleteSlide(index)),
  deleteSlideTasks: (index) => dispatch(deleteSlideTasks(index)),
  deleteTask: (index, slideIndex) => dispatch(deleteTask(index, slideIndex)),
  editTask: (taskIndex, newTaskName) =>
    dispatch(editTask(taskIndex, newTaskName)),
});
const ConnectedSlide = connect(mapStateToProps, mapDispatchToProps)(Slides);

export default ConnectedSlide;
