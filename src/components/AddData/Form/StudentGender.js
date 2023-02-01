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
    <div className="radio newstudentgender">
      <label>
        <input
          type="radio"
          value="Male"
          onChange={assignGender}
          checked={Gender === "Male"}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          value="Female"
          onChange={assignGender}
          checked={Gender === "Female"}
        />
        Female
      </label>

      <label>
        <input
          type="radio"
          value="Other"
          onChange={assignGender}
          checked={Gender === "Other"}
        />
        Other
      </label>
    </div>
  );
}

export default StudentGender;
