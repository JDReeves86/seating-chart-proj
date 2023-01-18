import React from "react";

function Row({ roster, row, name }) {
  return roster.map((el, i) => {
    if (i > row) {
        return
    }
    return (
      <div className="column">
        <p className="has-background-primary has-text-centered">{name}</p>
      </div>
    );
  });
}

export default Row;
