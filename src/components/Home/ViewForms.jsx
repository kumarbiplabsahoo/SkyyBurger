import React from "react";
import styles from "../../styles/formStyles.module.css";

export default function ViewForms({ formData }) {
  return (
    <div className={styles.view}>
      <p>
        <strong>Name:</strong> {formData?.First_name} {formData?.Last_name}
      </p>
      <p>
        <strong>Email:</strong> {formData?.Email}
      </p>
      <p>
        <strong>Gender:</strong> {formData?.Gender}
      </p>
    </div>
  );
}
