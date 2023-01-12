import React, { useState } from "react";
import FormInput from "./Components/FormInput";
import FormCheck from "./Components/FormCheck";
import Button from "../Button/Button";
import criteria from "../../data/criteria";

function StudentForm({action, roster}) {
  let [student, setStudent] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault()
    if (student.name === "") {
      return
    }
    action([...roster, student])
  }

  const handleChange = (event) => {
    const { target } = event
    const inputType = target.name
    const inputValue = target.value

    setStudent({ ...student, 
        [inputType]: inputValue
    })
    
  }
  return (
    <form>
      <FormInput
        label="Student name"
        name="name"
        type="text"
        placeholder="Enter a name"
        required={true}
        action={handleChange}
      />
      {criteria.map((el, i) => {
        return <FormCheck key={i} label={el} name={el} value={true} action={handleChange}/>;
      })}
      <Button attr="is-success" action={handleSubmit}>Add Student</Button>
    </form>
  );
}

export default StudentForm;
