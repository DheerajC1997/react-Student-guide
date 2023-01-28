import "./StudentDetails.css";
import Format from "../UI/Format";
import Tables from "./Tables";
function StudentDetails(props) {
  // console.log(props.items[0].name);
  return (
    <Format>
      <div>
        <Tables items={props.items}></Tables>
      </div>
    </Format>
  );
}

export default StudentDetails;
