import React, { useState, useEffect } from "react";
import Modal from "../../Modals/Modal";

function NeighborRestrictionCheck({
  label,
  name,
  action,
  restrictions,
  isChecked,
}) {
  let [modalActive, setActive] = useState(isChecked);
  let [modalInput, setModalInput] = useState("");

  let neighborRestriction = {
    restrictedStudent: modalInput,
  };

  if (modalActive === true) {
    return (
      <Modal
        activate={true}
        action={(active, student) => {
          setActive(active);
          setModalInput(student);
        }}
      />
    );
  }

  

  const handleChange = (event) => {
    const { target } = event;
    let { checked } = target;
    neighborRestriction = { ...neighborRestriction, checked };

    setActive(!isChecked);

    action({ ...restrictions, neighborRestriction }, checked);
  };

  return (
    <div className="control">
      <label className="checkbox">
        <input
          type="checkbox"
          name={name}
          checked={isChecked}
          onChange={handleChange}
        />
        {` ${label}`}
      </label>
    </div>
  );
}

export default NeighborRestrictionCheck;
