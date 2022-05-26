import React from "react";
import reactlogo from "../../assets/reactlogo.png";
import djangologo from "../../assets/djangologo.png";
import "../App.css";
import CreateIssue from "./createIssues/CreateIssue";
import Dashboard from "./dashboard/Dashboard";
import Issues from "./issues/Issues";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-issue" element={<CreateIssue />} />
        <Route path="/issues" element={<Issues />} />
      </Routes>
    </Router>
  );
}

// 			<div className='App'>
// 				<HomePage />
// 				{/* <header className='App-header'>
// 						<img src={djangologo} className='django-logo' alt='django' />
// 						<img src={reactlogo} className='App-logo' alt='react' />
// 					</header> */}
// 			</div>

const appDiv = document.getElementById("app");
render(<App />, appDiv);
