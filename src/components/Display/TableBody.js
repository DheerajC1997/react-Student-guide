import "./TableBody";
//import Format from "../UI/Format";
import StudentDate from "./StudentDate";
import { useState } from "react";

function TableBody(props) {
  const [updateStudent, setUpdateStudent] = useState([]);

  const deleteList = () => {
    fetch("http://localhost:8080/delete/" + props.id, {
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
    props.updateDetails5(props);
  };

  return (
    <tr>
      <td className="tablebody ">{props.name}</td>
      <StudentDate date={props.date}></StudentDate>

      <td className="tablebody ">{props.classes}</td>
      <td className="tablebody ">{props.division}</td>
      <td className="tablebody ">{props.gender}</td>
      <button onClick={deleteFunction}>Delete</button>
      <button onClick={updatefunction}>Update</button>
    </tr>
  );
}

export default TableBody;
