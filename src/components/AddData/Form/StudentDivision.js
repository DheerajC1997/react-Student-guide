import React from "react";
import { useState } from "react";

function StudentDivision(props) {
  const [division, setDivision] = useState("");

  const assignDivision = (event) => {
    setDivision(event.target.value);
    props.newDivision(event.target.value);
  };

  return (
    <div>
      <div className="new-student__control">
        <label>Division</label>
        <select value={division} onChange={assignDivision}>
          <option value="">select</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </div>
    </div>
  );
}

export default StudentDivision;
