import "./App.css";
import StudentDetails from "./components/Display/StudentDetails";
import Newstudent from "./components/AddData/NewStudent";
import React, { useState, useEffect } from "react";

function App() {
  const [DBStudents, DBaddNewStudents] = useState([]);
  const [updateStudent, setUpdateStudent] = useState({});
  const [studentData, setStudentUpdate] = useState({
    id: null,
    name: "",
    date: "",
    gender: "",
    classes: "",
    division: "",
  });

  const reloadList = () => {
    fetch("http://localhost:8080/getStudents", {
      method: "GET",
      headers: new Headers({ "content-type": "application/json" }),
    })
      .then((response) => response.json())
      .then((data) => {
        let temp = [...data];
        // temp.map((x) => (x.date = Date.parse(x.date)));
        //console.log("response");
        //console.log(...temp);

        DBaddNewStudents(temp);
      })
      .catch((error) => console.log(error));
  };

  const addStudent = () => {
    setStudentUpdate({
      id: null,
      name: "",
      date: "",
      gender: "",
      classes: "",
      division: "",
    });
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
      <h2>Student Project</h2>
      <div className="float-left">
        <Newstudent reloadList={reloadList} studentData={studentData} />
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
