import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { Typography } from "@mui/material";
import { useState } from "react";
import axiosInstance from "../../../axios";

export default function Register() {
  const initialFormData = Object.freeze({
    email: "",
    username: "",
    password: "",
  });

  const [formData, updateFormData] = useState(initialFormData);
  const history = useNavigate();

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    updateFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axiosInstance
      .post("user/register/", {
        email: formData.email,
        user_name: formData.username,
        password: formData.password,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        history("/login", { replace: true });
      });
  };

  return (
    <div className="register">
      <Typography className="header" variant="h1" style={{ color: "gold" }}>
        Regsiter
      </Typography>
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          type="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          id="username"
          type="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          id="password"
          type="text"
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit">Register</button>
        <Link to="/login" style={{ textDecoration: "none", marginTop: 10 }}>
          <span>Already have an account? Login here</span>
        </Link>
      </form>
    </div>
  );
}
