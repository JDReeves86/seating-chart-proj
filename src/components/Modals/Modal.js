import React, { useState } from "react";

function Modal({ message, activate, action }) {
  const [isActive, setActive] = useState(activate);
  console.log(isActive);
  const handleClick = () => {
    setActive(!isActive);
    action(!isActive);
  };
  const active = isActive ? "is-active" : "";
  return (
    <div className={`modal ${active}`}>
      <div className="modal-background"></div>
      <div className="modal-content has-background-link-light p-4">
        <p className="is-size-5 has-text-centered">
          Input student name here in progress
        </p>
        <button
          className="button is-normal is-danger"
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
