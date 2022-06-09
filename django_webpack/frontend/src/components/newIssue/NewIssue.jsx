import { Typography } from "@mui/material"
import React from "react"
import "./newIssue.scss"

export default function NewIssue() {
  return (
      <div className="newIssue">
          <div className="header">
                <Typography className="head" variant="h2">Create New Issue</Typography>
          </div>
          
              <div className="createForm">
                <form >
                    <div className="formInput">
                        <label>Title</label>
                        <input type="text"   placeholder="Title..." className="inp"/>
                    </div>
                    <div className="formInput">
                        <label>Description</label>
                        <textarea type="text" className="inpDesc" placeholder="Description..." />
                    </div>
                    <div className="formInput">
                        <label>Priority</label>
                        <select name="priorities" id="" className="inp">
                        <optgroup>
                            <option value="critical">Critical</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </optgroup>
                        </select>
                    </div>
                    <div className="formInput">
                        <label>Issue Type</label>
                        <select name="issueTypes" id="" className="inp">
                        <optgroup>
                            <option value="bug">Bug</option>
                            <option value="feature">Feature</option>
                        </optgroup>
                        </select>
                    </div>
                    <div className="formInput">
                        <label>Created By</label>
                        <input type="text" className="inp"/>
                    </div>
                    <button className="btn">Submit</button>
                </form> 
            </div>
           
        </div>
  )
}
