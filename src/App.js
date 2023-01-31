import "./App.css";
import StudentDetails from "./components/Display/StudentDetails";
import Newstudent from "./components/AddData/NewStudent";
import React, { useState, useEffect } from "react";

function App() {
  const [DBStudents, DBaddNewStudents] = useState([]);
  const [updateStudent, setUpdateStudent] = useState([]);
  const [studentUpdate, setStudentUpdate] = useState([]);

  const reloadList = () => {
    fetch("http://localhost:8080/getStudents", {
      method: "GET",
      headers: new Headers({ "content-type": "application/json" }),
    })
      .then((response) => response.json())
      .then((data) => {
        let temp = [...data];
        temp.map((x) => (x.date = new Date(2019, 5, 12)));
        //console.log("response");
        //console.log(...temp);

        DBaddNewStudents(temp);
      })
      .catch((error) => console.log(error));
  };

  const addStudent = (values) => {
    console.log(values);
    reloadList();
  };
  const deleteDetails = () => {
    reloadList();
  };

  useEffect(() => {
    reloadList();
  }, []);
  //update
  const updateDetailes = (values) => {
    //setUpdateStudent(values);
    //studentUpdate = values;

    setStudentUpdate(values);
  };

  // console.log(studentUpdate);

  return (
    <div className="App">
      <h2>heading</h2>
      <div className="float-left">
        <Newstudent
          addStudentDetails={addStudent}
          studentData={studentUpdate}
        />
      </div>
      <div className="float-right">
        <StudentDetails
          items={DBStudents}
          deleteDetails1={deleteDetails}
          updateDetailes1={updateDetailes}
        />
      </div>
    </div>
  );
}

export default App;
