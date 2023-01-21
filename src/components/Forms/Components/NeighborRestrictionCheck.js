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
  let [check, setCheck] = useState()

  useEffect(() => {
    action({ ...restrictions, neighborRestriction }, check)
  }, [modalInput])

  let neighborRestriction = {
    restrictedStudent: modalInput,
  };

  if (modalActive === true) {
    return (
      <Modal
        activate={true}
        action={(student, active) => {
          setModalInput(student);
          setActive(active);
        }}
      />
    );
  }

  const handleChange = (event) => {
    const { target } = event;
    let { checked } = target;
    const neighborRestriction = {
      checked,
    };

    setActive(!modalActive);
    setCheck(checked)
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
