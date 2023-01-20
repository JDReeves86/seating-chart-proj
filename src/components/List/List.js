import React from "react";
import Button from "../Button/Button";

function List({ students, action }) {
  return (
    <ol>
      {students.map((el, i) => {
        return (
          <li key={i}>
            <Button
              attr="is-small is-ghost"
              action={() => {
                console.log(el.name)
                const removedStudent = students.findIndex(x => x.name === el.name)
                students.splice(removedStudent, 1)
                action([...students])
                
              }}
            >
              <span className="icon is-small has-text-danger">
                <i className="fas fa-trash"></i>
              </span>
            </Button>
            {el.name}
          </li>
        );
      })}
    </ol>
  );
}

export default List;
