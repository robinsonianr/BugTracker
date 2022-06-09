import  React from "react";
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AddTaskIcon from '@mui/icons-material/AddTask';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import Drawer from "@mui/material/Drawer";
import BugReportIcon from "@mui/icons-material/BugReport";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";




export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="header">
        <BugReportIcon className="icon"/>
        <Link to="/" style={{textDecoration: "none"}}>
        <span className="logo">Bug Tracker</span>
        </Link>
      </div>
      <hr/>
      <div className="content">
        <ul>
          <li>
            <DashboardIcon className="icon"/>
            <Link to="/" style={{textDecoration: "none"}}>
              <span>Dashboard</span>
            </Link>
            
          </li>
          <li>
            <TaskAltIcon className="icon"/>
            <Link to="/issues" style={{textDecoration: "none"}}>
              <span >Issues</span>
            </Link>
            
          </li>
          <li>
            <AddTaskIcon className="icon"/>
            <Link to="/create-issue" style={{textDecoration: "none"}}>
              <span >Create Issues</span>
            </Link>
            
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
