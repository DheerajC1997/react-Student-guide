import "./NewStudent.css";
import StudentForm from "./StudentForm";
import { useState } from "react";

function Newstudent(props) {
  const addStudentdetails = (values) => {
    const newValues = values;
    props.addStudentDetails(newValues);
    //console.log(newValues);
  };
  //console.log(props.studentData);
  return (
    <div className="new-student">
      <StudentForm
        addStudent={addStudentdetails}
        studentData={props.studentData}
      ></StudentForm>
    </div>
  );
}

export default Newstudent;
