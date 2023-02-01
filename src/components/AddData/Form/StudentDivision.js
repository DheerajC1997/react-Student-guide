import React from "react";
import { useState } from "react";

function StudentDivision(props) {
  const [division, setDivision] = useState("");

  const assignDivision = (event) => {
    setDivision(event.target.value);
    props.newDivision(event.target.value);
  };

  return (
    <div style={{ width: "45%" }}>
      <div className="new-student__control">
        <label>Division</label>
        <select
          style={{ width: "45%", padding: "5px" }}
          value={division}
          onChange={assignDivision}
        >
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
