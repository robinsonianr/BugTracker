import React, { useContext } from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AddTaskIcon from "@mui/icons-material/AddTask";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import Drawer from "@mui/material/Drawer";
import BugReportIcon from "@mui/icons-material/BugReport";
import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axiosInstance from "../../axios";

export default function Sidebar() {
  const { dispatch } = useContext(AuthContext);

  const history = useNavigate();
  const logout = () => {
    const response = axiosInstance.post("user/logout/blacklist/", {
      refresh_token: localStorage.getItem("refresh_token"),
    });
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    axiosInstance.defaults.headers["Authorization"] = null;
    history("/login", { replace: true });
  };

  return (
    <div className="sidebar">
      <div className="header">
        <BugReportIcon className="icon" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Bug Tracker</span>
        </Link>
      </div>
      <hr />
      <div className="content">
        <ul>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/" style={{ textDecoration: "none" }}>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <TaskAltIcon className="icon" />
            <Link to="/issues" style={{ textDecoration: "none" }}>
              <span>Issues</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <ul>
          <li>
            <PersonOutlineIcon className="icon" />
            <Link to={"/users"} style={{ textDecoration: "none" }}>
              <span>Users</span>
            </Link>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span onClick={(() => dispatch({ type: "LOGOUT" }), logout)}>
              Logout
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

//onClick={() => dispatch({ type: "LOGOUT" })}
