import "./StudentDate.css";

function StudentDate(props) {
  const Day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const Month = props.date.toLocaleString("en-US", { month: "long" });
  const Year = props.date.getFullYear();
  return (
    <td className="tablebody">
      {Day} / {Month} / {Year}
    </td>
  );
}
export default StudentDate;
