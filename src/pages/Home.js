import React, { useState } from "react";
import StudentForm from "../components/Forms/StudentForm";
import List from "../components/List/List";
import Grid from "../components/Grid/Grid";

function Home() {
  let [roster, setRoster] = useState([])

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <StudentForm action={setRoster} roster={roster}/>
        </div>
        <div className="column is-half">
          <List action={setRoster} students={roster} />
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-full">
          <Grid />
        </div>
      </div>
    </div>
  );
}

export default Home;
