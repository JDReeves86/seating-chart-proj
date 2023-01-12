import React from "react";

function FormCheck({ label, name }) {
    return ( 
        <div>
            <label className="label">{label}</label>
            <div className="control">
                <input type="checkbox" name={name}>{label}</input>
            </div>
        </div>
    )
}

export default FormCheck