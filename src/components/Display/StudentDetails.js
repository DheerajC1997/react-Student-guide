import "./StudentDetails.css";
import Format from "../UI/Format";
import Tables from "./Tables";
function StudentDetails(props) {
  const updateDetails2 = (values) => {
    props.updateDetailes1(values);
  };
  const deleteDetails2 = () => {
    props.deleteDetails1();
  };

  // console.log(props.items[0].name);
  return (
    <Format>
      <div>
        <Tables
          items={props.items}
          deleteDetails3={deleteDetails2}
          updateDetails3={updateDetails2}
        ></Tables>
      </div>
    </Format>
  );
}

export default StudentDetails;
