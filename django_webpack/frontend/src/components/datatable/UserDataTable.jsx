import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import "./userDataTable.scss";

const columns = [
  { field: "id", headerName: "ID", width: 30 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "user_name", headerName: "Username", width: 200 },
];

export default function UserDataTable() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/user/")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  return (
    <div className="userDatatable">
      <div className="userList">
        <div className="left">Users</div>
      </div>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
