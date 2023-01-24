import React from "react";

function FrontRowCheck({
  label,
  name,
  action,
  restrictions,
  isChecked,
}) {
  const handleChange = (event) => {
    const { target } = event;
    let { checked } = target;
    action({ ...restrictions, frontRow: checked }, checked)
  };

  console.log(restrictions)
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

export default FrontRowCheck;
