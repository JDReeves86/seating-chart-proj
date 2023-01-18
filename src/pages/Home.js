import React, { useState } from "react";
import StudentForm from "../components/Forms/StudentForm";
import List from "../components/List/List";
import Grid from "../components/Grid/Grid";
import FormSelect from "../components/Forms/Components/FormSelect";
import Button from "../components/Button/Button";

function Home() {
  let [roster, setRoster] = useState([]);
  let [rows, setRows] = useState(1);
  let [columns, setColumns] = useState(1);

  const rosterToMatrix = (event) => {
    event.preventDefault();
    const copy = roster
    let matrix = [];

    while(copy.length) {
      matrix.push(copy.splice(0,columns))
    }
    console.log(matrix, copy)
  };

  return (
    <div className="container">
      <div className="section">
        <form>
          <div className="level">
            <div className="level-item">
              <FormSelect
                label="Rows"
                name="rows"
                options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                required={true}
                action={setRows}
              />
            </div>
            <div className="level-item">
              <FormSelect
                label="Columns"
                name="columns"
                options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                required={true}
                action={setColumns}
              />
            </div>
            <div className="level-item">
              <Button attr="is-warning" action={rosterToMatrix}>
                Make chart!
              </Button>
            </div>
          </div>
        </form>
      </div>
      <div className="columns">
        <div className="column is-half">
          <StudentForm action={setRoster} roster={roster} />
        </div>
        <div className="column is-half">
          <List action={setRoster} students={roster} />
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-full">
          {/* <Grid roster={roster} column={columns} row={rows} /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
