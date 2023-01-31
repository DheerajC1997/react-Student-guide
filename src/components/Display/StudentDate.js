import "./StudentDate.css";

function StudentDate(props) {
  // const Day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const Month = props.date.toLocaleString("en-US", { month: "long" });
  // const Year = props.date.toLocaleString("en-US", { year: "long" });
  return <td className="tablebody">{props.date.split("T")[0]}</td>;
}
export default StudentDate;
