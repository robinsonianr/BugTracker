import "./editIssue.scss";

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axiosInstance from "../../axios";
import { useState } from "react";
import { Typography } from "@mui/material";

export default function EditIssue() {
  const navigate = useNavigate();
  const { id } = useParams();
  const initialFormData = Object.freeze({
    id: "",
    title: "",
    description: "",
    priority: "",
    issue_type: "",
  });
  const [formData, updateFormData] = useState({ initialFormData });

  useEffect(() => {
    axiosInstance.get("edit/issuedetail/" + id).then((res) => {
      updateFormData({
        ...formData,
        ["title"]: res.data.title,
        ["description"]: res.data.description,
        ["priority"]: res.data.priority,
        ["issue_type"]: res.data.issue_type,
      });
      console.log(res.data);
    });
  }, [updateFormData]);

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    updateFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axiosInstance.put("edit/" + id + "/", {
      title: formData.title,
      description: formData.description,
      created_by: 1,
      priority: formData.priority,
      issue_type: formData.issue_type,
    });
    navigate("/issues", { replace: true });
    window.location.reload();
  };

  return (
    <div className="editIssue">
      <div className="header">
        <Typography className="head" variant="h2">
          Edit New Issue
        </Typography>
      </div>

      <div className="editForm">
        <form onSubmit={handleSubmit}>
          {/*onSubmit={handleAdd}*/}
          <div className="formInput">
            <label>Title</label>
            <input
              name="title"
              id="title"
              type="text"
              placeholder="Title..."
              className="inp"
              value={formData.title}
              // onChange={handleInput}
              onChange={handleChange}
            />
          </div>
          <div className="formInput">
            <label>Description</label>
            <textarea
              id="description"
              type="text"
              className="inpDesc"
              placeholder="Description..."
              value={formData.description}
              //onChange={handleInput}
              onChange={handleChange}
            />
          </div>
          <div className="formInput">
            <label>Priority</label>
            <select
              name="priorities"
              id="priority"
              className="inp"
              value={formData.priority}
              //onChange={handleInput}
              onChange={handleChange}
            >
              <optgroup>
                <option value="default"> </option>
                <option value="critical">Critical</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </optgroup>
            </select>
          </div>
          <div className="formInput">
            <label>Issue Type</label>
            <select
              name="issueTypes"
              id="issue_type"
              className="inp"
              value={formData.issue_type}
              //onChange={handleInput}
              onChange={handleChange}
            >
              <optgroup>
                <option value="defualt"> </option>
                <option value="bug">Bug</option>
                <option value="feature">Feature</option>
              </optgroup>
            </select>
          </div>
          {/* <div className="formInput">
            <label>Created By</label>
            <input
              id="created_by"
              type="text"
              className="inp"
              //onChange={handleInput}
              onChange={handleChange}
            />
          </div> */}
          <button type="submit" className="btn">
            Edit
          </button>
        </form>
      </div>
    </div>
  );
}
