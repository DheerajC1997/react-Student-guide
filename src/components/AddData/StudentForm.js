import "./StudentForm.css";
import StudentGender from "./Form/StudentGender";
import React, { useState } from "react";
import StudentDivision from "./Form/StudentDivision";
import StudentClasses from "./Form/StudentClasses";

function StudentForm(props) {
  // use states
  const [id, setNewid] = useState(null);
  const [name, setNewName] = useState("");
  const [date, setNewDate] = useState("");
  const [gender, setNewGender] = useState("");
  const [division, setDivision] = useState("");
  const [classes, setClasses] = useState("");
  const [errorMessage, errorFunction] = useState("");
  const [studentDatas, setStudentDatas] = useState([]);
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
      fetch("http://localhost:8080/addStudent/", {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify({
          id: id,
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

          if (data === "Sucess") {
            setNewName("");
            setNewDate("");
            // setNewGender("");
            //setClasses("");
            // setDivision("");
            props.addStudent(studentData);
          }
        });

      //add value to parent ,not necassary
      // commant to send value to parent
    } else {
      errorFunction(errorM);
    }
  };
  const deleteData = () => {
    setNewName("");
    setNewDate("");
  };

  console.log(id);
  //setNewid(props.studentData2.id);

  //console.log(props.studentData2);
  // setNewid(props.studentData2.id);
  // setNewDate(props.studentData2.Date);
  // setNewGender(props.studentData2.gender);
  // setNewName(props.studentData2.name);
  //setDivision(props.studentData2.division);
  //setClasses(props.studentData2.classes);

  return (
    <form onSubmit={submitHandler}>
      <div className="new-student__controls">
        <div>
          {" "}
          <input type="hidden" value={id} />
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
        <StudentClasses newClasses={newSetClasses}></StudentClasses>
        <StudentDivision newDivision={newSetDivision}></StudentDivision>
        <StudentGender newGender={newSetGender}></StudentGender>
      </div>

      <div className="new-student__actions ">
        <button type="button" onClick={deleteData}>
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
      <div>{errorMessage}</div>
    </form>
  );
}

export default StudentForm;
