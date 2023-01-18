import React from "react";

function FormSelect({ label, name, options, required, action }) {
  const handleChange = (event) => {
    action(event.target.value)
  }
  return required ? (
    <div>
      <label className="label">{label}</label>
      <div className="control">
        <div className="select">
          <select name={name} required onChange={handleChange}>
            {options.map((el, i) => {
              return <option key={i}>{el}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <label className="label">{label}</label>
      <div className="control">
        <div className="select">
          <select name={name} onChange={handleChange}>
            {options.map((el, i) => {
              return <option key={i}>{el}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default FormSelect;
