import React from "react";
import { useState } from "react";

function StudentGender(props) {
  const [Gender, setGender] = useState("");
  const assignGender = (event) => {
    setGender(event.target.value);
    props.newGender(event.target.value);
    //console.log(event.target.value);
  };

  return (
    <div style={{ width: "45%" }} className="radio newstudentgender">
      Gender
      <ul style={{ "list-style-type": "none" }}>
        <li>
          <label>
            <input
              type="radio"
              value="Male"
              onChange={assignGender}
              checked={Gender === "Male"}
            />
            Male
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              value="Female"
              onChange={assignGender}
              checked={Gender === "Female"}
            />
            Female
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              value="Other"
              onChange={assignGender}
              checked={Gender === "Other"}
            />
            Other
          </label>
        </li>
      </ul>
    </div>
  );
}

export default StudentGender;
