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
import Register from "./components/pages/register/Register";
import ViewPage from "./components/pages/ViewPage/ViewPage";
import EditPage from "./components/pages/editPage/EditPage";
import Users from "./components/pages/users/Users";

export default function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  // console.log(currentUser);

  return (
    // <div className="App">
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/" element={<Dashboard />} />
    //       <Route path="/create" element={<CreateIssue />} />
    //       <Route path="/issues" element={<Issues />} />
    //       <Route path="/edit/:id" element={<EditPage />} />
    //       <Route path="/register" element={<Register />} />
    //     </Routes>
    //   </BrowserRouter>
    // </div>

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/users"
            element={
              <RequireAuth>
                <Users />
              </RequireAuth>
            }
          />
          <Route
            path="/view/issue/:id"
            element={
              <RequireAuth>
                <ViewPage />
              </RequireAuth>
            }
          />

          <Route
            path="/edit/:id"
            element={
              <RequireAuth>
                <EditPage />
              </RequireAuth>
            }
          />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/create"
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
