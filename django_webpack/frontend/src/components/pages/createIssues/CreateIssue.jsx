import React from "react";
import Navbar from "../../navbar/Navbar";
import NewIssue from "../../newIssue/NewIssue";
import Sidebar from "../../sidebar/Sidebar";
import "./createIssues.scss"

export default function CreateIssue() {
  return (
    <div className="createIssue">
      <Sidebar />
      <div className="createContainer">
        <Navbar/>
        <NewIssue/>
      </div>
    </div>
  );
}
