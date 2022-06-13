import React from "react";
import UserDataTable from "../../datatable/UserDataTable";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import "./users.scss";

export default function Users() {
  return (
    <div className="users">
      <Sidebar />
      <div className="usersContainer">
        <Navbar />
        <UserDataTable />
      </div>
    </div>
  );
}
