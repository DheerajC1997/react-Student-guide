import "./TableBody";
//import Format from "../UI/Format";
import StudentDate from "./StudentDate";
import { useState } from "react";

function TableBody(props) {
  const [updateStudent, setUpdateStudent] = useState([]);

  const deleteList = () => {
    fetch("http://localhost:8080/delete/" + props.studentData.id, {
      method: "DELETE",
      headers: new Headers({ "content-type": "application/json" }),
    })
      .then(() => {
        props.deleteDetails5();
      })
      .catch((error) => console.log(error));
  };

  const deleteFunction = () => {
    deleteList();
  };
  const updatefunction = () => {
    props.updateDetails5(props.studentData);
  };

  return (
    <tr>
      <td className="tablebody ">{props.studentData.name}</td>
      <StudentDate date={props.studentData.date}></StudentDate>

      <td className="tablebody ">{props.studentData.classes}</td>
      <td className="tablebody ">{props.studentData.division}</td>
      <td className="tablebody ">{props.studentData.gender}</td>
      <td>
        <button onClick={deleteFunction}>Delete</button>
        <button onClick={updatefunction}>Update</button>
      </td>
    </tr>
  );
}

export default TableBody;
