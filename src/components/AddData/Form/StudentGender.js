import React from "react";
import { useState } from "react";

function StudentGender(props) {
  const [Gender, setGender] = useState("Male");
  const assignGender = (event) => {
    setGender(event.target.value);
    props.newGender(event.target.value);
    //console.log(event.target.value);
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            value="Male"
            onChange={assignGender}
            checked={Gender === "Male"}
          />
          Male
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="Female"
            onChange={assignGender}
            checked={Gender === "Female"}
          />
          Female
        </label>
      </div>
      <div className="radio">
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
    </div>
  );
}

export default StudentGender;
