import React from "react";
import { Link } from "react-router-dom";
import styles from "./signup.module.css";

const Signup = () => {
  return (
    <div className={styles.container}>
      <form className={styles.signupForm}>
        <h2 className={styles.title}>Sign Up</h2>
        <input
          type="text"
          name="First_name"
          placeholder="First Name"
          className={styles.input}
          required
        />

        <input
          type="text"
          name="Last_name"
          placeholder="Last Name"
          className={styles.input}
          required
        />

        <input
          type="email"
          name="Email"
          placeholder="Email"
          className={styles.input}
          required
        />

        <input
          type="password"
          name="Password"
          placeholder="Password"
          className={styles.input}
          required
        />

        <input
          type="password"
          name="ConfirmPassword"
          placeholder="Confirm Password"
          className={styles.input}
          required
        />

        <div className={styles.genderSelection}>
          <label>
            <input type="radio" name="Gender" value="Male" />
            Male
          </label>
          <label>
            <input type="radio" name="Gender" value="Female" />
            Female
          </label>
          <label>
            <input type="radio" name="Gender" value="Others" />
            Others
          </label>
        </div>

        <button type="submit" className={styles.button}>
          {"Sign Up"}
        </button>

        <p className={styles.switchText}>
          Already have an account?{" "}
          <Link to="/login" className={styles.link}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
