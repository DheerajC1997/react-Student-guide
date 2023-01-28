import "./NewStudent.css";
import StudentForm from "./StudentForm";

function Newstudent(props) {
  const addStudentdetails = (values) => {
    const newValues = values;
    props.addStudentDetails(newValues);
    //console.log(newValues);
  };

  return (
    <div className="new-student">
      <StudentForm addStudent={addStudentdetails}></StudentForm>
    </div>
  );
}

export default Newstudent;
