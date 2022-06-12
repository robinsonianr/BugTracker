import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axiosInstance from "../../axios";

export default function Logout() {
  const history = useNavigate();
  useEffect(() => {
    const response = axiosInstance.post("user/logout/blacklist/", {
      refresh_token: localStorage.getItem("refresh_token"),
    });
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    axiosInstance.defaults.headers["Authorization"] = null;
    history("/login", { replace: true });
  });

  return <div>Logout</div>;
}
