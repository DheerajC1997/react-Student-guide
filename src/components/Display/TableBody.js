import "./TableBody";
import Format from "../UI/Format";
import StudentDate from "./StudentDate";
function TableBody(props) {
  // console.log(props.name);
  return (
    <tr>
      <td className="tablebody ">{props.name}</td>
      <StudentDate date={props.date}></StudentDate>

      <td className="tablebody ">{props.classes}</td>
      <td className="tablebody ">{props.division}</td>
      <td className="tablebody ">{props.gender}</td>
    </tr>
  );
}

export default TableBody;
