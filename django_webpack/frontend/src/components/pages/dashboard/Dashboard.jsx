import React from "react";
import Typography from "@mui/material/Typography";
import Sidebar from "../../sidebar/Sidebar";
import "./dashboard.scss";
import Navbar from "../../navbar/Navbar";
import Widget from "../../widget/Widget";
import CheckIcon from "@mui/icons-material/Check";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashContainer">
        <Navbar />
        <div className="widgets">
          <Widget />
        </div>
        <div className="info">
          <Typography variant="h2" className="title" style={{ color: "gold" }}>
            New Software Development Tool For Developers
          </Typography>
          <div className="supports">
            <div className="plan">Our Plan:</div>
            <ul>
              <li>
                <CheckIcon className="icon" />
                <span>Supports up to 1000+ users</span>
              </li>
              <li>
                <CheckIcon className="icon" />
                <span>Free service</span>
              </li>
              <li>
                <CheckIcon className="icon" />
                <span>Community support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
