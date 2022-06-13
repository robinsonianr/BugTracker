import App from "./App";
import React from "react";
var ReactDOM = require("react-dom");
import { AuthContextProvider } from "./components/context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("app")
);
