import "./App.css";
import StudentDetails from "./components/Display/StudentDetails";
import Newstudent from "./components/AddData/NewStudent";
import React, { useState, useEffect } from "react";

function App() {
  const [UIStudent, UIaddNewStudent] = useState([]);
  const [DBStudents, DBaddNewStudents] = useState([]);
  const [reloadStudents, setReloadStudents] = useState(0);

  const addStudent = (values) => {
    console.log(values);
    setReloadStudents((prevState) => {
      return prevState + 1;
    });
    UIaddNewStudent((prevStudent) => {
      return [values, ...prevStudent];
    });
  };
  //get function...............................................................................

  useEffect(() => {
    console.log("5");
    fetch("http://localhost:8080/getStudents", {
      method: "GET",
      headers: new Headers({ "content-type": "application/json" }),
    })
      .then((response) => response.json())
      .then((data) => {
        let temp = [...data];
        temp.map((x) => (x.date = new Date(2019, 5, 12)));
        console.log("response");
        console.log(...temp);

        DBaddNewStudents(temp);
      })
      .catch((error) => console.log(error));
  }, [addStudent]);
  // useEffect(() => {
  //   fetch("http://localhost:8080/getStudents", {
  //     method: "GET",
  //     headers: new Headers({ "content-type": "application/json" }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       let temp = [...data];
  //       temp.map((x) => (x.date = new Date(2019, 5, 12)));
  //       DBaddNewStudents(temp);
  //       // addNewExpenses(temp);
  //     });
  // }, [addStudent]);

  return (
    <div className="App">
      <h2>heading</h2>
      <Newstudent addStudentDetails={addStudent} />
      <StudentDetails items={DBStudents} />
    </div>
  );
}

export default App;
