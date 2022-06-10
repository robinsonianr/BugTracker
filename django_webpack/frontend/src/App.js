import React, { useContext } from "react";
import "./App.css";
import CreateIssue from "./components/pages/createIssues/CreateIssue";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Issues from "./components/pages/issues/Issues";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import Login from "./components/pages/login/Login";
import { AuthContext } from "./components/context/AuthContext";

export default function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  console.log(currentUser);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/create-issue"
            element={
              <RequireAuth>
                <CreateIssue />
              </RequireAuth>
            }
          />
          <Route
            path="/issues"
            element={
              <RequireAuth>
                <Issues />
              </RequireAuth>
            }
          />
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
