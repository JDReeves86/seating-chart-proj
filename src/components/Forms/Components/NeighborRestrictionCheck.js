import React from "react";

function NeighborRestrictionCheck({
  label,
  name,
  action,
  restrictions,
  isChecked,
}) {
  const handleChange = (event) => {
    const { target } = event;
    let { checked } = target;
    const neighborRestriction = {
      checked,
    };
    action({ ...restrictions, neighborRestriction }, checked)
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
