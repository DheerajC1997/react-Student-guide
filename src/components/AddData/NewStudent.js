import "./NewStudent.css";
import StudentForm from "./StudentForm";
import { useState } from "react";

function Newstudent(props) {
  const reloadList = () => {
    props.reloadList();
    //console.log(newValues);
  };
  //console.log(props.studentData);
  return (
    <div className="new-student">
      <StudentForm
        reloadList={reloadList}
        studentData={props.studentData}
      ></StudentForm>
    </div>
  );
}

export default Newstudent;
