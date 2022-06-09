import React from "react";
import "./App.css";
import CreateIssue from "./components/pages/createIssues/CreateIssue";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Issues from "./components/pages/issues/Issues";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-issue" element={<CreateIssue />} />
          <Route path="/issues" element={<Issues />} />
        </Routes>
      </BrowserRouter>
    </div>
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
