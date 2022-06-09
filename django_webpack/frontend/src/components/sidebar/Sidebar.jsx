import * as React from "react";
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AddTaskIcon from '@mui/icons-material/AddTask';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import Drawer from "@mui/material/Drawer";
import BugReportIcon from "@mui/icons-material/BugReport";
import styled from "@emotion/styled";




export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="header">
        <BugReportIcon className="icon"/>
        <span className="logo">Bug Tracker</span>
      </div>
      <hr/>
      <div className="content">
        <ul>
          <li>
            <DashboardIcon className="icon"/>
            <a href="/">Dashboard</a>
            {/* <span>Dashboard</span> */}
          </li>
          <li>
            <TaskAltIcon className="icon"/>
            <a href="/issues">Issues</a>
            {/* <span >Issues</span> */}
          </li>
          <li>
            <AddTaskIcon className="icon"/>
            <a href="/create-issue">Create Issues</a>
            {/* <span >Create Issues</span> */}
          </li>
        </ul>
      </div>  
      <div className="bottom">
          <ul>
            <li>
            <PersonOutlineIcon className="icon"/>
            <span >User</span>
          </li>
          <li>
            <LogoutIcon className="icon"/>
            <span>Logout</span>
          </li>
          </ul>
      </div>
    </div>
  );
}
