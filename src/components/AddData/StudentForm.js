import "./StudentForm.css";
import StudentGender from "./Form/StudentGender";
import React, { useState } from "react";
import StudentDivision from "./Form/StudentDivision";
import StudentClasses from "./Form/StudentClasses";

function StudentForm(props) {
  // use states

  const [id, setNewid] = useState(props.studentData.id);
  const [name, setNewName] = useState(props.studentData.name);
  const [date, setNewDate] = useState(props.studentData.date);
  const [gender, setNewGender] = useState(props.studentData.gender);
  const [division, setDivision] = useState(props.studentData.division);
  const [classes, setClasses] = useState(props.studentData.classes);
  const [errorMessage, errorFunction] = useState("");

  // use state function
  const newSetName = (event) => {
    setNewName(event.target.value.trim());
  };
  const newSetDate = (event) => {
    setNewDate(event.target.value);
  };
  const newSetGender = (value) => {
    setNewGender(value);
  };
  const newSetDivision = (value) => {
    setDivision(value);
  };
  const newSetClasses = (value) => {
    setClasses(value);
  };
  // Validation
  const submitHandler = (event) => {
    event.preventDefault();
    const studentData = {
      name: name,
      date: new Date(date),
      gender: gender,
      classes: classes,
      division: division,
    };

    let haserror = false;
    let errorM = "";
    errorFunction("");
    // Checking error one by one instead of using "or"
    if (name.trim().length === 0) {
      haserror = true;
      errorM = errorM + " Error in Name ";
      //console.log("A1");
    }
    if (date.trim().length === 0) {
      haserror = true;
      errorM = errorM + " Error in Date ";
      //console.log("A2");
    }
    if (gender.trim().length === 0) {
      haserror = true;
      errorM = errorM + " Error in Gender";
      //console.log("A3");
    }
    if (classes.trim().length === 0) {
      haserror = true;
      errorM = errorM + " Error in Class ";
      //console.log("A4");
    }
    if (division.trim().length === 0) {
      haserror = true;
      errorM = errorM + " Error in Division ";
      //console.log("A5");
    }
    if (!haserror) {
      //updating value to mysql
      fetch("http://localhost:8080/addStudent/", {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify({
          id: props.studentData.id,
          name: name,
          date: new Date(date),
          classes: classes,
          division: division,
          gender: gender,
        }),
      })
        .then((data) => data.text())
        .then((data) => {
          errorFunction(data);

          if (data === "Sucess" || data === "Updated") {
            setNewName("");
            setNewDate("");
            // setNewGender("");
            //setClasses("");
            // setDivision("");
            props.reloadList();
          }
        });

      //add value to parent ,not necassary
      // commant to send value to parent
    } else {
      errorFunction(errorM);
    }
  };
  const clearData = () => {
    setNewName("");
    setNewDate("");
    props.reloadList();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-student__controls">
        <div>
          <input type="hidden" defaultValue={props.studentData.id} />
        </div>
        <div className="new-student__control">
          <label>Name</label>
          <input
            type="text"
            value={name}
            pattern="[a-zA-Z\s]*"
            onChange={newSetName}
          ></input>
        </div>
        <div className="new-student__control">
          <label>Date</label>
          <input
            type="date"
            min="1975-01-01"
            max="2025-12-31"
            value={date}
            onChange={newSetDate}
          ></input>
        </div>
        <StudentClasses
          newClasses={newSetClasses}
          defaultClasses={props.studentData.classes}
        ></StudentClasses>
        <StudentDivision
          newDivision={newSetDivision}
          defaultDivision={props.studentData.division}
        ></StudentDivision>
        <StudentGender
          newGender={newSetGender}
          defaultGender={props.studentData.gender}
        ></StudentGender>
      </div>

      <div className="new-student__actions ">
        <button type="button" onClick={clearData}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
      <div>{errorMessage}</div>
    </form>
  );
}

export default StudentForm;
