import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import { userLogin } from "../../services/authServices";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginData, SetLoginData] = useState({
    Email: "",
    Password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    SetLoginData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await userLogin(loginData);
      console.log(res);

      if (res?.token) {
        sessionStorage.setItem("token", res.token);
        navigate("/");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Login</h2>

        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          name="Email"
          value={loginData?.Email}
          onChange={handleInputChange}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          name="Password"
          value={loginData?.Password}
          onChange={handleInputChange}
          required
        />

        <button type="submit" className={styles.button} onClick={handleSubmit}>
          Login
        </button>

        {/* Signup link */}
        <p className={styles.switchText}>
          Don't have an account?{" "}
          <Link to="/signup" className={styles.link}>
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
