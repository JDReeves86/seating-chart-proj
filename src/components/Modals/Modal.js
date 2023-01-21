import React, { useState } from "react";
import FormInput from "../Forms/Components/FormInput";

function Modal({ message, activate, action }) {
  const [isActive, setActive] = useState(activate);
  const [studentInput, setStudentInput] = useState('')
  const handleClick = (event) => {
    const { target } = event;
    const { value } = target
    if (value === "accept") {
      setActive(!isActive);
      action(!isActive, studentInput);
    }
    else {
      setActive(!isActive);
      action(!isActive);
    }
    
  };
  const active = isActive ? "is-active" : "";
  return (
    <div className={`modal ${active}`}>
      <div className="modal-background"></div>
      <div className="modal-content has-background-link-light p-4">
        <FormInput 
        label={'Student they cannot sit next to:'}
        name={'student'}
        type={'text'}
        action={(name) => {
          setStudentInput(name)
        }}
        />
        <button
          className="button is-normal is-success m-3"
          aria-label="close"
          value='accept'
          onClick={(event) => {
            handleClick(event);
          }}
        >Accept</button>
        <button
          className="button is-normal is-danger m-3"
          aria-label="close"
          value='cancel'
          onClick={(event) => {
            handleClick(event);
          }}
        >
          Close
        </button>
      </div>
      <button
        className="modal-close is-large is-danger"
        aria-label="close"
        onClick={() => {
          handleClick();
        }}
      ></button>
    </div>
  );
}

export default Modal;
