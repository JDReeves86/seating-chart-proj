import React from "react";

function Box({ input }) {
  return input.map((el) => {
    return (
      <div className="level py-6 mt-6">
        {el.map((el) => {
          return (
            <div className="level-item">
              <div className="box has-background-grey-light">{el.name}</div>
            </div>
          );
        })}
      </div>
    );
  });
}

export default Box;
