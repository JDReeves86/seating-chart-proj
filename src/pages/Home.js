import React, { useState } from "react";
import StudentForm from "../components/Forms/StudentForm";
import List from "../components/List/List";
import Box from "../components/Box";
import FormSelect from "../components/Forms/Components/FormSelect";
import Button from "../components/Button/Button";
import { setFrontRow, shuffle, moveNeighbors } from "../utils/utils"

// Delete this when going live
import criteria from "../data/criteria";

function Home() {
  let [roster, setRoster] = useState([]); // change initial state to empty array when live
  let [matrix, setMatrix] = useState([]);
  let [rows, setRows] = useState(1);

  const rosterToMatrix = async (event) => {
    event.preventDefault();
    const copy = await shuffle(roster)
    setRoster(copy)
    
    const frontRowArr = await setFrontRow(copy)
    setRoster(frontRowArr)
    
    const neighborArr = await moveNeighbors(frontRowArr)
    setRoster(neighborArr)
    const matrixArr = [...neighborArr]

    let matrixCopy = []
    while(matrixArr.length) {
      matrixCopy.push(matrixArr.splice(0, rows))
    }
    setMatrix(matrixCopy)
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
          <Box input={matrix}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
