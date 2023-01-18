import React from "react";
import Row from "../Row";

function Grid({ row, column, roster }) {
  return roster.map((el, i) => {
    if (i > column) {
      return;
    }
    return (
      <div className="columns">
        <Row row={row} name={el.name} roster={roster}/>
      </div>
    );
  });
}

export default Grid;
