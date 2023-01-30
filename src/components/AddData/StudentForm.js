import "./StudentForm.css";
import StudentGender from "./Form/StudentGender";
import React, { useEffect, useState } from "react";
import StudentDivision from "./Form/StudentDivision";
import StudentClasses from "./Form/StudentClasses";

function StudentForm(props) {
  // use states
  const [name, setNewName] = useState("");
  const [date, setNewDate] = useState("");
  const [gender, setNewGender] = useState("");
  const [division, setDivision] = useState("");
  const [classes, setClasses] = useState("");
  const [errorMessage, errorFunction] = useState("");
  // use state function
  const newSetName = (event) => {
    setNewName(event.target.value);
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
      id: Math.random().toString(),
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
      errorM = errorM + ". error in Name .";
      //console.log("A1");
    }
    if (date.trim().length === 0) {
      haserror = true;
      errorM = errorM + ". error in Date .";
      //console.log("A2");
    }
    if (gender.trim().length === 0) {
      haserror = true;
      errorM = errorM + ". error in Gender.";
      //console.log("A3");
    }
    if (classes.trim().length === 0) {
      haserror = true;
      errorM = errorM + ". error in Class .";
      //console.log("A4");
    }
    if (division.trim().length === 0) {
      haserror = true;
      errorM = errorM + ". error in Division .";
      //console.log("A5");
    }
    if (!haserror) {
      //updating value to mysql
      fetch("http://localhost:8080/addStudent", {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify({
          name: name,
          date: new Date(date),
          classes: classes,
          division: division,
          gender: gender,
        }),
      });

      //add value to parent ,not necassary
      props.addStudent(studentData);
      // commant to send value to parent
      setNewName("");
      setNewDate("");
      setNewGender("");
      setClasses("");
      setDivision("");
      errorFunction("Updated the values");
    } else {
      errorFunction(errorM);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-student__controls">
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
        <StudentClasses newClasses={newSetClasses}></StudentClasses>
        <StudentDivision newDivision={newSetDivision}></StudentDivision>
        <StudentGender newGender={newSetGender}></StudentGender>
      </div>

      <div className="new-student__actions ">
        <button type="button">Cancel</button>
        <button type="submit">Add expense</button>
      </div>
      <div>{errorMessage}</div>
    </form>
  );
}

export default StudentForm;
