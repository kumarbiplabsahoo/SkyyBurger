import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.css";
import { userLogin } from "../../services/authServices";

const LoginPage = () => {
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
    await userLogin(loginData).then((res) => {
      console.log(res);
    });
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
