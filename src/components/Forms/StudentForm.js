import React, { useState, useEffect } from "react";
import FormInput from "./Components/FormInput";
import FormCheck from "./Components/FormCheck";
import Button from "../Button/Button";
import criteria from "../../data/criteria";

function StudentForm({ action, roster }) {
  let [student, setStudent] = useState({});
  let [studentName, setName] = useState("");
  let [boxes, setBoxes] = useState({});
  let [boxEls, setBoxEls] = useState([...criteria]);
  useEffect(() => {
    setBoxEls(
      boxEls.map((el) => {
        return el.split(" ").join("");
      })
    );
  }, []);

  console.log(boxes)

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // if (student === null || !student.name) {
    //   return;
    // }

    // if (student.NeighborRestriction === "true") {
    //   console.log("restriction activated");
    // }
    action([...roster, student]);
    // setStudent(null);
    setName("");
    for (const prop in boxes) {
      boxEls.map((el) => {
        if (prop === el) {
          console.log(Object.keys(boxes[prop]))
          boxes[prop].checked = false
        }
      })
    }
  };

  const handleChange = (event) => {
    const { target } = event;   
    const { value, name } = target;
    setBoxes({ ...boxes, [name]: event.target });

    let inputType = target.name;
    let inputValue = target.value;

    setStudent({
      studentName,
      restrictions: boxes,
    });
  };
  return (
    <form>
      <FormInput
        label="Student name"
        name="name"
        type="text"
        placeholder="Enter a name"
        required={true}
        action={setName}
        value={studentName}
      />
      {criteria.map((el, i) => {
        return (
          <FormCheck
            key={i}
            label={el}
            name={el.split(" ").join("")}
            action={handleChange}
          />
        );
      })}
      <Button attr="is-success" action={handleSubmit}>
        Add Student
      </Button>
    </form>
  );
}

export default StudentForm;
