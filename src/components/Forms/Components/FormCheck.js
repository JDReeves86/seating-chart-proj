import React, { useState, useRef } from "react";

function FormCheck({ label, name, action }) {
  const [checked, setChecked] = useState(true);
  const checkboxEl = useRef(null)
  return (
    <div className="control">
      <label className="checkbox">
        <input
          type="checkbox"
          name={name}
          ref={checkboxEl}
          value={checked}
          checked={!checked}
          onChange={(event) => {
            setChecked(!checked);
            action(event);
          }}
        />
        {` ${label}`}
      </label>
    </div>
  );
}

export default FormCheck;
