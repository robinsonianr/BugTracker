import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, Container, Toolbar } from "@mui/material";
import Sidebar from "../../sidebar/Sidebar";
import "./dashboard.scss";
import Navbar from "../../navbar/Navbar";
import Widget from "../../widget/Widget";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashContainer">
        <Navbar/>
        <div className="widgets">
          <Widget/>
        </div>
      </div>
    </div>
  );
}
