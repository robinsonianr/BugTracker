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
        <div className="createForm">
          <div className="title">
            <label>Title</label>
            <input type="text"  />
          </div>
          <div className="description">
            <label>Description</label>
            <textarea type="text"  className="inp" />
          </div>
          <div className="priority">
            <label>Priority</label>
            <input type="text" />
          </div>
          <div className="issueType">
            <label>Issue Type</label>
            <input type="text" />
          </div>
          <div className="createdBy">
            <label>Created By</label>
            <input type="text" />
          </div>
          
        </div>
      </div>
    </div>
  );
}
