import React from "react";
import EditIssue from "../../editIssue/EditIssue";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import "./editpage.scss";

export default function EditPage() {
  return (
    <div className="editPage">
      <Sidebar />
      <div className="editContainer">
        <Navbar />
        <EditIssue />
      </div>
    </div>
  );
}
