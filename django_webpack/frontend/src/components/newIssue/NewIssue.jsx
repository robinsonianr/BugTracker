import { Typography } from "@mui/material";
import React, { useState } from "react";
import "./newIssue.scss";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";

export default function NewIssue() {
  const token = localStorage.getItem("access_token");

  function parseJwt(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }

  const initialFormData = Object.freeze({
    title: "",
    description: "",
    priority: "",
    issue_type: "",
  });
  const [formData, setFormData] = useState({ initialFormData });

  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setFormData({ ...formData, [id]: value });
  };

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axiosInstance
      .post("create/", {
        title: formData.title,
        description: formData.description,
        priority: formData.priority,
        issue_type: formData.issue_type,
        created_by: parseJwt(token).user_id,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate(-1);
      });
  };

  const handleAdd = async (e) => {
    const uid = JSON.parse(localStorage.getItem("user")).uid;
    e.preventDefault();
    var timestamp = Timestamp.fromDate(new Date());
    const resp = await addDoc(collection(db, "Issues"), {
      ...data,
      date_added: timestamp.toDate().toLocaleString(),
      userKey: uid,
    });
    navigate(-1);
  };

  return (
    <div className="newIssue">
      <div className="header">
        <Typography className="head" variant="h2">
          Create New Issue
        </Typography>
      </div>

      <div className="createForm">
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
