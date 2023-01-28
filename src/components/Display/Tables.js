import TableBody from "./TableBody";
import "./Tables.css";

function Tables(props) {
  return (
    <table className="tables">
      <tr>
        <th className="tablehead ">Name</th>
        <th className="tablehead ">Date</th>
        <th className="tablehead ">Class</th>
        <th className="tablehead ">Division</th>
        <th className="tablehead ">Gender</th>
      </tr>
      {props.items.map((datas) => {
        return (
          <TableBody
            key={datas.id}
            name={datas.name}
            date={datas.date}
            classes={datas.classes}
            division={datas.division}
            gender={datas.gender}
          ></TableBody>
        );
      })}
    </table>
  );
}

export default Tables;
