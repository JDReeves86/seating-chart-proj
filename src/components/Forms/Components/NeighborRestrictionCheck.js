import React, { useState, useEffect } from "react";
import Modal from "../../Modals/Modal";

function NeighborRestrictionCheck({
  label,
  name,
  action,
  restrictions,
  isChecked,
}) {
  let [modalActive, setActive] = useState(false);
  console.log(modalActive)
  if (modalActive === true) {
    return <Modal activate={true} action={setActive}/>;
  }

  const handleChange = (event) => {
    const { target } = event;
    let { checked } = target;
    const neighborRestriction = {
      checked,
    };

    setActive(!modalActive);

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
