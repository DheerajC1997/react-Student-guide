import React from "react";
import { useState } from "react";

function StudentClasses(props) {
  const [classes, setClasses] = useState("");
  const assignClasses = (event) => {
    setClasses(event.target.value);
    props.newClasses(event.target.value);
  };

  return (
    <div>
      <div>
        <label>Class</label>
        <select value={classes} defaultValue="" onChange={assignClasses}>
          <option value="">select</option>
          <option value="I">I</option>
          <option value="II">II</option>
          <option value="III">III</option>
          <option value="IV">IV</option>
          <option value="V">V</option>
          <option value="VI">VI</option>
          <option value="VII">VII</option>
          <option value="VIII">VIII</option>
          <option value="IX">IX</option>
          <option value="X">X</option>
          <option value="XI">XI</option>
          <option value="XII">XII</option>
        </select>
      </div>
    </div>
  );
}

export default StudentClasses;
