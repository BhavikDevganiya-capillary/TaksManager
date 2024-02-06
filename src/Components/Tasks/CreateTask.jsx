import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../../Store/Actions/Actions";
import InputAtom from "../../Atoms/InputAtom";
import ButtonAtom from "../../Atoms/ButtonAtom";

const CreateTask = ({ slideIndex, addTask }) => {
  const [newTask, setNewTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask !== "") {
      addTask(slideIndex, newTask);
      setNewTask("");
    }
  };
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="bg-white h-16 min-w-80 w-auto rounded-md flex justify-evenly pt-4">
            <InputAtom
              varient="default"
              value={newTask}
              onChange={handleInputChange}
            />
            <ButtonAtom varient="default" text="Add Task" />
          </div>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  addTask: (slideIndex, newTask) => dispatch(addTask(slideIndex, newTask)),
});

const ConnectedTask = connect(mapStateToProps, mapDispatchToProps)(CreateTask);

export default ConnectedTask;
