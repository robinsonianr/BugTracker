import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import React from "react";
import DataTable from "../../datatable/DataTable";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import "./issues.scss"

export default function Issues() {
  return (
    <div className="issues">
      <Sidebar />
      <div className="issueContainer">
        <Navbar/>
        <DataTable/>
      </div>
    </div>
  );
}
