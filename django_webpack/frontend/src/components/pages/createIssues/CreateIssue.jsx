import { Container, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import "./createIssues.scss"

export default function CreateIssue() {
  return (
    <div className="createIssue">
      <Sidebar />
      <div className="createContainer">
        <Navbar/>
      </div>
    </div>
  );
}
