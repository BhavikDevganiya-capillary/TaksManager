import React, { useState } from "react";
import ButtonAtom from "../../Atoms/ButtonAtom";
import InputAtom from "../../Atoms/InputAtom";
import { connect } from "react-redux";
import { addSlide } from "../../Store/Actions/Actions";

const CreateSlides = ({ addSlide }) => {
  const [newSlide, setNewSlide] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newSlide !== "") {
      addSlide(newSlide);
      setNewSlide("");
    }
  };
  const handleInputChange = (e) => {
    setNewSlide(e.target.value);
  };
  return (
    <>
      <div className="pt-10 p-5">
        <form onSubmit={handleSubmit}>
          <div className="bg-white h-16 min-w-80 w-auto rounded-md flex justify-evenly pt-4">
            <InputAtom
              varient="default"
              value={newSlide}
              onChange={handleInputChange}
            />
            <ButtonAtom varient="default" text="Add Slide" />
          </div>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  addSlide: (newSlide) => dispatch(addSlide(newSlide)),
});

const ConnectedCreateSlide = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSlides);

export default ConnectedCreateSlide;
