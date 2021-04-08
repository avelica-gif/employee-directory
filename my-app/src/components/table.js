import React from "react";

function Table({ data, handleSort }) {
  // console.log("Table Data");
  // console.log(data);
  return (
    <table className="table table-striped ">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">
            <button
              onClick={() => {
                handleSort(data);
              }}
            >
              Name
            </button>
          </th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">ID</th>
        </tr>
      </thead>

      <tbody>
        {/* <tr>
        <td>Image Here</td>
        <td>Avelica Rubio</td>
        <td>(555)555-5555</td>
        <td>email@email.com</td>
        <td>05-26-1993</td>
    </tr> */}
        {data.map((rows) => (
          <tr>
            <td scope="row">
              <img src={rows.picture.medium} alt="img Thumbnail" />
            </td>
            <td>
              {rows.name.first} {rows.name.last}
            </td>
            <td>{rows.phone}</td>
            <td>{rows.email}</td>
            <td>{rows.id.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
