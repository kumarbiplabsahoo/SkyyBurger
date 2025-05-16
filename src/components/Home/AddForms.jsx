import React, { useEffect } from "react";

import styles from "../../styles/formStyles.module.css";

export default function AddForms({ user, SetUser }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    SetUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className={styles.form}>
      <label>
        First Name:
        <input
          type="text"
          placeholder="Enter First name"
          name="First_name"
          value={user?.First_name || ""}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Last Name:
        <input
          type="text"
          placeholder="Enter Last name"
          name="Last_name"
          value={user?.Last_name || ""}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="Email"
          placeholder="Enter Email"
          value={user?.Email || ""}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="Password"
          placeholder="Enter Password"
          value={user?.Password || ""}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Gender:
        <select
          name="Gender"
          value={user?.Gender || ""}
          onChange={handleInputChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </label>
    </form>
  );
}
