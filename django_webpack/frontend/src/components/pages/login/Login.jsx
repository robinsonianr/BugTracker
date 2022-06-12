import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axiosInstance from "../../../axios";
import { Typography } from "@mui/material";

export default function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);
  const initialFormData = Object.freeze({
    email: "",
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
      .post("token/", {
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        axiosInstance.defaults.headers["Authoriztation"] =
          "JWT " + localStorage.getItem("access_token");
        const user = localStorage.getItem("access_token");
        dispatch({ type: "LOGIN", payload: user });
        history("/", { replace: true });
      })
      .catch((error) => {
        setError(true);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="login">
      <Typography className="header" variant="h1" style={{ color: "gold" }}>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          type="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          id="password"
          type="password"
          placeholder="password"
          autoComplete="current-password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
        <Link to="/register" style={{ textDecoration: "none", marginTop: 10 }}>
          <span className="reg">Need an account? Register here</span>
        </Link>

        {error && <span className="err">Incorrect email or password!</span>}
      </form>
    </div>
  );
}
