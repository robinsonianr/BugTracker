import "./viewIssue.scss";

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
    created_by: "",
    date_added: "",
  });
  const [formData, updateFormData] = useState({ initialFormData });

  useEffect(() => {
    axiosInstance.get("view/issuedetail/" + id + "/").then((res) => {
      updateFormData({
        ...formData,
        ["title"]: res.data.title,
        ["description"]: res.data.description,
        ["priority"]: res.data.priority,
        ["issue_type"]: res.data.issue_type,
        ["date_added"]: res.data.date_added,
        ["created_by"]: res.data.created_by,
      });
      console.log(res.data);
    });
  }, [updateFormData]);

  return (
    <div className="editIssue">
      <div className="header">
        <Typography className="head" variant="h2">
          Edit New Issue
        </Typography>
      </div>

      <div className="editForm">
        <form>
          <div className="formInput">
            <label>Title</label>
            <input
              name="title"
              id="title"
              type="text"
              placeholder="Title..."
              className="inp"
              value={formData.title}
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
            />
          </div>
          <div className="formInput">
            <label>Priority</label>
            <input
              name="priorites"
              id="priority"
              type="text"
              placeholder="Priority"
              className="inp"
              value={formData.priority}
            />
          </div>

          <div className="formInput">
            <label>Issue Type</label>
            <input
              name="issueTypes"
              id="issue_types"
              type="text"
              placeholder="Issue Type"
              className="inp"
              value={formData.issue_type}
            />
          </div>

          <div className="formInput">
            <label>Date Created</label>
            <input
              name="dateCreated"
              id="date_added"
              type="text"
              placeholder="date added"
              className="inp"
              value={formData.date_added}
            />
          </div>

          <div className="formInput">
            <label>Created By User</label>
            <input
              name="createdBy"
              id="created_by"
              type="text"
              placeholder="Created By"
              className="inp"
              value={formData.created_by}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
