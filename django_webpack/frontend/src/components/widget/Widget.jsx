import "./widget.scss";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import BugReportIcon from "@mui/icons-material/BugReport";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Widget() {
  const [issueData, setIssueData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/")
      .then((data) => data.json())
      .then((data) => setIssueData(data));
  }, []);

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/user/")
      .then((data) => data.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div className="widget">
      <div className="left">
        <span className="title">Users</span>
        <span className="counter">
          <PersonOutlineIcon className="icon" />
          {userData.length}
        </span>
        <Link to={"/users"} style={{ textDecoration: "none" }}>
          <span className="users">See all users</span>
        </Link>
      </div>
      <div className="middle">
        <BugReportIcon
          className="icon"
          style={{ backgroundColor: "rgba(255, 244, 145, 0.5)", color: "gold" }}
        />
      </div>
      <div className="right">
        <div className="tasks">
          <TaskAltIcon style={{ color: "gold" }} />
          <span>Current Issues: {issueData.length}</span>
        </div>
      </div>
    </div>
  );
}
