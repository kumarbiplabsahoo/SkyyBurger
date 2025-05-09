import React from "react";
import styles from "../../styles/formStyles.module.css";

export default function ViewForms({ formData }) {
  return (
    <div className={styles.view}>
      <p>
        <strong>Name:</strong> {formData?.name}
      </p>
      <p>
        <strong>Role:</strong> {formData?.role}
      </p>
    </div>
  );
}
