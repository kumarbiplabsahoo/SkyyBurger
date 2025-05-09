import React from "react";

import styles from "../../styles/formStyles.module.css";

export default function AddForms({ formData, onChange }) {
  return (
    <form className={styles.form}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData?.name || ""}
          onChange={onChange}
          placeholder="Enter full name"
        />
      </label>
      <label>
        Role:
        <input
          type="text"
          name="role"
          value={formData?.role || ""}
          onChange={onChange}
          placeholder="Enter role"
        />
      </label>
    </form>
  );
}
