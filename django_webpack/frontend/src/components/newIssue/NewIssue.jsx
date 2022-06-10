import { Typography } from "@mui/material";
import React, { useState } from "react";
import "./newIssue.scss";
import {
  doc,
  collection,
  addDoc,
  setDoc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { async } from "@firebase/util";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function NewIssue() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
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
        <form onSubmit={handleAdd}>
          <div className="formInput">
            <label>Title</label>
            <input
              id="title"
              type="text"
              placeholder="Title..."
              className="inp"
              onChange={handleInput}
            />
          </div>
          <div className="formInput">
            <label>Description</label>
            <textarea
              id="description"
              type="text"
              className="inpDesc"
              placeholder="Description..."
              onChange={handleInput}
            />
          </div>
          <div className="formInput">
            <label>Priority</label>
            <select
              name="priorities"
              id="priority"
              className="inp"
              onChange={handleInput}
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
              onChange={handleInput}
            >
              <optgroup>
                <option value="defualt"> </option>
                <option value="bug">Bug</option>
                <option value="feature">Feature</option>
              </optgroup>
            </select>
          </div>
          <div className="formInput">
            <label>Created By</label>
            <input
              id="created_by"
              type="text"
              className="inp"
              onChange={handleInput}
            />
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
