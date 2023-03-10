import React, { useState, useEffect } from "react";
import FormInput from "./Components/FormInput";
import Button from "../Button/Button";
import FrontRowCheck from "./Components/FrontRowCheck";
import NeighborRestrictionCheck from "./Components/NeighborRestrictionCheck";
import { removeSpacesToLowerCase } from "../../utils/utils";

function StudentForm({ action, roster }) {
  let [student, setStudent] = useState({});
  let [studentName, setName] = useState("");
  let [studentRestrictions, setStudentRestrictions] = useState({});
  let [frontRowChecked, setFrontRowCheck] = useState();
  let [neighborRestrictChecked, setNeighborRestrictCheck] = useState();

  useEffect(() => {
    setStudent({
      name: removeSpacesToLowerCase(studentName),
      restrictions: studentRestrictions
    })
  }, [studentName, studentRestrictions])

  const handleSubmit = (event) => {
    event.preventDefault();

    if (student === null || !studentName) {
      return;
    }
  
    action([...roster, student]);
    setStudent(null);
    setName("");
    setStudentRestrictions({});
    setFrontRowCheck(false);
    setNeighborRestrictCheck(false);
  };

  return (
    <form>
      <FormInput
        label="Student name"
        name="name"
        type="text"
        placeholder="Enter a name"
        required={true}
        action={(name) => {
          setName(name);
        }}
        value={studentName}
      />
      <FrontRowCheck
        label="Front Row Only"
        name="frontrow"
        action={(restriction, check) => {
          setStudentRestrictions(restriction);
          setFrontRowCheck(check)
        }}
        restrictions={studentRestrictions}
        isChecked={frontRowChecked}
      />
      <NeighborRestrictionCheck
        label="Neighbor Restriction"
        name="neighborRestrict"
        action ={(restriction, check) => {
          setStudentRestrictions(restriction);
          setNeighborRestrictCheck(check)
        }}
        restrictions={studentRestrictions}
        isChecked={neighborRestrictChecked}
      />
      <Button attr="is-success" action={handleSubmit}>
        Add Student
      </Button>
    </form>
  );
}

export default StudentForm;
