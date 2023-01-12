import React from "react";

function FormCheck({ label, name, value, action }) {
  return (
    <div className="control">
      <label className="checkbox">
        <input type="checkbox" name={name} value={value} onChange={action}/>
        {` ${label}`}
      </label>
    </div>
  );
}

export default FormCheck;
