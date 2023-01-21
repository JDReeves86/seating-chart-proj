import React, { useState } from "react";
import FormInput from '../Forms/Components/FormInput'

function Modal({ message, activate, action }) {
  const [isActive, setActive] = useState(activate);
  const [restrictedStudent, setRestrictedStudent] = useState()
  const handleClick = () => {
    
    setActive(!isActive);
    action(restrictedStudent, !isActive);
  };
  const active = isActive ? "is-active" : "";
  return (
    <div className={`modal ${active}`}>
      <div className="modal-background"></div>
      <div className="modal-content has-background-link-light p-4">
        <FormInput 
        label={"Who cannot sit next to this student?"}
        name={"restrStudent"}
        action={setRestrictedStudent}
        />
        <button
          className="button is-normal is-success m-3"
          aria-label="close"
          value='accept'
          onClick={() => {
            handleClick();
          }}
        >
          Accept
        </button>
        <button
          className="button is-normal is-danger m-3"
          aria-label="close"
          onClick={() => {
            handleClick();
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
