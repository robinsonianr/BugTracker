import React from "react";
import ViewIssue from "../../viewIssue/ViewIssue";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import "./viewPage.scss";

export default function EditPage() {
  return (
    <div className="viewPage">
      <Sidebar />
      <div className="viewContainer">
        <Navbar />
        <ViewIssue />
      </div>
    </div>
  );
}
