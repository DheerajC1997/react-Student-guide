import TableBody from "./TableBody";
import "./Tables.css";

function Tables(props) {
  const updateDetails4 = (values) => {
    props.updateDetails3(values);
  };
  const deleteDetails4 = () => {
    props.deleteDetails3();
  };
  return (
    <table>
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
            id={datas.id}
            name={datas.name}
            date={datas.date}
            classes={datas.classes}
            division={datas.division}
            gender={datas.gender}
            deleteDetails5={deleteDetails4}
            updateDetails5={updateDetails4}
          ></TableBody>
        );
      })}
    </table>
  );
}

export default Tables;
