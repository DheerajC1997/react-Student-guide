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
      <thead>
        <tr>
          <th className="tablehead ">Name</th>
          <th className="tablehead ">Date</th>
          <th className="tablehead ">Class</th>
          <th className="tablehead ">Division</th>
          <th className="tablehead ">Gender</th>
          <th className="tablehead ">Action</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((datas) => {
          return (
            <TableBody
              key={datas.id}
              studentData={datas}
              deleteDetails5={deleteDetails4}
              updateDetails5={updateDetails4}
            ></TableBody>
          );
        })}
      </tbody>
    </table>
  );
}

export default Tables;
